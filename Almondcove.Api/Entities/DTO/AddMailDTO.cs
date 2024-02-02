using System.ComponentModel.DataAnnotations;

namespace Almondcove.Api.Entities.DTO
{
    public class AddMailDTO
    {
        public string Origin { get; set; } = "na";
        [Required]
        public string Email { get; set; }
    }
}
