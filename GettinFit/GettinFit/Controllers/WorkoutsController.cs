using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GettinFit.Data;
using GettinFit.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GettinFit.Controllers
{
    [Route("api/workouts")]
    [ApiController]
    public class WorkoutsController : ControllerBase
    {
        WorkoutRepository _repo;

        public WorkoutsController()
        {
            _repo = new WorkoutRepository();
        }

        [HttpGet]
        public IActionResult GetAllWorkouts()
        {
            var allWorkouts = _repo.GetAll();

            return Ok(allWorkouts);
        }

        [HttpGet("{id}")]
        public IActionResult getWorkoutByid(int id)
        {
            var workout = _repo.GetWorkoutById(id);

            if (workout == null) return NotFound("No workout found.  Try again");

            return Ok(workout);
        }


    }


}
}
