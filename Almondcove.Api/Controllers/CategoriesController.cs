﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Almondcove.Api.Data;
using Almondcove.Api.Entities.Domain.Blogs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Caching.Memory;

namespace Almondcove.Api.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoriesController(AlmondDbContext context) : ControllerBase
    {
        private readonly AlmondDbContext _context = context;


        /*=============================================
                            CRUD
        =============================================*/
        // GET: api/Categories
        //[HttpGet]
        //[AllowAnonymous]
        //public async Task<ActionResult<IEnumerable<Category>>> GetBlogCategories()
        //{
        //    return await _context.BlogCategories.ToListAsync();
        //}

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetBlogCategories([FromServices] IMemoryCache cache)
        {
            
            if (cache.TryGetValue("BlogCategories", out List<Category> cachedCategories))
            {
             
                return cachedCategories;
            }
            
            var categories = await _context.BlogCategories.ToListAsync();

            
            cache.Set("BlogCategories", categories, TimeSpan.FromHours(5));

            return categories;
        }

        // GET: api/Categories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(Guid id)
        {
            var category = await _context.BlogCategories.FindAsync(id);

            if (category == null)
            {
                return NotFound();
            }

            return category;
        }

        // PUT: api/Categories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategory(Guid id, Category category)
        {
            if (id != category.Id)
            {
                return BadRequest();
            }

            _context.Entry(category).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
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

        // POST: api/Categories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Category>> PostCategory(Category category)
        {
            _context.BlogCategories.Add(category);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategory", new { id = category.Id }, category);
        }

        // DELETE: api/Categories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(Guid id)
        {
            var category = await _context.BlogCategories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }

            _context.BlogCategories.Remove(category);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryExists(Guid id)
        {
            return _context.BlogCategories.Any(e => e.Id == id);
        }
    }
}
