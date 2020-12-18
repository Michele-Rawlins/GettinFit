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

        [HttpGet("tuesdayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetTuesdayWorkoutCaloriesBurned(int UserId)
        {
            var TuesdayCaloriesBurned = _repo.GetTuesdayWorkoutCaloriesBurned(UserId);

            if (TuesdayCaloriesBurned == null) return NotFound("No calories today. Let's get to it.");

            return Ok(TuesdayCaloriesBurned);
        }

        [HttpGet("wednesdayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetWednesdayWorkoutCaloriesBurned(int UserId)
        {
            var WednesdayCaloriesBurned = _repo.GetWednesdayWorkoutCaloriesBurned(UserId);

            if (WednesdayCaloriesBurned == null) return NotFound("No calories today. Let's get to it.");

            return Ok(WednesdayCaloriesBurned);
        }

        [HttpGet("thursdayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetThursdayWorkoutCaloriesBurned(int UserId)
        {
            var ThursdayCaloriesBurned = _repo.GetThursdayWorkoutCaloriesBurned(UserId);

            if (ThursdayCaloriesBurned == null) return NotFound("No calories today. Let's get to it.");

            return Ok(ThursdayCaloriesBurned);
        }

        [HttpGet("fridayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetFridayWorkoutCaloriesBurned(int UserId)
        {
            var FridayCaloriesBurned = _repo.GetFridayWorkoutCaloriesBurned(UserId);

            if (FridayCaloriesBurned == null) return NotFound("No calories today. Let's get to it.");

            return Ok(FridayCaloriesBurned);
        }

        [HttpGet("saturdayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetSaturdayWorkoutCaloriesBurned(int UserId)
        {
            var SaturdayCaloriesBurned = _repo.GetSaturdayWorkoutCaloriesBurned(UserId);

            if (SaturdayCaloriesBurned == null) return NotFound("No calories today. Let's get to it.");

            return Ok(SaturdayCaloriesBurned);
        }

        [HttpGet("sundayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetSundayWorkoutCaloriesBurned(int UserId)
        {
            var SundayCaloriesBurned = _repo.GetSundayWorkoutCaloriesBurned(UserId);

            if (SundayCaloriesBurned == null) return NotFound("No calories today. Let's get to it.");

            return Ok(SundayCaloriesBurned);
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

