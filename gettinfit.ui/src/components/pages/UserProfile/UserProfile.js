import React from 'react';
import firebase from 'firebase'
import userData from '../../../helpers/data/userData';
import mealData from '../../../helpers/data/mealData';
import workoutData from '../../../helpers/data/workoutData';
import ProgressBar from '../../shared/ProgressBar/ProgressBar';

import {
  Card, CardImg, CardText, CardTitle,CardBody, Col, Row, Progress,
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
    mondayWeight:0,
    tuesdayWeight:0,
    wednesdayWeight:0,
    thursdayWeight:0,
    fridayWeight:0,
    saturdayWeight:0,
    sundayWeight:0,
    lastMonthWeight: 0,
    thisMonthWeight: 0,
    

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
    .then(() => this.getMondayWeight())
    .then(() => this.getTuesdayWeight())
    .then(() => this.getWednesdayWeight())
    .then(() => this.getThursdayWeight())
    .then(() => this.getFridayWeight())
    .then(() => this.getSaturdayWeight())
    .then(() => this.getSundayWeight())
    .then(() => this.getLastMonthWeight())
    .then(() => this.getThisMonthWeight())





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

    
    getMondayWeight = () => {
      const { userProfile } = this.state;
      workoutData.getMondayWeightLifted(userProfile.userId)

    .then(mondayWeight => { this.setState({mondayWeight})
    console.log(mondayWeight)})
    }

    getTuesdayWeight = () => {
      const { userProfile } = this.state;
      workoutData.getTuesdayWeightLifted(userProfile.userId)

    .then(tuesdayWeight => { this.setState({tuesdayWeight})
    console.log(tuesdayWeight)})
    }

    getWednesdayWeight = () => {
      const { userProfile } = this.state;
      workoutData.getWednesdayWeightLifted(userProfile.userId)

    .then(wednesdayWeight => { this.setState({wednesdayWeight})
    console.log(wednesdayWeight)})
    }

    getThursdayWeight = () => {
      const { userProfile } = this.state;
      workoutData.getThursdayWeightLifted(userProfile.userId)

    .then(thursdayWeight => { this.setState({thursdayWeight})
    console.log(thursdayWeight)})
    }

    getFridayWeight = () => {
      const { userProfile } = this.state;
      workoutData.getFridayWeightLifted(userProfile.userId)

    .then(fridayWeight => { this.setState({fridayWeight})
    console.log(fridayWeight)})
    }

    getSaturdayWeight = () => {
      const { userProfile } = this.state;
      workoutData.getSaturdayWeightLifted(userProfile.userId)

    .then(saturdayWeight => { this.setState({saturdayWeight})
    console.log(saturdayWeight)})
    }

    getSundayWeight = () => {
      const { userProfile } = this.state;
      workoutData.getSundayWeightLifted(userProfile.userId)

    .then(sundayWeight => { this.setState({sundayWeight})
    console.log(sundayWeight)})
    }

    getLastMonthWeight = () => {
      const { userProfile } = this.state;
      workoutData.getLastMonthsWeightLifted(userProfile.userId)
    .then(lastMonthWeight => { this.setState({lastMonthWeight})})
    }

    getThisMonthWeight = () => {
      const { userProfile } = this.state;
      workoutData.getThisMonthsWeightLifted(userProfile.userId)
    .then(thisMonthWeight => { this.setState({thisMonthWeight})})
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
mondayWeight,
tuesdayWeight,
wednesdayWeight,
thursdayWeight,
fridayWeight,
saturdayWeight,
sundayWeight,
lastMonthWeight,
thisMonthWeight,


} = this.state;



  return(
    <div className="UserProfile col-md-12">
      <h2>{`${userProfile.firstName} ${userProfile.lastName} Profile`}</h2>

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
      
      </Card>
      <div className="progress-bar container">
        <ProgressBar />
      </div>
      </div>
          
      <hr></hr>
      <div className="calorie-container d-flex-flex-wrap">
      <div className="p-2 col-example text-center d-flex col-6 mealCard">
      <CardText>Last Week</CardText>
      <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"/>
      
          <CardText className="column">Monday: <hr></hr> Calories Consumed: <hr></hr>{`${mondayCount}`}</CardText>
          <CardText className="column">Tuesday:<hr></hr> Calories Consumed: <hr></hr> {`${tuesdayCount}`}</CardText>
          <CardText className="column">Wednesday:<hr></hr> Calories Consumed: <hr></hr> {`${wednesdayCount}`}</CardText>
          <CardText className="column">Thursday: <hr></hr> Calories Consumed: <hr></hr> {`${thursdayCount}`} </CardText>
          <CardText className="column">Friday:<hr></hr>  Calories Consumed:  <hr></hr> {`${fridayCount}`} </CardText>
          <CardText className="column">Saturday:<hr></hr>  Calories Consumed:<hr></hr> {`${saturdayCount}`} </CardText>
          <CardText className="column">Sunday: <hr></hr> Calories Consumed: <hr></hr> {`${sundayCount}`} </CardText> 
                    </div>
      <hr></hr>
      <div className="p-2 col-example text-center d-flex col-6 workoutCard">
      <CardText>Last Week</CardText>
        <img src = "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80"/>
          <CardText className="column">Monday: <hr></hr>  Calories Burned: <hr></hr> {`${mondayCalorie}`}<hr></hr>  Weight Lifted:<hr></hr>  {`${mondayWeight}`} </CardText>
          <CardText className="column">Tuesday: <hr></hr> Calories Burned: <hr></hr> {`${tuesdayCalorie}`}  <hr></hr> Weight Lifted:<hr></hr>  {`${tuesdayWeight}`} </CardText>
          <CardText className="column">Wednesday:<hr></hr>  Calories Burned:<hr></hr> {`${wednesdayCalorie}`}<hr></hr> Weight Lifted:<hr></hr>  {`${wednesdayWeight}`}  </CardText>
          <CardText className="column">Thursday: <hr></hr>  Calories Burned: <hr></hr> {`${thursdayCalorie}`} <hr></hr> Weight Lifted:<hr></hr>  {`${thursdayWeight}`} </CardText>
          <CardText className="column">Friday:<hr></hr>   Calories Burned: <hr></hr> {`${fridayCalorie}`} <hr></hr> Weight Lifted:<hr></hr>  {`${fridayWeight}`}   </CardText>
          <CardText className="column">Saturday: <hr></hr>  Calories Burned: <hr></hr> {`${saturdayCalorie}`} <hr></hr>Weight Lifted:<hr></hr>  {`${saturdayWeight}`}  </CardText>
          <CardText className="column">Sunday:<hr></hr>   Calories Burned: <hr></hr> {`${sundayCalorie}`} <hr></hr> Weight Lifted:<hr></hr>  {`${sundayWeight}`} </CardText> 
  </div>
          </div> 
          </div>
         

  )
}
}

export default UserProfile;