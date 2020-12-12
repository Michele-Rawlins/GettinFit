﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GettinFit.Models
{
    public class Meal
    {
        public int MealId { get; set; }
        public string FoodDescription { get; set; }
        public string CalorieCount { get; set; }
        public string WhichMeal { get; set; }
        public DateTime Date { get; set; }
        public int UserId { get; set; }


    }

   
}
