namespace API.Entities.Domain.Blogs
{
    public class Reply
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime DateCreated { get; set; }
        public int CommentId { get; set; }
    }
}
