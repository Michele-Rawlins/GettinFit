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
        public string Height { get; set; }
        public string CurrentWeight { get; set; }
        public string Age { get; set; }
        public string ImageUrl { get; set; }
        public DateTime Birthdate { get; set; }
        public string CalorieGoal {get; set;}
        public string WeightGoal { get; set; }
        public string BeginningWeight { get; set; }
        public DateTime DateCreated { get; set; }
     
    }
}
