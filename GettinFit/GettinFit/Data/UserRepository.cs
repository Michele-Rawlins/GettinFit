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
           public class UserRepository
        {
            const string _connectionString = "Server=localhost;Database=GettinFit;Trusted_Connection=True;";

            public List<User> GetAll()
            {
                using var db = new SqlConnection(_connectionString);

                try
                {
                    var users = db.Query<User>("select * from [Users]");

                    return users.ToList();

                    //    var users = db.Query<User>("SELECT * FROM [User]");

                    //return users.ToList();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    throw;
                }
            }

            internal User GetUserById(int userId)
            {
                using var db = new SqlConnection(_connectionString);

                var query = @"SELECT *
                          FROM [Users]
                          WHERE UserId = @uid";

                var parameters = new { uid = userId };

                var user = db.QueryFirstOrDefault<User>(query, parameters);

                return user;
            }


            internal User GetAuthedUserByEmail(string email)
            {
                using var db = new SqlConnection(_connectionString);

                var query = @"SELECT *
                          FROM [Users]
                          WHERE email = @userEmail";

                var parameters = new { userEmail = email };

                var authedUser = db.QueryFirstOrDefault<User>(query, parameters);

                return authedUser;
            }


            public User CreateUser(User userToAdd)
            {
                using var db = new SqlConnection(_connectionString);


                var sql = @"INSERT INTO [dbo].[Users]
                               ([FirstName]
                               ,[LastName]
                               ,[Email]
                                ,[Sex]
                                ,[Height]
                                ,[CurrentWeight]
                                ,[Age]
                                ,[ImageUrl]
                               ,[Birthdate]
                                ,[CalorieGoal]
                                ,[WeightGoal]
                               ,[BeginningWeight]
                                ,[BeginningPhoto]
                                ,[Date])
                               Output inserted.userid
                        VALUES
                               (@firstName,@lastName,@email,@sex,@height,@currentWeight,@age,@imageUrl,@birthdate,@calorieGoal,@weightGoal,@beginningWeight,@beginningPhoto, @date)";

                var parameters = new { firstName = userToAdd.FirstName, lastName = userToAdd.LastName, email = userToAdd.Email, sex = userToAdd.Sex, height = userToAdd.Height, currentWeight = userToAdd.CurrentWeight,age = userToAdd.Age,  imageUrl = userToAdd.ImageUrl, birthdate = userToAdd.Birthdate, calorieGoal = userToAdd.CalorieGoal, weightGoal = userToAdd.WeightGoal, beginningWeight = userToAdd.BeginningWeight,beginningPhoto = userToAdd.BeginningPhoto, date = userToAdd.Date };

                var newUser = db.QuerySingle<User>(sql, parameters);

            return newUser;
            }

        
    }
}

