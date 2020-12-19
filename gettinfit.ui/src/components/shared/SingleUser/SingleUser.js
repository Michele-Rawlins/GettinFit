import React from 'react';
import firebase from 'firebase'

import userData from '../../../../src/helpers/data/userData';

class SingleUser extends React.Component {
  state = {
    userProfile: [],
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    let email = user.email;
    
    // if (user != null) {
    //   email = user.email;
    // }
    userData.getUserByEmail(email)
    .then(userProfile => { this.setState({userProfile}) })

  }
  render() {
    const {user,
    userProfile
  } = this.state;

    return (
      <div className="SingleUser">
        <strong className="m-2">{userProfile.firstName}</strong>
        <img className="m-2" src={userProfile.imageUrl} alt="" />
        <ul>
            <li>UserId: {userProfile.userId} </li>
            <li>FirstName: {userProfile.firstName} </li>
            <li>Last Name: {userProfile.lastName} </li>
            <li>Email: {userProfile.email} </li>
            <li>Password: {userProfile.password}</li>,
            <li>Sex: {userProfile.sex}</li>
            <li>Height: {userProfile.height}</li>
            <li>CurrentWeight:  {userProfile.currentWeight}</li>
            <li>Age: {userProfile.age}</li>
            <li>Birthdate:  {userProfile.birthdate}</li>
            <li>CalorieGoal:  {userProfile.calorieGoal}</li>
            <li>WeightGoal: {userProfile.weightGoal}</li>
            <li>BeginningWeight:  {userProfile.beginningWeight}</li>
            <li>BeginningPhoto: {userProfile.beginningPhoto}</li>
            <li>ProgressPhoto: {userProfile.progressPhoto}</li>
            <li>Date Created: {userProfile.date} </li>
            
        </ul>
      </div>
    )
  }
}

export default SingleUser;