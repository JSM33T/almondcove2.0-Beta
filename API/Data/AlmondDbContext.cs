using API.Entities.Domain;
using Microsoft.EntityFrameworkCore;
using API.Entities.Domain.Blogs;
using API.Entities.Domain.Members;

namespace API.Data
{
    public class AlmondDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Mail> MailingList{ get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<Category> BlogCategories { get; set; }
        public DbSet<Favourite> Favourites { get; set; }
        public DbSet<Member> Members{ get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Reply> Replies { get; set; }
        public DbSet<Authors> Authors { get; set; }
        public DbSet<Like> Likes{ get; set; }

    }
}
