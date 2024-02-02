using System.ComponentModel.DataAnnotations;

namespace Almondcove.Api.Entities.Domain.Members
{
    public class Favourite
    {
        public Guid Id { get; set; }

        [StringLength(50)]
        public string Title { get; set; }

        [StringLength(50)]
        public string Description{ get; set; }

        [StringLength(50)]
        public string Slug { get; set; }
        public DateTime DateAdded { get; set; }

        public Guid MemberId { get; set; }
        public Member Member { get; set; }
    }
}
