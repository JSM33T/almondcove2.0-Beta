using API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Text;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController(AlmondDbContext context) : ControllerBase
    {
        private readonly AlmondDbContext _context = context;

        [HttpGet("{id}")]
        public IActionResult GetBlogWithComments(int id)
        {
            // Load the blog post with its comments
            var blogPost = _context.BlogPosts
                .Include(bp => bp.Comments)
                .FirstOrDefault(bp => bp.Id == id);

            if (blogPost == null)
            {
                return NotFound();
            }

            return Ok(blogPost);
        }

        [HttpGet("top3")]
        public IActionResult GetTop3BlogsWithComments()
        {
            var latest3Blogs = _context.BlogPosts
                 .OrderByDescending(bp => bp.DateCreated) // Order by date in descending order
                 .Take(3) // Take the top 3 blogs
                 .Select(bp => new
                 {
                     BlogPost = bp,
                     NumberOfComments = bp.Comments.Count(),
                     NumberOfLikes = bp.Likes.Count()
                 })
                 .ToList();

            return Ok(latest3Blogs);
        }


        [HttpGet("something")]
        public string SendSMS()
        {
           var msg = 112222222222 + " is your OTP to login in JupSoft at " + System.DateTime.Now + ", Please never share this OTP.GARUDA POWER PVT LTD";

            var apikey = "OWUzMjliZGIwYWE5MzJjZjQyNzMwZGU2ZGMxMzY5MTc=";
                var message = msg;
                var numbers = 8945029982;
                string strPost;
                var sender = "GPower";
                string url = "https://api.textlocal.in/send/?";
                strPost = url + "apikey=" + apikey
                + "&numbers=" + numbers
                + "&sender=" + sender
                + "&message=" + WebUtility.UrlEncode(message);
                ServicePointManager.Expect100Continue = true;
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                WebRequest request = WebRequest.Create(strPost);
                request.Method = "POST";
                byte[] byteArray = Encoding.UTF8.GetBytes(strPost);
                request.ContentType = "application/x-www-form-urlencoded";
                request.ContentLength = byteArray.Length;
                Stream dataStream = request.GetRequestStream();
                dataStream.Write(byteArray, 0, byteArray.Length);
                dataStream.Close();
                WebResponse response = request.GetResponse();
                dataStream = response.GetResponseStream();
                StreamReader reader = new StreamReader(dataStream);
                string responseFromServer = reader.ReadToEnd();
                Console.WriteLine(responseFromServer);
                reader.Close();
                dataStream.Close();
                response.Close();
                if (responseFromServer.Length > 0)
                {
                    return responseFromServer;
            }
                else
                {
                    return "error ig";
                }

            
        }




    }
}
