using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Almondcove.Api.Data;
using Almondcove.Api.Entities.Domain;

namespace Almondcove.Api.Controllers
{
    [Route("api/mails")]
    [ApiController]
    public class MailsController : ControllerBase
    {
        private readonly AlmondDbContext _context;

        public MailsController(AlmondDbContext context)
        {
            _context = context;
        }




        /*=============================================
                            CRUD
        =============================================*/
        // GET: api/Mails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mail>>> GetMailingList()
        {
            return await _context.MailingList.ToListAsync();
        }

        // GET: api/Mails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Mail>> GetMail(Guid id)
        {
            var mail = await _context.MailingList.FindAsync(id);

            if (mail == null)
            {
                return NotFound();
            }

            return mail;
        }

        // PUT: api/Mails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMail(Guid id, Mail mail)
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

        [HttpPost]
        public async Task<ActionResult<Mail>> PostMail(Mail mail)
        {
            _context.MailingList.Add(mail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMail", new { id = mail.Id }, mail);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMail(Guid id)
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

        private bool MailExists(Guid id)
        {
            return _context.MailingList.Any(e => e.Id == id);
        }
    }
}
