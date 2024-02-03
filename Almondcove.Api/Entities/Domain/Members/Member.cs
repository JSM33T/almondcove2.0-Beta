using Almondcove.Api.Entities.Domain.Blogs;
using System.ComponentModel.DataAnnotations;

namespace Almondcove.Api.Entities.Domain.Members
{
    public class Member
    {
        public Guid Id { get; set; }
        [StringLength(50)]
        public string FirstName { get; set; }
        [StringLength(50)]
        public string LastName { get; set; }
        [StringLength(50)]
        public string UserName { get; set; }
        [StringLength(1)]
        public string Gender { get; set; }
        [StringLength(100)]
        public string Email { get; set; }
        [StringLength(50)]
        public string Role { get; set; }

        public List<Favourite> Favorites { get; set; }
        public List<BlogPost> BlogPosts { get; set; }
    }
}
