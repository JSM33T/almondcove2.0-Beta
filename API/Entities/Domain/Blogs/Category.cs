using System.ComponentModel.DataAnnotations;

namespace API.Entities.Domain.Blogs
{
    public class Category
    {
        public Guid Id { get; set; }
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(200)]
        public string Description { get; set; }
        public List<BlogPost> Posts { get; set; }
    }
}
