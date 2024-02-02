using Almondcove.Api.Entities.Domain.Members;
using Microsoft.EntityFrameworkCore;

namespace Almondcove.Api.Entities.Domain.Blogs
{
    public class Authors
    {
        public Guid Id { get; set; }
        public Guid MemberId { get; set; }
        public Member Member { get; set; }
        public Guid BlogPostId { get; set; }
        public BlogPost BlogPost { get; set; }
    }
}
