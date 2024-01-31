using System.ComponentModel.DataAnnotations;

namespace API.Entities.Domain
{
    public class Mail
    {
        public int Id { get; set; }
        public string Origin { get; set; } = "";

        [Required]
        public string Email { get; set; } = "";
        [Required]
        public DateTime DateAdded { get; set; }
        [Required]
        public bool IsActive { get; set; }
    }
}
