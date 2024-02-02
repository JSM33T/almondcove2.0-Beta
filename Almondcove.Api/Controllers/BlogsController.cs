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
              .ToListAsync();

            return Ok(latest3Blogs);
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
        public async Task<ActionResult<BlogPost>> GetBlogPost(Guid id)
        {
            var blogPost = await _context.BlogPosts.FindAsync(id);

            if (blogPost == null)
            {
                return NotFound();
            }

            return blogPost;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogPost(Guid id, BlogPost blogPost)
        {
            if (id != blogPost.Id)
            {
                return BadRequest();
            }

            _context.Entry(blogPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogPostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
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
            if (blogPost == null)
            {
                return NotFound();
            }

            _context.BlogPosts.Remove(blogPost);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //[HttpGet]
        //public async Task<IActionResult> GetBlogDeets(string Slug, string Year)
        //{
            
        //}


        private bool BlogPostExists(Guid id)
        {
            return _context.BlogPosts.Any(e => e.Id == id);
        }
    }
}
