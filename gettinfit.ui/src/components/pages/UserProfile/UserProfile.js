import React from 'react';
import firebase from 'firebase'
import userData from '../../../helpers/data/userData';

import {
  Card, CardImg, CardText, CardTitle,CardBody, Col, Row
} from 'reactstrap';

import { Link } from 'react-router-dom';
class UserProfile extends React.Component {

  state = {
    userProfile: {},
      }

  

    componentDidMount() {
    var user = firebase.auth().currentUser;
    let email = '';
    
    if (user != null) {
      email = user.email;
    }
    userData.getUserByEmail(email)
    .then(userProfile => { this.setState({userProfile}) })
  }

  

render() {
const {userProfile} = this.state;

  return(
    <div className="UserProfile col-md-12">
      <h2>{`${userProfile.firstName} ${userProfile.lastName}'s Profile`}</h2>

        <div className="profile-container">
          <img src={userProfile.imageUrl} className="userProfileImage col-4"alt={`"${userProfile.firstName}'s Profile Pic"`}></img>
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
              
         <hr></hr>
         
      <Col sm="4">
      <Card className="beginningCard">
          <CardTitle tag="h4">Where we started</CardTitle>
        <CardImg src={userProfile.beginningPhoto}/>
        <CardBody>
          
                   
        </CardBody>
      </Card>
      </Col>
    
      <Col sm="4">
    <Card className="middleCard">
          <CardTitle tag="h4">How Far have we come?</CardTitle>
          <CardBody>
        
          <CardText>Let's compare</CardText>
         
        </CardBody>
      </Card>
      </Col>
   
   
      <Col sm="4">
      <Card className="progressCard">
          <CardTitle tag="h4">Upload a progress photo on your user profile</CardTitle>
        <CardImg src={userProfile.progressPhoto}/>
        <CardBody>
          
                   
        </CardBody>
      </Card>
      </Col>
   
  
     
         
</div>
</div>
      
   
   

  )
}
}

export default UserProfile;