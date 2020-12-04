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
        public IActionResult getMealByid(int id)
        {
            var meal = _repo.GetMealById(id);

            if (meal == null) return NotFound("No meal found.  Try again");

            return Ok(meal);
        }


    }
}
