using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GettinFit.Data;
using GettinFit.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GettinFit.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        UserRepository _repo;

        public UsersController()
        {
            _repo = new UserRepository();
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int userId)
        {
            var singleUser = _repo.GetUserById(userId);

            return Ok(singleUser);
        }

        [HttpGet("{email}/authedUser")]
        public IActionResult GetAuthenticatedUser(string email)
        {
            var authenicatedUser = _repo.GetAuthedUserByEmail(email);

            return Ok(authenicatedUser);
        }

        [HttpPost]
        public IActionResult CreateUser(User user)
        {
            _repo.Add(user);


            return Created($"/api/users/{user.UserId}", user);
        }

    }
}
