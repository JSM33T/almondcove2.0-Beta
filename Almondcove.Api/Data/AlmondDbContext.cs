using Almondcove.Api.Entities.Domain;
using Microsoft.EntityFrameworkCore;
using Almondcove.Api.Entities.Domain.Blogs;
using Almondcove.Api.Entities.Domain.Members;

namespace Almondcove.Api.Data
{
    public class AlmondDbContext(DbContextOptions options) : DbContext(options)
    {   
        public DbSet<Mail> MailingList{ get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Favourite> Favourites { get; set; }
        public DbSet<Member> Members{ get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Reply> Replies { get; set; }
        public DbSet<Authors> Authors { get; set; }
        public DbSet<Like> Likes{ get; set; }
        public DbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Authors>()
                .HasIndex(e => new { e.MemberId, e.BlogPostId})
                .IsUnique();
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
        //}


    }
}
