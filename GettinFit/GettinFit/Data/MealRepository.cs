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


       


        public Meal CreateNewMeal(Meal mealToAdd)
        {
            using var db = new SqlConnection(_connectionString);


            var sql = @"INSERT INTO [dbo].[Meals]
                               ([FoodDescription]
                               ,[CalorieCount]
                               ,[WhichMeal]
                                ,[Date]
                                ,[UserId])                                
                               Output inserted.mealid
                        VALUES
                               (@foodDescription,@calorieCount,@whichMeal,@date,@userId)";

            //var parameters = new { user = userId };
            
            var parameters = new { foodDescription = mealToAdd.FoodDescription, calorieCount = mealToAdd.CalorieCount, whichMeal = mealToAdd.WhichMeal, date = mealToAdd.Date, userId = mealToAdd.UserId};

            var newMeal = db.QuerySingle<Meal>(sql, parameters);

            return newMeal;
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

        public int GetMondayCalorieCount(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CalorieCount as int))
                            FROM Meals
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -8, getdate()))and (select dateadd(day, -7, getdate()))";


            var parameters = new { uid = userId };

            var MondayCalorieCount = db.QuerySingle<int?>(query, parameters);

            if (MondayCalorieCount == null) { return 0; }

            return (int)MondayCalorieCount;

        }
    

        public int GetTuesdayCalorieCount(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CalorieCount as int))
                            FROM Meals
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -7, getdate()))and (select dateadd(day, -6, getdate()))";


            var parameters = new { uid = userId };

            var TuesdayCalorieCount = db.QuerySingle<int?>(query, parameters);

            if (TuesdayCalorieCount == null) { return 0; }

            return (int)TuesdayCalorieCount;

        }
        public int GetWednesdayCalorieCount(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CalorieCount as int)) 
                            FROM Meals
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -6, getdate()))and (select dateadd(day, -5, getdate()))";


            var parameters = new { uid = userId };

            var WednesdayCalorieCount = db.QuerySingle<int?>(query, parameters);

            if (WednesdayCalorieCount == null) { return 0; }

            return (int)WednesdayCalorieCount;

        }

        public int GetThursdayCalorieCount(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CalorieCount as int)) 
                            FROM Meals
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -5, getdate()))and (select dateadd(day, -4, getdate()))";


            var parameters = new { uid = userId };

            var ThursdayCalorieCount = db.QuerySingle<int?>(query, parameters);

            if (ThursdayCalorieCount == null) { return 0; }

            return (int)ThursdayCalorieCount;

        }

        public int GetFridayCalorieCount(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CalorieCount as int)) 
                            FROM Meals
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -4, getdate()))and (select dateadd(day, -3, getdate()))";


            var parameters = new { uid = userId };

            var FridayCalorieCount = db.QuerySingle<int?>(query, parameters);

            if (FridayCalorieCount == null) { return 0; }

            return (int)FridayCalorieCount;

        }

        public int GetSaturdayCalorieCount(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CalorieCount as int))
                            FROM Meals
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -3, getdate()))and (select dateadd(day, -2, getdate()))";


            var parameters = new { uid = userId };

            var SaturdayCalorieCount = db.QuerySingle<int?>(query, parameters);

            if (SaturdayCalorieCount == null) { return 0; }

            return (int)SaturdayCalorieCount;

        }

        public int GetSundayCalorieCount(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CalorieCount as int)) 
                            FROM Meals
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -2, getdate()))and (select dateadd(day, -1, getdate()))";


            var parameters = new { uid = userId };

            var SundayCalorieCount = db.QuerySingle<int?>(query, parameters);

            if (SundayCalorieCount == null) { return 0; }

            return (int)SundayCalorieCount;

        }

        public int GetLastMonthsCalorieCount(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CalorieCount as int)) 
                            FROM Meals
                            WHERE UserId = @uid
         AND Date BETWEEN (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) - 1, 0))and (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), -1) )";


            var parameters = new { uid = userId };

            var LastMonthsCalorieCount = db.QuerySingle<int?>(query, parameters);

            if (LastMonthsCalorieCount == null) { return 0; }

            return (int)LastMonthsCalorieCount;

        }

        public int GetThisMonthsCalorieCount(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CalorieCount as int)) 
                            FROM Meals
                            WHERE UserId = @uid
                            AND Date BETWEEN (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0) ) 
                            and (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) + 1, -1))";


            var parameters = new { uid = userId };

            var ThisMonthsCalorieCount = db.QuerySingle<int?>(query, parameters);

            if (ThisMonthsCalorieCount == null) { return 0; }

            return (int)ThisMonthsCalorieCount;

        }

    }
}

