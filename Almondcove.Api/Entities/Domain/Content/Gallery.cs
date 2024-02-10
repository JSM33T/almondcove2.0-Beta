using System.ComponentModel.DataAnnotations;

namespace Almondcove.Api.Entities.Domain.Content
{
    public class Gallery
    {
        public Guid Id { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(200)]
        public string Description { get; set; }

        [StringLength(500)]
        public string Intro { get; set; }

        public string Category { get; set; }
        public string Tags { get; set; }

        public bool  IsActive { get; set; }

        public DateTime DateAdded { get; set; }

        public Guid MemberId { get; set; }
    }
}
