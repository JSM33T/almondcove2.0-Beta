using Almondcove.Api.Data;
using Almondcove.Api.Entities.Domain.Blogs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;

namespace Almondcove.Api.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoriesController(AlmondDbContext context, IMemoryCache memoryCache) : ControllerBase
    {
        private readonly AlmondDbContext _context = context;
        private readonly IMemoryCache _cache = memoryCache;

        //[HttpGet]
        //[AllowAnonymous]
        //public async Task<ActionResult<IEnumerable<Category>>> GetBlogCategories()
        //{

        //    if (_cache.TryGetValue("BlogCategories", out List<Category> cachedCategories))
        //    {
        //        return cachedCategories;
        //    }

        //    var categories = await _context.BlogCategories.ToListAsync();

        //    _cache.Set("BlogCategories", categories, TimeSpan.FromHours(5));

        //    return categories;
        //}

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<CategoryDTO>>> GetBlogCategories()
        {
            if (_cache.TryGetValue("BlogCategories", out List<CategoryDTO> cachedCategories))
            {
                return cachedCategories;
            }

            var categories = await _context.BlogCategories.ToListAsync();
            var categoryDtos = categories.Select(category => new CategoryDTO
            {
                Name = category.Name,
                Description = category.Description,
            }).ToList();

            _cache.Set("BlogCategories", categoryDtos, TimeSpan.FromHours(5));

            return categoryDtos;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(Guid id)
        {
            var category = await _context.BlogCategories.FindAsync(id);
            return category != null ? category : NotFound();
        }


        [HttpPost]
        public async Task<IActionResult> PostCategory(CategoryDTO categoryDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var category = new Category
            {
                Name = categoryDto.Name,
                Description = categoryDto.Description,
            };

            _context.BlogCategories.Add(category);
            await _context.SaveChangesAsync();

            return Ok();
        }


    }
}
