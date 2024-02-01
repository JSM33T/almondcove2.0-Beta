using System.ComponentModel.DataAnnotations;

namespace API.Entities.Domain.Blogs
{
    public class BlogPost
    {
        public int Id { get; set; }

        [StringLength(50)]
        public string Title { get; set; }

        [StringLength(150)]
        public string Description { get; set; }

        [StringLength(50)]
        public string Slug { get; set; }
        public string Content { get; set; }
        public DateTime DateCreated { get; set; }
        public bool IsActive { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public List<Comment> Comments{ get; set; }
        public List<Like> Likes { get; set; }
        public List<Authors> AuthorsInvolved { get; set; }
    }
}
