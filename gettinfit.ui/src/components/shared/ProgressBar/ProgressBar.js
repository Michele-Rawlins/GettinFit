import React from 'react';
import { Progress } from 'reactstrap';
import userData from '../../../../src/helpers/data/userData';
import firebase from 'firebase'


class ProgressBar extends React.Component {

  state = {
  userProfile: {},

}

ProgressBar = (props) => {
  const {value, max } = props;
}
componentDidMount() {

  var user = firebase.auth().currentUser;
  let email = '';
  
  if (user != null) {
    email = user.email;
  }
  userData.getUserByEmail(email)
  .then(userProfile => { this.setState({userProfile}) })
  .then(currentWeight => { this.setState({currentWeight})})
  .then(beginningWeight => { this.setState({beginningWeight})})
  .then(weightGoal => { this.setState({weightGoal})})
  
}



getUsersCurrentWeight = () => {
  const { userProfile } = this.state;
  userData.getUserCurrentWeight(userProfile.userId)
.then(currentWeight => { this.setState({currentWeight})})
}

getUsersBeginningWeight = () => {
  const { userProfile } = this.state;
  userData.getUserBeginningWeight(userProfile.userId)
.then(beginningWeight => { this.setState({beginningWeight})})
}

getUsersWeightGoal = () => {
  const { userProfile } = this.state;
  userData.getUserWeightGoal(userProfile.userId)
.then(weightGoal => { this.setState({weightGoal})})
}

render () {
 const { userProfile }= this.state;
 
// ProgressBar = (props) => {
//   const {value, max } = props;
// }
 {
   return (
     <div>
      <div className="title">Weight Progress Bar</div>
<progress value={parseInt(userProfile.currentWeight)} max={parseInt(userProfile.beginningWeight)} />
      {/* <Progress value={parseInt(userProfile.currentWeight)} /> */}
      {/* <Progress striped variant color="success" value={parseInt(userProfile.weightGoal) - parseInt(userProfile.currentWeight)} max={parseInt(userProfile.beginningWeight)} /> */}
     
    </div>
  );
}
}
}

export default ProgressBar;