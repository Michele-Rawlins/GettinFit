using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GettinFit.Models
{
    public class Workout
    {
        public int WorkoutId { get; set; }
        public string ExerciseName { get; set; }
        public int Reps { get; set; }
        public int Sets { get; set; }
        public int Weight { get; set; }
        public BodyTarget WhichArea { get; set; }
        public int CaloriesBurned { get; set; }
        public int UserId { get; set; }
        public DateTime Date { get; set; }
    }
}
