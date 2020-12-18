import React from 'react';
import workoutData from '../../../helpers/data/workoutData';
import workoutShape from '../../../helpers/propz/workoutShape';
import firebase from 'firebase'
import authData from '../../../../src/helpers/data/authData';
import userData from '../../../../src/helpers/data/userData';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
} from 'reactstrap';

import {
  Card, CardImg, CardText, CardTitle,CardBody, Col, Row
} from 'reactstrap';

class Workout extends React.Component {
  state = {
    user:'',
    newExerciseName: '',
    newReps: '',
    newSets: '',
    newWeight: '',
    newBodyPart: '',
    newCaloriesBurned: '',
    newDate: '',
    dropdownOpen: false,
    userWorkout: [],
    userProfile: [],
    mondayCalorie:[],
     }

     componentDidMount() {
      var user = firebase.auth().currentUser;
      let email = user.email;
      
      // if (user != null) {
      //   email = user.email;
      // }
      userData.getUserByEmail(email)
      .then(userProfile => { this.setState({userProfile}) })
      .then(() => this.getWorkoutData())
      .then(() => this.getMondayData())
    
      // .then(() => this.addWorkoutData())
    }

    getWorkoutData = () => {
      const { userProfile } = this.state;
    workoutData.GetUserWorkouts(userProfile.userId)
    .then(userWorkout => { this.setState({userWorkout}) })
    }

    getMondayData = () => {
      const { userProfile } = this.state;
      let mondayCalorie = '';
    workoutData.getMondayCaloriesBurned(userProfile.userId)
    .then(mondayCalorie => { this.setState([mondayCalorie])})
    

    }

    
//  addWorkoutData = () => {
//    const {userProfile} = this.state;
//    const newWorkout = '';
//    workoutData.addWorkout(userProfile.userId)
//  .then(newWorkout => this.props.history.push('/workouts'))
//  .catch((err) => console.error('unable to add new Workout'))
// }

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

  newDate = (e) => {
    e.preventDefault();
    this.setState({ newDate: e.target.value});
  }
  newWeight = (e) => {
    e.preventDefault();
    this.setState({ newWeight: e.target.value});
  }

  newBodyPart = (e) => {
    e.preventDefault();
    this.setState({ newBodyPart: e.target.value});
  }

  newCaloriesBurned = (e) => {
    e.preventDefault();
    this.setState({ newCaloriesBurned: e.target.value});
  }

  saveNewWorkout = (e) => {
    e.preventDefault();
    const {
      user,
      newExerciseName,
      newReps,
      newSets,
      newWeight,
      newBodyPart,
      newCaloriesBurned,
      newDate,
    } = this.state;

const newWorkout = {
    exerciseName: newExerciseName,
    reps: newReps,
    sets:  newSets,
    weight:  newWeight,
    bodyPart:  newBodyPart,
    caloriesBurned:  newCaloriesBurned,
    date: newDate,
    userId:user.userId
    // uid: authData.getUid(),

};

console.log(newWorkout);
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
        newBodyPart,
        newCaloriesBurned,
        newDate,
        userWorkout,
        userProfile,
        mondayCalorie,
        caloriesBurned
          } = this.state;
   
    

    return (
     

   <div className="Workout container">
     <div className="New col-12">
      <h1>Welcome to {`${userProfile.firstName} ${userProfile.lastName}'s `} Workout Page</h1>
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
        <label htmlFor="new-bodyPart">Body Part</label>
      <select
        className="form-control"
        id="new-bodyPart"
        value={newBodyPart}
        onChange={this.newBodyPart}>
            <option value="">Select</option>
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
        <div className="form-group">
        <label htmlFor="new-date">Date</label>
      <input
        type="date"
        className="form-control"
        id="new-date"
        value={newDate}
        onChange={this.newDate}
        />
        </div>
        
        <button className="btn btn-secondary" onClick={this.saveNewWorkout}>Save New Workout</button>
      </form>
     
     <Card Container ="d-flex justify-content-start">
      <Row>
      <Col md="8">
      <Card className="p-2 col-example text-left workoutCard">
          <CardTitle tag="h4">Last Weeks Total</CardTitle>
        <CardImg  src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtvdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Card image cap" />
        <CardBody>
          
          <CardText>Here are your totals from last week</CardText>
          <CardText>Monday:  Calories Burned:{`${mondayCalorie.caloriesBurned}`}   Weight Lifted:  </CardText>
          <CardText>Tuesday: Calories Burned:   Weight Lifted:  </CardText>
          <CardText>Wednesday: Calories Burned:   Weight Lifted:  </CardText>
          <CardText>Thursday:  Calories Burned:   Weight Lifted: </CardText>
          <CardText>Friday:  Calories Burned:   Weight Lifted: </CardText>
          <CardText>Saturday:  Calories Burned:   Weight Lifted: </CardText>
          <CardText>Sunday:  Calories Burned:   Weight Lifted: </CardText>
          
          </CardBody>
      </Card>
    
    
    <Card className="p-2 col-example text-center workoutCard">
          <CardTitle tag="h4">This Months Total</CardTitle>
        <CardImg src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d29ya291dHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Card image cap" />
        <CardBody>
        
          <CardText>Here are this Month's Totals</CardText>
          <CardText>Calories Burned:</CardText>
          <CardText>Weight Lifted:</CardText>
        </CardBody>
      </Card>
   
   
     
    <Card className="workoutCard">
          <CardTitle tag="h4">Last Month's Total</CardTitle>
        <CardImg src="https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtvdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Card image cap" />
        <CardBody>
          
          <CardText>Here are Last Months Totals</CardText>
          <CardText>Calories Burned:</CardText>
          <CardText>Weight Lifted:</CardText>
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Card>
    
       </div>
       </div>   
  )
}
}

export default Workout;