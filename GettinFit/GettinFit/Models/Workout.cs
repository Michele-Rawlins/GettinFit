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
        public string Reps { get; set; }
        public string Sets { get; set; }
        public string Weight { get; set; }
        public string BodyPart { get; set; }
        public string CaloriesBurned { get; set; }
        public int UserId { get; set; }
        public DateTime Date { get; set; }
    }
}
