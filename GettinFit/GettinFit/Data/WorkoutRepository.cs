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
                               (@exerciseName,@reps,@sets,@weight,@bodyPart,@caloriesBurned,@userId,@date)";

            //var parameters = new { workout = WorkoutId };

            var parameters = new { exerciseName = workoutToAdd.ExerciseName, reps = workoutToAdd.Reps, sets = workoutToAdd.Sets, weight = workoutToAdd.Weight, bodyPart = workoutToAdd.BodyPart, caloriesBurned = workoutToAdd.CaloriesBurned, date = workoutToAdd.Date, userId = workoutToAdd.UserId};

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

            var MondayCaloriesBurned = db.QuerySingleOrDefault<int?>(query, parameters);

            if (MondayCaloriesBurned == null) { return 0; }

            return (int)MondayCaloriesBurned;

        }

        public int GetTuesdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -7, getdate()))and (select dateadd(day, -6, getdate()))";


            var parameters = new { uid = userId };

            var TuesdayCaloriesBurned = db.QuerySingleOrDefault<int?>(query, parameters);

            if (TuesdayCaloriesBurned == null) { return 0; }

            return (int)TuesdayCaloriesBurned;

        }
        public int GetWednesdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -6, getdate()))and (select dateadd(day, -5, getdate()))";


            var parameters = new { uid = userId };

            var WednesdayCaloriesBurned = db.QuerySingleOrDefault<int?>(query, parameters);

            if (WednesdayCaloriesBurned == null) { return 0; }

            return (int)WednesdayCaloriesBurned;

        }

        public int GetThursdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -5, getdate()))and (select dateadd(day, -4, getdate()))";
           


            var parameters = new { uid = userId };

            var ThursdayCaloriesBurned = db.QuerySingleOrDefault<int?>(query, parameters);

            if (ThursdayCaloriesBurned == null) { return 0; }
            return (int)ThursdayCaloriesBurned;

        }

        public int GetFridayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -4, getdate()))and (select dateadd(day, -3, getdate()))";


            var parameters = new { uid = userId };

            var FridayCaloriesBurned = db.QuerySingleOrDefault<int?>(query, parameters);

            if (FridayCaloriesBurned == null) { return 0; }

            return (int)FridayCaloriesBurned;

        }

        public int GetSaturdayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -3, getdate()))and (select dateadd(day, -2, getdate()))";


            var parameters = new { uid = userId };

            var SaturdayCaloriesBurned = db.QuerySingleOrDefault<int?>(query, parameters);

            if (SaturdayCaloriesBurned == null) { return 0; }


            return (int)SaturdayCaloriesBurned;

        }

        public int GetSundayWorkoutCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -2, getdate()))and (select dateadd(day, -1, getdate()))";


            var parameters = new { uid = userId };

            var SundayCaloriesBurned = db.QuerySingleOrDefault<int?>(query, parameters);


            if (SundayCaloriesBurned == null) { return 0; }

            return (int)SundayCaloriesBurned;

        }

        public int GetLastMonthsCaloriesBurned(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(CaloriesBurned as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
         AND Date BETWEEN (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) - 1, 0))and (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), -1) )";


            var parameters = new { uid = userId };

            var LastMonthsCaloriesBurned = db.QuerySingleOrDefault<int?>(query, parameters);


            if (LastMonthsCaloriesBurned == null) { return 0; }

            return (int)LastMonthsCaloriesBurned;

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

            var ThisMonthsCaloriesBurned = db.QuerySingleOrDefault<int?>(query, parameters);

            if (ThisMonthsCaloriesBurned == null) { return 0; }

            return (int)ThisMonthsCaloriesBurned;

        }

        public int GetMondayWeightLifted(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(weight as int) * cast(sets as int)* cast(reps as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -8, getdate()))and (select dateadd(day, -7, getdate()))";


            var parameters = new { uid = userId };

            var MondayWeightLifted = db.QuerySingleOrDefault<int?>(query, parameters);

            if (MondayWeightLifted == null) { return 0; }

            return (int)MondayWeightLifted;

        }

        public int GetTuesdayWeightLifted(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(weight as int) * cast(sets as int)* cast(reps as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -7, getdate()))and (select dateadd(day, -6, getdate()))";


            var parameters = new { uid = userId };

            var TuesdayWeightLifted = db.QuerySingleOrDefault<int?>(query, parameters);

            if (TuesdayWeightLifted == null) { return 0; }

            return (int)TuesdayWeightLifted;

        }

        public int GetWednesdayWeightLifted(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(weight as int) * cast(sets as int)* cast(reps as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -6, getdate()))and (select dateadd(day, -5, getdate()))";


            var parameters = new { uid = userId };

            var WednesdayWeightLifted = db.QuerySingleOrDefault<int?>(query, parameters);

            if (WednesdayWeightLifted == null) { return 0; }

            return (int)WednesdayWeightLifted;

        }

        public int GetThursdayWeightLifted(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(weight as int) * cast(sets as int)* cast(reps as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -5, getdate()))and (select dateadd(day, -4, getdate()))";


            var parameters = new { uid = userId };

            var ThursdayWeightLifted = db.QuerySingleOrDefault<int?>(query, parameters);

            if (ThursdayWeightLifted == null) { return 0; }

            return (int)ThursdayWeightLifted;

        }

        public int GetFridayWeightLifted(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(weight as int) * cast(sets as int)* cast(reps as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -4, getdate()))and (select dateadd(day, -3, getdate()))";


            var parameters = new { uid = userId };

            var FridayWeightLifted = db.QuerySingleOrDefault<int?>(query, parameters);

            if (FridayWeightLifted == null) { return 0; }

            return (int)FridayWeightLifted;

        }

        public int GetSaturdayWeightLifted(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(weight as int) * cast(sets as int)* cast(reps as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -3, getdate()))and (select dateadd(day, -2, getdate()))";


            var parameters = new { uid = userId };

            var SaturdayWeightLifted = db.QuerySingleOrDefault<int?>(query, parameters);

            if (SaturdayWeightLifted == null) { return 0; }

            return (int)SaturdayWeightLifted;

        }

        public int GetSundayWeightLifted(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(weight as int) * cast(sets as int)* cast(reps as int))
                            FROM Workouts
                            WHERE UserId = @uid
            AND Date between(select dateadd(day, -2, getdate()))and (select dateadd(day, -1, getdate()))";


            var parameters = new { uid = userId };

            var SundayWeightLifted = db.QuerySingleOrDefault<int?>(query, parameters);

            if (SundayWeightLifted == null) { return 0; }

            return (int)SundayWeightLifted;

        }

        public int GetLastMonthsWeightLifted(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(weight as int) * cast(sets as int)* cast(reps as int))
                            FROM Workouts
                            WHERE UserId = @uid
         AND Date BETWEEN (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) - 1, 0))and (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), -1) )";


            var parameters = new { uid = userId };

            var LastMonthsWeightLifted = db.QuerySingleOrDefault<int?>(query, parameters);


            if (LastMonthsWeightLifted == null) { return 0; }

            return (int)LastMonthsWeightLifted;

        }

        public int GetThisMonthsWeightLifted(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT SUM(CAST(weight as int) * cast(sets as int)* cast(reps as int)) 
                            FROM Workouts
                            WHERE UserId = @uid
                            AND Date BETWEEN (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0) ) 
                            and (SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) + 1, -1))";


            var parameters = new { uid = userId };

            var ThisMonthsWeightLifted = db.QuerySingleOrDefault<int?>(query, parameters);

            if (ThisMonthsWeightLifted == null) { return 0; }

            return (int)ThisMonthsWeightLifted;

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

