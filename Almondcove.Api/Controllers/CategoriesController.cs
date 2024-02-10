using Almondcove.Api.Data;
using Almondcove.Api.Entities.Domain;
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

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<CategoryDTO>>> GetCategories()
        {
            if (_cache.TryGetValue("Categories", out List<CategoryDTO> cachedCategories))
            {
                return cachedCategories;
            }

            var categories = await _context.Categories.ToListAsync();
            var categoryDtos = categories.Select(category => new CategoryDTO
            {
                Name = category.Name,
                Description = category.Description,
                Slug = category.Slug,
                Type = category.Type.ToString()
            }).ToList();

            _cache.Set("Categories", categoryDtos, TimeSpan.FromMinutes(5));
            return categoryDtos;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(Guid id)
        {
            var category = await _context.Categories.FindAsync(id);
            return category != null ? category : NotFound();
        }


        [HttpPost]
        public async Task<IActionResult> PostCategory(CategoryDTO categoryDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var category = new Category
            {
                Name = categoryDto.Name,
                Description = categoryDto.Description,
                Slug = categoryDto.Slug,
                Type = (CategoryType)Enum.Parse(typeof(CategoryType), categoryDto.Type)
            };

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return Ok();
        }


    }
}
