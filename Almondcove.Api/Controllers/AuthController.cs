﻿using Almondcove.Api.Entities.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Almondcove.Api.Controllers
{
    [Authorize(Roles = "NA")]
    [Route("api/auth")]
    [ApiController]
    public class AuthController(IConfiguration configuration) : ControllerBase
    {
        private readonly IConfiguration _configuration = configuration;

        private static UserSessionDTO AuthenticateUser(LoginDTO user)
        {
            UserSessionDTO _user = null;
            if (user.Username == "something" && user.Password == "something")
            {
                _user = new UserSessionDTO { Username = "Something", Role = "superadmin", FirstName = "something" };
            }
            return _user;
        }

        private string GenerateToken(UserSessionDTO user)
        {
            var SecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creadentials = new SigningCredentials(SecurityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
               {
                    new Claim(ClaimTypes.NameIdentifier, "JSM33T"),
                    new Claim(ClaimTypes.GivenName, "Jasmeet"),
                    new Claim(ClaimTypes.Role, "user"),
                };

            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"], _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddDays(365),
                signingCredentials: creadentials
                );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login(LoginDTO user)
        {
            IActionResult response = Unauthorized();
            var _user = AuthenticateUser(user);
            if (_user != null)
            {
                var token = GenerateToken(_user);
                response = Ok(new { token });
            }
            return response;
        }

    }
}
