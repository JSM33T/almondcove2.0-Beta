using API.Entities.Domain.Members;

namespace API.Entities.Domain.Blogs
{
    public class Authors
    {
        public int Id { get; set; }
        public int MemberId { get; set; }
        public Member Member { get; set; }
        public int BlogPostId { get; set; }
        public BlogPost BlogPost { get; set; }
    }
}
