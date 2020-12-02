using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GettinFit.Models
{
    public class User
    {

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Sex { get; set; }
        public int Height { get; set; }
        public int CurrentWeight { get; set; }
        public int Age { get; set; }
        public string ImageUrl { get; set; }
        public DateTime Birthdate { get; set; }
        public int CalorieGoal {get; set;}
        public int WeightGoal { get; set; }
        public int BeginningWeight { get; set; }
        public DateTime DateCreated { get; set; }
     
    }
}
