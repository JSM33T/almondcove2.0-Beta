namespace API.Entities.Domain.Blogs
{
    public class Like
    {
        public int Id { get; set; }
        public int MemberId{ get; set; }
        public DateTime DateCreated { get; set; }
        public int BlogPostId { get; set; }
    }
}
