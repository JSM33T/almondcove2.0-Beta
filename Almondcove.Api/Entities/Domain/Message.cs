using System.ComponentModel.DataAnnotations;

namespace Almondcove.Api.Entities.Domain
{
    public class Message
    {
        public Guid Id { get; set; }

        [StringLength(50)]
        public string Name{ get; set; }

        [Required]
        [StringLength(200)]
        public string MessageText { get; set; }


        [StringLength(200)]
        public string Origin { get; set; }

        public DateTime DateAdded { get; set; }
    }

    public class MessageDTO
    {
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(200)]
        public string MessageText { get; set; }

        [StringLength(200)]
        public string Origin { get; set; }
    }
}
