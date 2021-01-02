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

            if (MondayCaloriesBurned == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(MondayCaloriesBurned);
        }

        [HttpGet("tuesdayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetTuesdayWorkoutCaloriesBurned(int UserId)
        {
            var TuesdayCaloriesBurned = _repo.GetTuesdayWorkoutCaloriesBurned(UserId);

            if (TuesdayCaloriesBurned == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(TuesdayCaloriesBurned);
        }

        [HttpGet("wednesdayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetWednesdayWorkoutCaloriesBurned(int UserId)
        {
            var WednesdayCaloriesBurned = _repo.GetWednesdayWorkoutCaloriesBurned(UserId);

            if (WednesdayCaloriesBurned == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(WednesdayCaloriesBurned);
        }

        [HttpGet("thursdayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetThursdayWorkoutCaloriesBurned(int UserId)
        {
            var ThursdayCaloriesBurned = _repo.GetThursdayWorkoutCaloriesBurned(UserId);

            if (ThursdayCaloriesBurned == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(ThursdayCaloriesBurned);
        }

        [HttpGet("fridayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetFridayWorkoutCaloriesBurned(int UserId)
        {
            var FridayCaloriesBurned = _repo.GetFridayWorkoutCaloriesBurned(UserId);

            if (FridayCaloriesBurned == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(FridayCaloriesBurned);
        }

        [HttpGet("saturdayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetSaturdayWorkoutCaloriesBurned(int UserId)
        {
            var SaturdayCaloriesBurned = _repo.GetSaturdayWorkoutCaloriesBurned(UserId);

            if (SaturdayCaloriesBurned == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(SaturdayCaloriesBurned);
        }

        [HttpGet("sundayWorkoutCaloriesBurned/{UserId}")]
        public IActionResult GetSundayWorkoutCaloriesBurned(int UserId)
        {
            var SundayCaloriesBurned = _repo.GetSundayWorkoutCaloriesBurned(UserId);

            if (SundayCaloriesBurned == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(SundayCaloriesBurned);
        }

        [HttpGet("lastMonthsCaloriesBurned/{UserId}")]
        public IActionResult GetLastMonthsCaloriesBurned(int UserId)
        {
            var LastMonthsCaloriesBurned = _repo.GetLastMonthsCaloriesBurned(UserId);

            if (LastMonthsCaloriesBurned == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(LastMonthsCaloriesBurned);
        }

        [HttpGet("thisMonthsCaloriesBurned/{UserId}")]
        public IActionResult GetThisMonthsCaloriesBurned(int UserId)
        {
            var ThisMonthsCaloriesBurned = _repo.GetThisMonthsCaloriesBurned(UserId);

            if (ThisMonthsCaloriesBurned == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(ThisMonthsCaloriesBurned);
        }

        [HttpGet("mondayWeightLifted/{UserId}")]
        public IActionResult GetMondayWeightLifted(int UserId)
        {
            var MondayWeightLifted = _repo.GetMondayWeightLifted(UserId);

            if (MondayWeightLifted == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(MondayWeightLifted);
        }

        [HttpGet("tuesdayWeightLifted/{UserId}")]
        public IActionResult GetTuesdayWeightLifted(int UserId)
        {
            var TuesdayWeightLifted = _repo.GetTuesdayWeightLifted(UserId);

            if (TuesdayWeightLifted == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(TuesdayWeightLifted);
        }

        [HttpGet("wednesdayWeightLifted/{UserId}")]
        public IActionResult GetWednesdayWeightLifted(int UserId)
        {
            var WednesdayWeightLifted = _repo.GetWednesdayWeightLifted(UserId);

            if (WednesdayWeightLifted == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(WednesdayWeightLifted);
        }

        [HttpGet("thursdayWeightLifted/{UserId}")]
        public IActionResult GetThursdayWeightLifted(int UserId)
        {
            var ThursdayWeightLifted = _repo.GetThursdayWeightLifted(UserId);

            if (ThursdayWeightLifted == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(ThursdayWeightLifted);
        }

        [HttpGet("fridayWeightLifted/{UserId}")]
        public IActionResult GetFridayWeightLifted(int UserId)
        {
            var FridayWeightLifted = _repo.GetFridayWeightLifted(UserId);

            if (FridayWeightLifted == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(FridayWeightLifted);
        }

        [HttpGet("saturdayWeightLifted/{UserId}")]
        public IActionResult GetSaturdayWeightLifted(int UserId)
        {
            var SaturdayWeightLifted = _repo.GetSaturdayWeightLifted(UserId);

            if (SaturdayWeightLifted == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(SaturdayWeightLifted);
        }

        [HttpGet("sundayWeightLifted/{UserId}")]
        public IActionResult GetSundayWeightLifted(int UserId)
        {
            var SundayWeightLifted = _repo.GetSundayWeightLifted(UserId);

            if (SundayWeightLifted == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(SundayWeightLifted);

        }


        [HttpGet("lastMonthsWeightLifted/{UserId}")]
        public IActionResult GetLastMonthsWeightLifted(int UserId)
        {
            var LastMonthsWeightLifted = _repo.GetLastMonthsWeightLifted(UserId);

            if (LastMonthsWeightLifted == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(LastMonthsWeightLifted);
        }

        [HttpGet("thisMonthsWeightLifted/{UserId}")]
        public IActionResult GetThisMonthsWeightLifted(int UserId)
        {
            var ThisMonthsWeightLifted = _repo.GetThisMonthsWeightLifted(UserId);

            if (ThisMonthsWeightLifted == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(ThisMonthsWeightLifted);
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

