using API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/test")]
    [ApiController]
    [AllowAnonymous]
    public class TestController(AlmondDbContext context) : ControllerBase
    {
        private readonly AlmondDbContext _context = context;

        [HttpGet("{id}")]
        public IActionResult GetBlogWithComments(Guid id)
        {
            // Load the blog post with its comments
            var blogPost = _context.BlogPosts
                .Include(bp => bp.Comments)
                .FirstOrDefault(bp => bp.Id == id);

            if (blogPost == null)
            {
                return NotFound();
            }

            return Ok(blogPost);
        }

        [Authorize(Roles = "admin")]
        [HttpGet("top3")]
        public IActionResult GetTop3BlogsWithComments()
        {
            var latest3Blogs = _context.BlogPosts
                 .OrderByDescending(bp => bp.DateCreated) // Order by date in descending order
                 .Take(3) // Take the top 3 blogs
                 .Select(bp => new
                 {
                     BlogPost = bp,
                     NumberOfComments = bp.Comments.Count(),
                     NumberOfLikes = bp.Likes.Count()
                 })
                 .ToList();

            return Ok(latest3Blogs);
        }

    }
}
