using Almondcove.Api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Almondcove.Api.Controllers
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

    }
}
