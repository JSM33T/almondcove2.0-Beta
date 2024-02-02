namespace Almondcove.Api.Entities.Domain.Blogs
{
    public class Reply
    {
        public Guid Id { get; set; }
        public string Content { get; set; }
        public DateTime DateCreated { get; set; }
        public Guid CommentId { get; set; }
    }
}
