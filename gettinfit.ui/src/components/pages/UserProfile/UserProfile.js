import React from 'react';
import firebase from 'firebase'
import userData from '../../../helpers/data/userData';
import mealData from '../../../helpers/data/mealData';
import workoutData from '../../../helpers/data/workoutData';

import {
  Card, CardImg, CardText, CardTitle,CardBody, Col, Row
} from 'reactstrap';

import { Link } from 'react-router-dom';
class UserProfile extends React.Component {

  state = {
    user:'',
    userProfile: {},
    mondayCalorie:0,
    tuesdayCalorie:0,
    wednesdayCalorie:0,
    thursdayCalorie:0,
    fridayCalorie:0,
    saturdayCalorie:0,
    sundayCalorie:0,
    mondayCount:0,
    tuesdayCount:0,
    wednesdayCount:0,
    thursdayCount:0,
    fridayCount:0,
    saturdayCount:0,
    sundayCount:0,
      }

  

    componentDidMount() {
    var user = firebase.auth().currentUser;
    let email = '';
    
    if (user != null) {
      email = user.email;
    }
    userData.getUserByEmail(email)
    .then(userProfile => { this.setState({userProfile}) })
    .then(() => this.getMondayData())
    .then(() => this.getTuesdayData())
    .then(() => this.getWednesdayData())
    .then(() => this.getThursdayData())
    .then(() => this.getFridayData())
    .then(() => this.getSaturdayData())
    .then(() => this.getSundayData())
    .then(() => this.getMondayCount())
    .then(() => this.getTuesdayCount())
    .then(() => this.getWednesdayCount())
    .then(() => this.getThursdayCount())
    .then(() => this.getFridayCount())
    .then(() => this.getSaturdayCount())
    .then(() => this.getSundayCount())





  }
  getMondayData = () => {
    const { userProfile } = this.state;
    workoutData.getMondayCaloriesBurned(userProfile.userId)
  .then(mondayCalorie => { this.setState({mondayCalorie})})
  }

  getTuesdayData = () => {
    const { userProfile } = this.state;
    workoutData.getTuesdayCaloriesBurned(userProfile.userId)
  .then(tuesdayCalorie => { this.setState({tuesdayCalorie})})
  }

  getWednesdayData = () => {
    const { userProfile } = this.state;
    workoutData.getWednesdayCaloriesBurned(userProfile.userId)
  .then(wednesdayCalorie => { this.setState({wednesdayCalorie})})
  }

  getThursdayData = () => {
    const { userProfile } = this.state;
    workoutData.getThursdayCaloriesBurned(userProfile.userId)
  .then(thursdayCalorie => { this.setState({thursdayCalorie})})
  }

  getFridayData = () => {
    const { userProfile } = this.state;
    workoutData.getFridayCaloriesBurned(userProfile.userId)
  .then(fridayCalorie => { this.setState({fridayCalorie})})
  }

  getSaturdayData = () => {
    const { userProfile } = this.state;
    workoutData.getSaturdayCaloriesBurned(userProfile.userId)
  .then(saturdayCalorie => { this.setState({saturdayCalorie})})
  }

  getSundayData = () => {
    const { userProfile } = this.state;
    workoutData.getSundayCaloriesBurned(userProfile.userId)
  .then(sundayCalorie => { this.setState({sundayCalorie})})
  }



  getMondayCount = () => {
      const { userProfile } = this.state;
      mealData.getMondayCalorieCount(userProfile.userId)
    .then(mondayCount => { this.setState({mondayCount})})
    }

    getTuesdayCount = () => {
      const { userProfile } = this.state;
      mealData.getTuesdayCalorieCount(userProfile.userId)
    .then(tuesdayCount => { this.setState({tuesdayCount})})
    }

    getWednesdayCount = () => {
      const { userProfile } = this.state;
      mealData.getWednesdayCalorieCount(userProfile.userId)
    .then(wednesdayCount => { this.setState({wednesdayCount})})
    }

    getThursdayCount = () => {
      const { userProfile } = this.state;
      mealData.getThursdayCalorieCount(userProfile.userId)
    .then(thursdayCount => { this.setState({thursdayCount})})
    }

    getFridayCount = () => {
      const { userProfile } = this.state;
      mealData.getFridayCalorieCount(userProfile.userId)
    .then(fridayCount => { this.setState({fridayCount})})
    }

    getSaturdayCount = () => {
      const { userProfile } = this.state;
      mealData.getSaturdayCalorieCount(userProfile.userId)
    .then(saturdayCount => { this.setState({saturdayCount})})
    }

    getSundayCount = () => {
      const { userProfile } = this.state;
      mealData.getSundayCalorieCount(userProfile.userId)
    .then(sundayCount => { this.setState({sundayCount})})
    }


render() {
const {
userProfile,
mondayCalorie,
tuesdayCalorie,
wednesdayCalorie,
thursdayCalorie,
fridayCalorie,
saturdayCalorie,
sundayCalorie,
mondayCount,
tuesdayCount,
wednesdayCount,
thursdayCount,
fridayCount,
saturdayCount,
sundayCount,
} = this.state;
  return(
    <div className="UserProfile col-md-12">
      <h2>{`${userProfile.firstName} ${userProfile.lastName}'s Profile`}</h2>

        <div className="profile-container">
          <img src={`${userProfile.imageUrl}`} className="userProfileImage col-4"alt= "Profile Pic"/>
          <div className="profile-info col-12">
            <p className="profile-line-item"><span className="line-title">Email Address:  </span> {userProfile.email}</p>
            <p className="profile-line-item"><span className="line-title">Sex:  </span>{userProfile.sex}&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<span className="line-title">Height:  </span>{userProfile.height}</p>
            <p className="profile-line-item"><span className="line-title">Age:  </span>{userProfile.age}&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<span className="line-title">Current Weight:  </span>{userProfile.currentWeight}</p>
            <p className="profile-line-item"><span className="line-title">Birthdate:  </span>{userProfile.birthdate}</p>
            <p className="profile-line-item"><span className="line-title">Calorie Goal:  </span>{userProfile.calorieGoal} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<span className="line-title">Weight Goal:  </span>{userProfile.weightGoal}</p>
            <p className="profile-line-item"><span className="line-title">Beginning Weight:  </span>{userProfile.beginningWeight}</p>
            <p className="profile-line-item"><span className="line-title">My auto generated SQL userId is:  </span> {userProfile.userId}</p>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <Link to="users/edit">Update Profile</Link>
              </div>
          </div>
          </div>
          </div>
              
         <hr></hr>
         
    <div className="beginning-progress photos d-flex flex-wrap">
      <Card className="beginningCard p-2 col-example text-center d-flex col-3 photoCard">
          <CardTitle tag="h4">Where we started</CardTitle>
        <img src={userProfile.beginningPhoto}className="beginningImage cardPic col-4"alt= "Beginning Pic"/>
        <CardBody>
          
                   
        </CardBody>
      </Card>
      
    
   
    <Card className="p-2 col-example text-center d-flex col-3 photoCard">
          <CardTitle tag="h4">How Far have we come?</CardTitle>
          <CardBody>
        
          <CardText>Let's compare</CardText>
         
        </CardBody>
      </Card>
     
   
   
  
      <Card className="p-2 col-example text-center d-flex col-3 photoCard">
          <CardTitle tag="h4">Upload a progress photo on your user profile</CardTitle>
        <img src={userProfile.progressPhoto}className="ProgressImage cardPic col-4"alt= "Progress Pic"/>
        <CardBody>
          
                   
        </CardBody>
      </Card>
      </div>
          
      <hr></hr>
      <div className="calorie-container d-flex-flex-wrap">
      <div className="p-2 col-example text-center d-flex col-6 mealCard">
      <CardText>Here are your totals from last week</CardText>
      <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"/>
          <CardText>Monday:  Calories Consumed:{`${mondayCount}`}  </CardText>
          <CardText>Tuesday: Calories Consumed: {`${tuesdayCount}`}  </CardText>
          <CardText>Wednesday: Calories Consumed: {`${wednesdayCount}`}  </CardText>
          <CardText>Thursday:  Calories Consumed: {`${thursdayCount}`}  </CardText>
          <CardText>Friday:  Calories Consumed:   {`${fridayCount}`}  </CardText>
          <CardText>Saturday:  Calories Consumed: {`${saturdayCount}`} </CardText>
          <CardText>Sunday:  Calories Consumed: {`${sundayCount}`}  </CardText> 
          </div>
      <hr></hr>
      <div className="p-2 col-example text-center d-flex col-6 workoutCard">
      <CardText>Here are your totals from last week</CardText>
        <img src = "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80"/>
          <CardText>Monday:  Calories Burned: {`${mondayCalorie}`} </CardText>
          <CardText>Tuesday: Calories Burned: {`${tuesdayCalorie}`}  </CardText>
          <CardText>Wednesday: Calories Burned:{`${wednesdayCalorie}`}  </CardText>
          <CardText>Thursday:  Calories Burned: {`${thursdayCalorie}`}  </CardText>
          <CardText>Friday:  Calories Burned:  {`${fridayCalorie}`}   </CardText>
          <CardText>Saturday:  Calories Burned:{`${saturdayCalorie}`}  </CardText>
          <CardText>Sunday:  Calories Burned: {`${sundayCalorie}`}  </CardText> 
  </div>
          </div> 
          </div>
         

  )
}
}

export default UserProfile;