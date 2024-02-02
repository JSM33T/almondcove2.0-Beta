namespace API.Entities.Domain.Blogs
{
    public class Comment
    {
        public Guid Id { get; set; }
        public string Content { get; set; }
        public DateTime DateCreated { get; set; }
        public Guid BlogPostId { get; set; }
        public List<Reply> Replies { get; set; }
    }
}
