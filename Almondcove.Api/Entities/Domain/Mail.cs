using System.ComponentModel.DataAnnotations;

namespace Almondcove.Api.Entities.Domain
{
    public class Mail
    {
        public Guid Id { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Origin { get; set; }

        [Required]
        [StringLength(100)]
        public string Email { get; set; } = "";
        
        [Required]
        public DateTime DateAdded { get; set; }

        [Required]
        public bool IsActive { get; set; } = true;
    }
}
