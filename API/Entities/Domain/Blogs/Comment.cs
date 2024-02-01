namespace API.Entities.Domain.Blogs
{
    public class Comment
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime DateCreated { get; set; }
        public int BlogPostId { get; set; }
        public List<Reply> Replies { get; set; }
    }
}
