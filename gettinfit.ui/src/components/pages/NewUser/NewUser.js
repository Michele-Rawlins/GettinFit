import React from 'react';

import authData from '../../../helpers/data/authData';



class NewUser extends React.Component {
  state = {
    newFirstName: '',
    newLastName: '',
    newEmail: '',
    newPassword: '',
    newSex: '',
    newHeight: '',
    newCurrentWeight:'',
    newAge: '',
    newImageUrl: '',
    newBirthdate: '',
    newCalorieGoal: '',
    newWeightGoal: '',
    newBeginningWeight: '',
    newBeginningPhoto: '',
    newProgressPhoto: '',
    newDate: '',
    
     }

  newFirstName = (e) => {
    e.preventDefault();
    this.setState({ newFirstName: e.target.value});
  }

  newLastName = (e) => {
    e.preventDefault();
    this.setState({ newLastName: e.target.value});
  }
  
  newEmail = (e) => {
    e.preventDefault();
    this.setState({ newEmail: e.target.value});
  }

  newPassword = (e) => {
    e.preventDefault();
    this.setState({ newPassword: e.target.value});
  }
 
 newSex = (e) => {
    e.preventDefault();
    this.setState({ newSex: e.target.value});
  }

  newHeight = (e) => {
    e.preventDefault();
    this.setState({ newHeight: e.target.value});
  }

  newCurrentWeight = (e) => {
    e.preventDefault();
    this.setState({ newCurrentWeight: e.target.value});
  }

  newAge = (e) => {
    e.preventDefault();
    this.setState({ newAge: e.target.value});
  }


  newImageUrl = (e) => {
    e.preventDefault();
    this.setState({ newImageUrl: e.target.value});
  }

  newBirthdate = (e) => {
    e.preventDefault();
    this.setState({ newBirthdate: e.target.value});
  }

  newCalorieGoal = (e) => {
    e.preventDefault();
    this.setState({ newCalorieGoal: e.target.value});
  }

  newWeightGoal = (e) => {
    e.preventDefault();
    this.setState({ newWeightGoal: e.target.value});
  }

  newBeginningWeight = (e) => {
    e.preventDefault();
    this.setState({ newBeginningWeight: e.target.value});
  }

  newBeginningPhoto = (e) => {
    e.preventDefault();
    this.setState({ newBeginningPhoto: e.target.value});
  }

  newProgressPhoto = (e) => {
    e.preventDefault();
    this.setState({ newProgressPhoto: e.target.value});
  }



  newDate = (e) => {
    e.preventDefault();
    this.setState({ newDate: e.target.value});
  }


  saveNewUser = (e) => {
    e.preventDefault();
    const {
      newFirstName,
      newLastName,
      newEmail,
      newPassword,
      newSex,
      newHeight,
      newCurrentWeight,
      newAge,
      newImageUrl,
      newBirthdate,
      newCalorieGoal,
      newWeightGoal,
      newBeginningWeight,
      newBeginningPhoto,
      newProgressPhoto,
      newDate,


    } = this.state;

const newUser = {
    firstName: newFirstName,
    lastName: newLastName,
    email: newEmail,
    password: newPassword,
    sex: newSex,
    height: newHeight,
    currentWeight:  newCurrentWeight,
    age: newAge,
    imageUrl:  newImageUrl,
    birthdate:  newBirthdate,
    calorieGoal:  newCalorieGoal,
    weightGoal: newWeightGoal,
    beginningWeight:  newBeginningWeight,
    beginningPhoto: newBeginningPhoto,
    progressPhoto: newProgressPhoto,
    date:  newDate,
 

};

authData.registerUser(newUser)
.then(() => this.props.history.push('/login'))
.catch((err) => console.error('unable to add new User'))
}

render() {
  const {

    newFirstName,
      newLastName,
      newEmail,
      newPassword,
      newSex,
      newHeight,
      newCurrentWeight,
      newAge,
      newImageUrl,
      newBirthdate,
      newCalorieGoal,
      newWeightGoal,
      newBeginningWeight,
      newBeginningPhoto,
      newProgressPhoto,
      newDate,
        } = this.state;

  return (
    <div className="New col-12">
      <h1>New User</h1>
      <form className="col-6 offset-3 text-left">
        <div className="form-group">
        <label htmlFor="new-first-name">First Name</label>
      <input
        type="text"
        className="form-control"
        id="new-name"
        value={newFirstName}
        onChange={this.newFirstName}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-last-name">Last Name</label>
      <input
        type="text"
        className="form-control"
        id="new-last-name"
        value={newLastName}
        onChange={this.newLastName}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-email">Email</label>
      <input
        type="text"
        className="form-control"
        id="new-email"
        value={newEmail}
        onChange={this.newEmail}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-password">Password</label>
      <input
        type="text"
        className="form-control"
        id="new-password"
        value={newPassword}
        onChange={this.newPassword}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-sex">Sex</label>
      <input
        type="text"
        className="form-control"
        id="new-sex"
        value={newSex}
        onChange={this.newSex}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-height">Height</label>
      <input
        type="text"
        className="form-control"
        id="new-height"
        value={newHeight}
        onChange={this.newHeight}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-currentWeight">Current Weight</label>
      <input
        type="text"
        className="form-control"
        id="new-currentWeight"
        value={newCurrentWeight}
        onChange={this.newCurrentWeight}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-age">Age</label>
      <input
        type="text"
        className="form-control"
        id="new-age"
        value={newAge}
        onChange={this.newAge}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-imageUrl">Place Image Url here</label>
      <input
        type="text"
        className="form-control"
        id="new-imageUrl"
        value={newImageUrl}
        onChange={this.newImageUrl}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-birthdate">Birthdate</label>
      <input
        type="text"
        className="form-control"
        id="new-birthdate"
        value={newBirthdate}
        onChange={this.newBirthdate}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-calorieGoal">Calorie Goal</label>
      <input
        type="text"
        className="form-control"
        id="new-calorieGoal"
        value={newCalorieGoal}
        onChange={this.newCalorieGoal}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-weightGoal">Weight Goal</label>
      <input
        type="text"
        className="form-control"
        id="new-weightGoal"
        value={newWeightGoal}
        onChange={this.newWeightGoal}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-beginningWeight">Beginning Weight</label>
      <input
        type="text"
        className="form-control"
        id="new-beginningWeight"
        value={newBeginningWeight}
        onChange={this.newBeginningWeight}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-beginningPhoto">Place Beginning Photo here</label>
      <input
        type="text"
        className="form-control"
        id="new-beginningPhoto"
        value={newBeginningPhoto}
        onChange={this.newBeginningPhoto}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-progressPhoto">Place Beginning Photo here</label>
      <input
        type="text"
        className="form-control"
        id="new-progressPhoto"
        value={newProgressPhoto}
        onChange={this.newProgressPhoto}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-date">Date Created</label>
      <input
        type="date"
        className="form-control"
        id="new-date"
        value={newDate}
        onChange={this.newDate}
        />
        </div>
        <button className="btn btn-secondary" onClick={this.saveNewUser}>Save New User</button>
      </form>
    </div>
  )
}
}

export default NewUser;