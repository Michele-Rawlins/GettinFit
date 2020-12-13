import React from 'react';
import firebase from 'firebase'
import userData from '../../../helpers/data/userData';

import {
  Card, CardImg, CardText, CardTitle,CardBody, Col, Row
} from 'reactstrap';

class UserProfile extends React.Component {

  state = {
    userProfile: [],
    newProgressPhoto:''
  }

  newProgressPhoto = (e) => {
    e.preventDefault();
    this.setState({ newProgressPhoto: e.target.value});
  }

  saveNewProgressPhoto = (e) => {
    e.preventDefault();
    const {
      newProgressPhoto,
    } = this.state;

  const newProgressPhotoUpload = {
    progressPhoto: newProgressPhoto,
  };

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
const newProgressPhoto = this.state;
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
          <CardTitle tag="h4">Upload New Photo</CardTitle>
    
  <Card label for="progress-Photo">ProgressPhoto</Card>
  <form className="col-6 offset-3 text-left">
        <div className="form-group">
        <label htmlFor="new-progressPhoto">Progress Photo</label>
  <input  
        type="image"
        className="form-control"
        id="new-progressPhoto"
        value={newProgressPhoto}
        onChange={this.newProgressPhoto}
        />
   </div>
   </form>
   <button className="btn btn-secondary" onClick={this.saveNewProgressPhoto}>Save Progress Photo</button>
      </Card>
      </Col>
     
         
</div>
</div>
      
   
   

  )
}
}

export default UserProfile;