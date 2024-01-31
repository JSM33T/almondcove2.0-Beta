using API.Data;
using API.Entities.Domain;
using API.Entities.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/mail")]
    [ApiController]
    public class MailingListController(AlmondDbContext context) : ControllerBase
    {
        private readonly AlmondDbContext _context = context;

        [HttpGet("getall")]
        public async Task<ActionResult<IEnumerable<Mail>>> GetMailingList()
        {
            return await _context.MailingList.ToListAsync();
        }

        [HttpGet("getbyid/{id}")]
        public async Task<ActionResult<Mail>> GetMail(int id)
        {
            var mail = await _context.MailingList.FindAsync(id);

            if (mail == null)
            {
                return NotFound();
            }

            return mail;
        }

        [HttpPost("add")]
        public async Task<ActionResult<Mail>> PostMail(AddMailDTO mail)
        {
            if (MailExists(mail.Email)) return Conflict();

            Mail mailp = new()
            {
                Email = mail.Email,
                Origin = mail.Origin,
                DateAdded = DateTime.Now,
                IsActive = true
            };
            _context.MailingList.Add(mailp);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMail", new { id = mailp.Id }, mail);
        }

       

        private bool MailExists(string mail)
        {
            return _context.MailingList.Any(e => e.Email == mail);
        }
    }
}
