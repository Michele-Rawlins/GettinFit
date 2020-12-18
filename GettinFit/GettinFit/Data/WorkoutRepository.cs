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





        public Workout CreateNewWorkout(Workout workoutToAdd)
        {
            using var db = new SqlConnection(_connectionString);


            var sql = @"INSERT INTO [dbo].[Workouts]
                               ([ExerciseName]
                               ,[Reps]
                               ,[Sets]
                                ,[Weight]
                                ,[BodyPart]
                                ,[CaloriesBurned]
                                ,[UserId]
                                ,[Date])                                
                               Output inserted.workoutid
                        VALUES
                               (@exerciseName,@reps,@sets,@weight,@bodyPart,@caloriesBurned,1,@date)";

            //var parameters = new { workout = WorkoutId };

            var parameters = new { exerciseName = workoutToAdd.ExerciseName, reps = workoutToAdd.Reps, sets = workoutToAdd.Sets, weight = workoutToAdd.Weight, bodyPart = workoutToAdd.BodyPart, caloriesBurned = workoutToAdd.CaloriesBurned, date = workoutToAdd.Date };

            var newWorkout = db.QuerySingle<Workout>(sql, parameters);

          

            return newWorkout;

          
         

            
        }

        public int GetMondayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -8, getdate()))and (select dateadd(day, -7, getdate()))";


            var parameters = new { uid = userId };

            var MondayCaloriesBurned = db.QuerySingle<int>(query, parameters);

            return MondayCaloriesBurned;

        }

        public int GetTuesdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -7, getdate()))and (select dateadd(day, -6, getdate()))";


            var parameters = new { uid = userId };

            var TuesdayCaloriesBurned = db.QuerySingle<int>(query, parameters);

            return TuesdayCaloriesBurned;

        }
        public int GetWednesdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -6, getdate()))and (select dateadd(day, -5, getdate()))";


            var parameters = new { uid = userId };

            var WednesdayCaloriesBurned = db.QuerySingle<int>(query, parameters);

            return WednesdayCaloriesBurned;

        }

        public int GetThursdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -5, getdate()))and (select dateadd(day, -4, getdate()))";


            var parameters = new { uid = userId };

            var ThursdayCaloriesBurned = db.QuerySingle<int>(query, parameters);

            return ThursdayCaloriesBurned;

        }

        public int GetFridayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -4, getdate()))and (select dateadd(day, -3, getdate()))";


            var parameters = new { uid = userId };

            var FridayCaloriesBurned = db.QuerySingle<int>(query, parameters);

            return FridayCaloriesBurned;

        }

        public int GetSaturdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -3, getdate()))and (select dateadd(day, -2, getdate()))";


            var parameters = new { uid = userId };

            var SaturdayCaloriesBurned = db.QuerySingle<int>(query, parameters);

            return SaturdayCaloriesBurned;

        }

        public int GetSundayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -2, getdate()))and (select dateadd(day, -1, getdate()))";


            var parameters = new { uid = userId };

            var SundayCaloriesBurned = db.QuerySingle<int>(query, parameters);

            return SundayCaloriesBurned;

        }

        public int GetLastMonthsCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
         AND Date BETWEEN (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) - 1, 0))and (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), -1) )";


            var parameters = new { uid = userId };

            var LastMonthsCaloriesBurned = db.QuerySingle<int>(query, parameters);

            return LastMonthsCaloriesBurned;

        }

        public int GetThisMonthsCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
                            AND Date BETWEEN (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0) ) 
                            and (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) + 1, -1))";


            var parameters = new { uid = userId };

            var ThisMonthsCaloriesBurned = db.QuerySingle<int>(query, parameters);

            return ThisMonthsCaloriesBurned;

        }





        public List <Workout> GetUserWorkouts(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT *
                        FROM Workouts
                        WHERE UserId = @uid";

            var parameters = new { uid = userId };

            var workoutByUser = db.Query<Workout>(query, parameters);

            return workoutByUser.ToList();
        }


    }
}

