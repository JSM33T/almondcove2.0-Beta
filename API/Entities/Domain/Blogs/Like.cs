namespace API.Entities.Domain.Blogs
{
    public class Like
    {
        public Guid Id { get; set; }
        public Guid MemberId { get; set; }
        public DateTime DateCreated { get; set; }
        public Guid BlogPostId { get; set; }
    }
}
