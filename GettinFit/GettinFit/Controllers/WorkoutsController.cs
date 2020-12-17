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
        public IActionResult GetWorkoutByid(int id)
        {
            var workout = _repo.GetWorkoutById(id);

            if (workout == null) return NotFound("No workout found.  Try again");

            return Ok(workout);
        }


        [HttpGet("user/{UserId}")]
        public IActionResult GetUserWorkouts(int UserId)
        {
            var userWorkout = _repo.GetUserWorkouts(UserId);

            if (userWorkout == null) return NoContent();

            return Ok(userWorkout);

        }


        [HttpGet("mondayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetMondayWorkoutCaloriesBurned(int UserId)
        {
            var MondayCaloriesBurned = _repo.GetMondayWorkoutCaloriesBurned(UserId);

            if (MondayCaloriesBurned == null) return NotFound("No calories today. Let's get to it.");

            return Ok(MondayCaloriesBurned);
        }

            //[HttpPost]
            //public IActionResult CreateNewWorkout(Workout workout)
            //{
            //    _repo.CreateNewWorkout(workout);

            //    return Created($"/api/workouts/{workout.WorkoutId}", workout);
            //}

            [HttpPost]
        public IActionResult CreateNewWorkout(Workout workout)
        {
            
             _repo.CreateNewWorkout(workout); 


            return Created($"/api/workouts/{workout.WorkoutId}", workout);
        }
    }


}

