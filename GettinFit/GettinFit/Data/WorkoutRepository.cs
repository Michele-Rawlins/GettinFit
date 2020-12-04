using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GettinFit.Data;
using GettinFit.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Data.SqlClient;
using Dapper;

namespace GettinFit.Data
{
    public class WorkoutRepository
    {
        const string _connectionString = "Server=localhost;Database=GettinFit;Trusted_Connection=True;";

        public List<Workout> GetAll()
        {

            using var db = new SqlConnection(_connectionString);

            var query = "Select * from Workouts";

            var workout = db.Query<Workout>(query);

            return workout.ToList();
        }

        public Workout GetWorkoutById(int workoutId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT *
                          FROM [Workouts]
                          WHERE WorkoutId = @wid";

            var parameters = new { wid = workoutId };

            var workout = db.QueryFirstOrDefault<Workout>(query, parameters);

            return workout;
        }





        public int CreateNewWorkout(int userId)
        {
            using var db = new SqlConnection(_connectionString);


            var sql = @"INSERT INTO [dbo].[Workouts]
                               ([ExerciseName]
                               ,[Reps]
                               ,[Sets]
                                ,[Weight]
                                ,[BodyTarget]
                                ,[CaloriesBurned]
                                ,[UserId]
                                ,[Date])                                )
                               Output inserted.workoutid
                        VALUES
                               (@exerciseName,@reps,@sets,@weight,@bodyTarget,@caloriesBurned,@userId,@date)";

            var parameters = new { user = userId };

            //var parameters = new { foodDescription = mealToAdd.FoodDescription, calorieCount = mealToAdd.CalorieCount, whichMeal = mealToAdd.MealType, date = mealToAdd.Date, userId = mealToAdd.UserId };

            var newId = db.QuerySingle<int>(sql, parameters);

            return newId;
        }

        public Meal GetUserWorkout(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT *
                        FROM Workouts
                        WHERE UserId = @uid";

            var parameters = new { uid = userId };

            var workout = db.QueryFirstOrDefault<Meal>(query, parameters);

            return workout;
        }


    }
}

