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
    [Route("api/meals")]
    [ApiController]
    public class MealsController : ControllerBase
    {
      MealRepository _repo;

        public MealsController()
        {
            _repo = new MealRepository();
        }

        [HttpGet]
        public IActionResult GetAllMeals()
        {
            var allMeals = _repo.GetAll();

            return Ok(allMeals);
        }

        [HttpGet("{id}")]
        public IActionResult GetMealByid(int id)
        {
            var meal = _repo.GetMealById(id);

            if (meal == null) return NotFound("No meal found.  Try again");

            return Ok(meal);
        }

        [HttpGet("user/{UserId}")]
        public IActionResult GetUserMeals(int UserId)
        {
            var userMeal = _repo.GetUserMeal(UserId);

            if (userMeal == null) return NoContent();

            return Ok(userMeal);

        }
        [HttpGet("mondayCalorieCount/{UserId}")]
        public IActionResult GetMondayCalorieCount(int UserId)
        {
            var MondayCalorieCount = _repo.GetMondayCalorieCount(UserId);

            if (MondayCalorieCount == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(MondayCalorieCount);
        }

        [HttpGet("tuesdayCalorieCount/{UserId}")]
        public IActionResult GetTuesdayCalorieCount(int UserId)
        {
            var TuesdayCalorieCount = _repo.GetTuesdayCalorieCount(UserId);

            if (TuesdayCalorieCount == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(TuesdayCalorieCount);
        }

        [HttpGet("wednesdayCalorieCount/{UserId}")]
        public IActionResult GetWednesdayCalorieCount(int UserId)
        {
            var WednesdayCalorieCount = _repo.GetWednesdayCalorieCount(UserId);

            if (WednesdayCalorieCount == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(WednesdayCalorieCount);
        }

        [HttpGet("thursdayCalorieCount/{UserId}")]
        public IActionResult GetThursdayCalorieCount(int UserId)
        {
            var ThursdayCalorieCount = _repo.GetThursdayCalorieCount(UserId);

            if (ThursdayCalorieCount == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(ThursdayCalorieCount);
        }

        [HttpGet("fridayCalorieCount/{UserId}")]
        public IActionResult GetFridayCalorieCount(int UserId)
        {
            var FridayCalorieCount = _repo.GetFridayCalorieCount(UserId);

            if (FridayCalorieCount == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(FridayCalorieCount);
        }

        [HttpGet("saturdayCalorieCount/{UserId}")]
        public IActionResult GetSaturdayCalorieCount(int UserId)
        {
            var SaturdayCalorieCount = _repo.GetSaturdayCalorieCount(UserId);

            if (SaturdayCalorieCount == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(SaturdayCalorieCount);
        }

        [HttpGet("sundayCalorieCount/{UserId}")]
        public IActionResult GetSundayCalorieCount(int UserId)
        {
            var SundayCalorieCount = _repo.GetSundayCalorieCount(UserId);

            if (SundayCalorieCount == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(SundayCalorieCount);
        }

        [HttpGet("lastMonthsCalorieCount/{UserId}")]
        public IActionResult GetLastMonthsCalorieCount(int UserId)
        {
            var LastMonthsCalorieCount = _repo.GetLastMonthsCalorieCount(UserId);

            if (LastMonthsCalorieCount == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(LastMonthsCalorieCount);
        }

        [HttpGet("thisMonthsCalorieCount/{UserId}")]
        public IActionResult GetThisMonthsCalorieCount(int UserId)
        {
            var ThisMonthsCalorieCount = _repo.GetThisMonthsCalorieCount(UserId);

            if (ThisMonthsCalorieCount == 0) return NotFound("No calories today. Let's get to it.");

            return Ok(ThisMonthsCalorieCount);
        }





        [HttpPost]
        public IActionResult CreateNewMeal(Meal meal)
        {

            _repo.CreateNewMeal(meal);


            return Created($"/api/meals/{meal.MealId}", meal);
        }

          }
}
