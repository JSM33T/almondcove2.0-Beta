using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Entities.Domain.Members;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [Authorize(Roles = "NA")]
    [Route("api/[controller]")]
    [ApiController]
    public class FavouritesController(AlmondDbContext context) : ControllerBase
    {
        private readonly AlmondDbContext _context = context;


        /*=============================================
                            CRUD
        =============================================*/
        // GET: api/Favourites
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Favourite>>> GetFavourites()
        {
            return await _context.Favourites.ToListAsync();
        }

        // GET: api/Favourites/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Favourite>> GetFavourite(Guid id)
        {
            var favourite = await _context.Favourites.FindAsync(id);

            if (favourite == null)
            {
                return NotFound();
            }

            return favourite;
        }

        // PUT: api/Favourites/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFavourite(Guid id, Favourite favourite)
        {
            if (id != favourite.Id)
            {
                return BadRequest();
            }

            _context.Entry(favourite).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FavouriteExists(id))
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

        // POST: api/Favourites
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Favourite>> PostFavourite(Favourite favourite)
        {
            _context.Favourites.Add(favourite);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFavourite", new { id = favourite.Id }, favourite);
        }

        // DELETE: api/Favourites/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavourite(Guid id)
        {
            var favourite = await _context.Favourites.FindAsync(id);
            if (favourite == null)
            {
                return NotFound();
            }

            _context.Favourites.Remove(favourite);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FavouriteExists(Guid id)
        {
            return _context.Favourites.Any(e => e.Id == id);
        }
    }
}
