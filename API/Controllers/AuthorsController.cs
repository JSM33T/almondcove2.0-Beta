using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Entities.Domain.Blogs;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{

    [Route("api/authors")]
    [ApiController]
    public class AuthorsController(AlmondDbContext context) : ControllerBase
    {
        private readonly AlmondDbContext _context = context;




        /*=============================================
                            CRUD
        =============================================*/

        // GET: api/Authors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Authors>>> GetAuthors()
        {
            return await _context.Authors.ToListAsync();
        }

        // GET: api/Authors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Authors>> GetAuthors(Guid id)
        {
            var authors = await _context.Authors.FindAsync(id);

            if (authors == null)
            {
                return NotFound();
            }

            return authors;
        }

        // PUT: api/Authors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAuthors(Guid id, Authors authors)
        {
            if (id != authors.Id)
            {
                return BadRequest();
            }

            _context.Entry(authors).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AuthorsExists(id))
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

        // POST: api/Authors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Authors>> PostAuthors(Authors authors)
        {
            _context.Authors.Add(authors);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAuthors", new { id = authors.Id }, authors);
        }

        // DELETE: api/Authors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAuthors(Guid id)
        {
            var authors = await _context.Authors.FindAsync(id);
            if (authors == null)
            {
                return NotFound();
            }

            _context.Authors.Remove(authors);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AuthorsExists(Guid id)
        {
            return _context.Authors.Any(e => e.Id == id);
        }
    }
}
