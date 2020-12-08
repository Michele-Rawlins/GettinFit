import React from 'react';
import workoutData from '../../../../src/helpers/workoutData';
// import authData from '../../../../src/helpers/authData';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
} from 'reactstrap';

class Workout extends React.Component {
  state = {
    newExerciseName: '',
    newReps: '',
    newSets: '',
    newWeight: '',
    newBodyTarget: '',
    newCaloriesBurned: '',
    newWorkoutDate: '',
    uid: 0,
    dropdownOpen: false,
     }

  newExerciseName = (e) => {
    e.preventDefault();
    this.setState({ newExerciseName: e.target.value});
  }

  newReps = (e) => {
    e.preventDefault();
    this.setState({ newReps: e.target.value});
  }

  newSets = (e) => {
    e.preventDefault();
    this.setState({ newSets: e.target.value});
  }

  newWeight = (e) => {
    e.preventDefault();
    this.setState({ newWeight: e.target.value});
  }

  newBodyTarget = (e) => {
    e.preventDefault();
    this.setState({ newBodyTarget: e.target.value});
  }

  newCaloriesBurned = (e) => {
    e.preventDefault();
    this.setState({ newCaloriesBurned: e.target.value});
  }

  saveNewWorkout = (e) => {
    e.preventDefault();
    const {
      newExerciseName,
      newReps,
      newSets,
      newWeight,
      newBodyTarget,
      newCaloriesBurned,
      newWorkoutDate,
      
  
    } = this.state;

const newWorkout = {
    exerciseName: newExerciseName,
    reps: newReps,
    sets:  newSets,
    weight:  newWeight,
    bodyTarget:  newBodyTarget,
    caloriesBurned:  newCaloriesBurned,
    workoutDate: new Date
    // uid: authData.getUid(),

};


workoutData.addWorkout(newWorkout)
.then(() => this.props.history.push('/workouts'))
.catch((err) => console.error('unable to add new Workout'))
}

  render() {
    const {

      newExerciseName,
        newReps,
        newSets,
        newWeight,
        newBodyTarget,
        newCaloriesBurned,
          } = this.state;
   
    

    return (
     

   <div className="Workout container">
     <div className="New col-12">
      <h1>Welcome to Your Workout Page</h1>
      <form className="col-6 offset-3 text-left">
        <div className="form-group">
        <label htmlFor="new-exercise-name">Exercise Name</label>
      <input
        type="text"
        className="form-control"
        id="new-exercise"
        value={newExerciseName}
        onChange={this.newExerciseName}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-reps">Reps</label>
      <input
        type="text"
        className="form-control"
        id="new-reps"
        value={newReps}
        onChange={this.newReps}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-sets">Sets</label>
      <input
        type="text"
        className="form-control"
        id="new-sets"
        value={newSets}
        onChange={this.newSets}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-weight">Weight</label>
      <input
        type="text"
        className="form-control"
        id="new-weight"
        value={newWeight}
        onChange={this.newWeight}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-bodyTarget">Body Target</label>
      <select
        className="form-control"
        id="new-bodyTarget"
        value={newBodyTarget}
        onChange={this.newBodyTarget}>
        <option value="1">Arms</option>
        <option value="2">Legs</option>
        <option value="3">Back</option>
        <option value="4">Core</option>
        </select>
        </div>
        <div className="form-group">
        <label htmlFor="new-caloriesBurned">Calories Burned</label>
      <input
        type="text"
        className="form-control"
        id="new-caloriesBurned"
        value={newCaloriesBurned}
        onChange={this.newCaloriesBurned}
        />
        </div>
        <button className="btn btn-secondary" onClick={this.saveNewWorkout}>Save New Workout</button>
      </form>
    </div>
    </div>
  )
}
}

export default Workout;
