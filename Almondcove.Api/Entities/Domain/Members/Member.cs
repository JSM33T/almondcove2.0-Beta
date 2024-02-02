using Almondcove.Api.Entities.Domain.Blogs;

namespace Almondcove.Api.Entities.Domain.Members
{
    public class Member
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string UserName { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }

        public string Role { get; set; }

        public List<Favourite> Favorites { get; set; }
        public List<BlogPost> BlogPosts { get; set; }
    }
}
