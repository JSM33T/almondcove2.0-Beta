using Almondcove.Api.Entities.Domain.Blogs;
using System.ComponentModel.DataAnnotations;

namespace Almondcove.Api.Entities.Domain.Members
{
    public enum Gender
    {
        Male,
        Female,
        Other
    }
    public enum Role
    {
        Admin,
        Editor,
        Member
    }
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
        public Gender Gender { get; set; }
        [StringLength(100)]
        public string Email { get; set; }
        [StringLength(50)]
        public Role Role { get; set; }

        public List<Favourite> Favorites { get; set; }
        public List<BlogPost> BlogPosts { get; set; }
    }

    public class MemberDTO
    {
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
    }
}
