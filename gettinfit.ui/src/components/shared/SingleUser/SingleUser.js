import React from 'react';


class SingleUser extends React.Component {
  render() {
    const {user} = this.props;

    return (
      <div className="SingleUser">
        <strong className="m-2">{user.firstName}</strong>
        <img className="m-2" src={user.imageUrl} alt="" />
        <ul>
            <li>UserId: {user.userId} </li>
            <li>FirstName: {user.firstName} </li>
            <li>Last Name: {user.lastName} </li>
            <li>Email: {user.email} </li>
            <li>Password: {user.password}</li>,
              <li>Sex: {user.sex}</li>
            <li>Height: {user.height}</li>
            <li>CurrentWeight:  {user.currentWeight}</li>
            <li>Age: {user.age}</li>
            <li>ImageUrl:  {user.imageUrl}</li>,
            <li>Birthdate:  {user.birthdate}</li>
            <li>CalorieGoal:  {user.calorieGoal}</li>
            <li>WeightGoal: {user.weightGoal}</li>
            <li>BeginningWeight:  {user.beginningWeight}</li>
            <li>Date Created: {user.date} </li>
            
        </ul>
      </div>
    )
  }
}

export default SingleUser;