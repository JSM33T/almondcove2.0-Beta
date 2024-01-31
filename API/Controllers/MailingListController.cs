using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Entities.Domain;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailingListController(AlmondDbContext context) : ControllerBase
    {
        private readonly AlmondDbContext _context = context;

        // GET: api/MailingList
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mail>>> GetMailingList()
        {
            return await _context.MailingList.ToListAsync();
        }

        // GET: api/MailingList/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Mail>> GetMail(int id)
        {
            var mail = await _context.MailingList.FindAsync(id);

            if (mail == null)
            {
                return NotFound();
            }

            return mail;
        }

        // PUT: api/MailingList/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMail(int id, Mail mail)
        {
            if (id != mail.Id)
            {
                return BadRequest();
            }

            _context.Entry(mail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MailExists(id))
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

        // POST: api/MailingList
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Mail>> PostMail(Mail mail)
        {
            _context.MailingList.Add(mail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMail", new { id = mail.Id }, mail);
        }

        // DELETE: api/MailingList/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMail(int id)
        {
            var mail = await _context.MailingList.FindAsync(id);
            if (mail == null)
            {
                return NotFound();
            }

            _context.MailingList.Remove(mail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MailExists(int id)
        {
            return _context.MailingList.Any(e => e.Id == id);
        }
    }
}
