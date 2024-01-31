using API.Entities.Domain;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class AlmondDbContext : DbContext
    {
        public AlmondDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Mail> MailingList{ get; set; }

    }
}
