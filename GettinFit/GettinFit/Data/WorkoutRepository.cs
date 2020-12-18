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

        public List <Workout> GetMondayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT CaloriesBurned 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -7, getdate()))and (select dateadd(day, -7, getdate()))";


            var parameters = new { uid = userId };

            var MondayCaloriesBurned = db.Query<Workout>(query, parameters);

            return MondayCaloriesBurned.ToList();

        }

        public List<Workout> GetTuesdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT CaloriesBurned 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -6, getdate()))and (select dateadd(day, -6, getdate()))";


            var parameters = new { uid = userId };

            var TuesdayCaloriesBurned = db.Query<Workout>(query, parameters);

            return TuesdayCaloriesBurned.ToList();

        }
        public List<Workout> GetWednesdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT CaloriesBurned 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -5, getdate()))and (select dateadd(day, -5, getdate()))";


            var parameters = new { uid = userId };

            var WednesdayCaloriesBurned = db.Query<Workout>(query, parameters);

            return WednesdayCaloriesBurned.ToList();

        }

        public List<Workout> GetThursdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT CaloriesBurned 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -4, getdate()))and (select dateadd(day, -4, getdate()))";


            var parameters = new { uid = userId };

            var ThursdayCaloriesBurned = db.Query<Workout>(query, parameters);

            return ThursdayCaloriesBurned.ToList();

        }

        public List<Workout> GetFridayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT CaloriesBurned 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -3, getdate()))and (select dateadd(day, -3, getdate()))";


            var parameters = new { uid = userId };

            var FridayCaloriesBurned = db.Query<Workout>(query, parameters);

            return FridayCaloriesBurned.ToList();

        }

        public List<Workout> GetSaturdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT CaloriesBurned 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -2, getdate()))and (select dateadd(day, -2, getdate()))";


            var parameters = new { uid = userId };

            var SaturdayCaloriesBurned = db.Query<Workout>(query, parameters);

            return SaturdayCaloriesBurned.ToList();

        }

        public List<Workout> GetSundayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT CaloriesBurned 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -1, getdate()))and (select dateadd(day, -1, getdate()))";


            var parameters = new { uid = userId };

            var SundayCaloriesBurned = db.Query<Workout>(query, parameters);

            return SundayCaloriesBurned.ToList();

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

