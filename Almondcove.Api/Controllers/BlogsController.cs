using Almondcove.Api.Data;
using Almondcove.Api.Entities.Domain.Blogs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Almondcove.Api.Controllers
{

    [Route("api/blogs")]
    [ApiController]
    public class BlogsController(AlmondDbContext context) : ControllerBase
    {
        private readonly AlmondDbContext _context = context;

        /*=======================================================================================================================================
                                                            GET TOP 3 BLOGS
        =======================================================================================================================================*/
        [HttpGet("top3")]
        public async Task<IActionResult> GetTopBlogs()
        {
            var latest3Blogs = await _context.BlogPosts
              .OrderByDescending(bp => bp.DateCreated)
              .Take(3) 
              .Select(bp => new
              {
                  BlogPost = bp,
                  NumberOfComments = bp.Comments.Count(),
                  NumberOfLikes = bp.Likes.Count()
              })
              .AsNoTracking()
              .ToListAsync();
            return Ok(latest3Blogs);
        }


        /*=======================================================================================================================================
                                                                    GET BLOG BY SLUG
        =======================================================================================================================================*/

        [HttpGet("getbyslug/{Slug}")]
        public async Task<ActionResult<BlogPost>> GetBlogPost(string Slug)
        {
            var blogPost = await _context.BlogPosts.FirstOrDefaultAsync(b => b.Slug == Slug);
            return blogPost != null ? Ok(blogPost) : NotFound();
        }

        /*=============================================
                            CRUD
        =============================================*/

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogPost>>> GetBlogPosts()
        {
            return await _context.BlogPosts.ToListAsync();
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<BlogPost>> GetBlogPost(Guid id)
        {
            var blogPost = await _context.BlogPosts.FindAsync(id);
            return blogPost != null ? Ok(blogPost) : BadRequest();
        }

       

        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogPost(Guid id, BlogPost blogPost)
        {
            if (id != blogPost.Id) return BadRequest();

            _context.Entry(blogPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                return BlogPostExists(id) ? NotFound() : throw new Exception("something went wrong");
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<BlogPost>> PostBlogPost(BlogPost blogPost)
        {
             _context.BlogPosts.Add(blogPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogPost", new { id = blogPost.Id }, blogPost);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogPost(Guid id)
        {
            var blogPost = await _context.BlogPosts.FindAsync(id);
            if (blogPost == null) return NotFound();

            _context.BlogPosts.Remove(blogPost);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BlogPostExists(Guid id)
        {
            return _context.BlogPosts.Any(e => e.Id == id);
        }
    }
}
