using Almondcove.Api.Data;
using Almondcove.Api.Entities.Domain.Members;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Almondcove.Api.Controllers
{
   
    [Route("api/members")]
    [ApiController]
    public class MembersController(AlmondDbContext context) : ControllerBase
    {
        private readonly AlmondDbContext _context = context;




        /*=============================================
                            CRUD
        =============================================*/


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Member>>> GetMembers() => await _context.Members.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Member>> GetMember(Guid id)
        {
            var member = await _context.Members.FindAsync(id);

            return member != null ? member : NotFound();
        }


        [HttpPost]
        public async Task<ActionResult<Member>> PostMember(Member member)
        {
            _context.Members.Add(member);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMember", new { id = member.Id }, member);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMember(Guid id)
        {
            var member = await _context.Members.FindAsync(id);

            if (member == null) return NotFound();

            _context.Members.Remove(member);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MemberExists(Guid id)
        {
            return _context.Members.Any(e => e.Id == id);
        }
    }
}
