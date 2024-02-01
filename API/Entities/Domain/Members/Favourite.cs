using System.ComponentModel.DataAnnotations;

namespace API.Entities.Domain.Members
{
    public class Favourite
    {
        public int Id { get; set; }

        [StringLength(50)]
        public string Title { get; set; }

        [StringLength(50)]
        public string Description{ get; set; }

        [StringLength(50)]
        public string Slug { get; set; }
        public DateTime DateAdded { get; set; }

        public int MemberId { get; set; }
        public Member Member { get; set; }
    }
}
