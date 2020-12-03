using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GettinFit.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Data.SqlClient;
using Dapper;

namespace GettinFit.Data
{
    public class MealRepository
    {
        const string _connectionString = "Server=localhost;Database=GettinFit;Trusted_Connection=True;";

        public List<Meal> GetAll()
        {

            using var db = new SqlConnection(_connectionString);

            var query = "Select * from Meals";

            var meal = db.Query<Meal>(query);

            return meal.ToList();
        }

           public Meal GetMealById(int mealId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT *
                          FROM [Meals]
                          WHERE MealId = @mid";

            var parameters = new { mid = mealId };

            var meal = db.QueryFirstOrDefault<Meal>(query, parameters);

            return meal;
        }


       


        public int CreateNewMeal(int userId)
        {
            using var db = new SqlConnection(_connectionString);


            var sql = @"INSERT INTO [dbo].[Meals]
                               ([FoodDescription]
                               ,[CalorieCount]
                               ,[WhichMeal]
                                ,[Date]
                                ,[UserId])                                )
                               Output inserted.mealid
                        VALUES
                               (@foodDescription,@calorieCount,@whichMeal,@date,@userId)";

            var parameters = new { user = userId };
            
            //var parameters = new { foodDescription = mealToAdd.FoodDescription, calorieCount = mealToAdd.CalorieCount, whichMeal = mealToAdd.MealType, date = mealToAdd.Date, userId = mealToAdd.UserId };

            var newId = db.QuerySingle<int>(sql, parameters);

            return newId;
        }

        public Meal GetUserMeal(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT *
                        FROM Meals
                        WHERE UserId = @uid";

            var parameters = new { uid = userId };

            var meal = db.QueryFirstOrDefault<Meal>(query, parameters);

            return meal;
        }


    }
}

