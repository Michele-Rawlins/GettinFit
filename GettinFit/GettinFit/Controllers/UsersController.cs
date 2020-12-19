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
    public abstract class FirebaseEnabledController : ControllerBase
    {
        protected string UserId => User.FindFirst(x => x.Type == "user_id").Value;
    }
    [Route("api/users")]
    [ApiController]
    public class UsersController : FirebaseEnabledController
    {
        UserRepository _repo;

        public UsersController()
        {
            _repo = new UserRepository();
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var allUsers = _repo.GetAll();

            return Ok(allUsers);
        }

        [HttpGet("{UserId}")]
        public IActionResult GetSingleUser(int UserId)
        {
            var singleUser = _repo.GetUserById(UserId);

            return Ok(singleUser);
        }

        [HttpGet("{email}/authedUser")]
        public IActionResult GetAuthenticatedUser(string email)
        {
            var authenticatedUser = _repo.GetAuthedUserByEmail(email);

            return Ok(authenticatedUser);
        }

        [HttpPut("{UserId}")]
        public IActionResult UpdateUser(int UserId, User user)
        {
            var updatedUser = _repo.Update(UserId, user);

            return Ok(updatedUser);
        }



        [HttpPost]
        public IActionResult CreateUser(User user)
        {
            _repo.CreateUser(user);

            return Created($"/api/users/{user.UserId}", user);
        }
    }
}
