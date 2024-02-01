﻿using API.Entities.Domain.Blogs;

namespace API.Entities.Domain.Members
{
    public class Member
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string UserName { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }

        public List<Favourite> Favorites { get; set; }
        public List<BlogPost> BlogPosts { get; set; }
    }
}
