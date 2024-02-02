using System.ComponentModel.DataAnnotations;

namespace API.Entities.Domain
{
    public class Message
    {
        public Guid Id { get; set; }
        [StringLength(50)]
        public string Name{ get; set; }

        [StringLength(200)]
        public string MessageText { get; set; }
    }
}
