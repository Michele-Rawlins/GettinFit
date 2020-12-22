import React from 'react';
import mealData from '../../../helpers/data/mealData';
import mealShape from '../../../helpers/propz/mealShape';
import userData from '../../../helpers/data/userData';
import authData from '../../../../src/helpers/data/authData';
import firebase from 'firebase'


import {
  Card, CardImg, CardText, CardTitle,CardBody, Col, Row
} from 'reactstrap';

class Meal extends React.Component {
  state = {
    user: '',
    newFoodDescription: '',
    newCalorieCount: '',
    newWhichMeal: '',
    newDate: '',
    userProfile: [],
    userMeal:[],
    mondayCalorie:0,
    tuesdayCalorie:0,
    wednesdayCalorie:0,
    thursdayCalorie:0,
    fridayCalorie:0,
    saturdayCalorie:0,
    sundayCalorie:0,
    lastMonthCalorie: 0,
    thisMonthCalorie: 0,
    // uid: 0,
     }

     componentDidMount() {
      var user = firebase.auth().currentUser;
      let email = '';
    
    if (user != null) {
      email = user.email;
    }
      userData.getUserByEmail(email)
      .then(userProfile => { this.setState({userProfile}) })
      .then(() => this.getMealData())
      .then(() => this.getMondayData())
      .then(() => this.getTuesdayData())
      .then(() => this.getWednesdayData())
      .then(() => this.getThursdayData())
      .then(() => this.getFridayData())
      .then(() => this.getSaturdayData())
      .then(() => this.getSundayData())
      .then(() => this.getLastMonthCalorie())
      .then(() => this.getThisMonthCalorie())
      
    }

    getMealData = () => {
    const { userProfile } = this.state;
    mealData.GetUserMeal(userProfile.userId)
    .then(userMeal => { this.setState({userMeal}) })
   }
    getMondayData = () => {
      const { userProfile } = this.state;
      mealData.getMondayCalorieCount(userProfile.userId)
    .then(mondayCalorie => { this.setState({mondayCalorie})
    console.log(mondayCalorie)})
    }

    getTuesdayData = () => {
      const { userProfile } = this.state;
      mealData.getTuesdayCalorieCount(userProfile.userId)
    .then(tuesdayCalorie => { this.setState({tuesdayCalorie})})
    }

    getWednesdayData = () => {
      const { userProfile } = this.state;
      mealData.getWednesdayCalorieCount(userProfile.userId)
    .then(wednesdayCalorie => { this.setState({wednesdayCalorie})})
    }

    getThursdayData = () => {
      const { userProfile } = this.state;
      mealData.getThursdayCalorieCount(userProfile.userId)
    .then(thursdayCalorie => { this.setState({thursdayCalorie})})
    }

    getFridayData = () => {
      const { userProfile } = this.state;
      mealData.getFridayCalorieCount(userProfile.userId)
    .then(fridayCalorie => { this.setState({fridayCalorie})})
    }

    getSaturdayData = () => {
      const { userProfile } = this.state;
      mealData.getSaturdayCalorieCount(userProfile.userId)
    .then(saturdayCalorie => { this.setState({saturdayCalorie})})
    }

    getSundayData = () => {
      const { userProfile } = this.state;
      mealData.getSundayCalorieCount(userProfile.userId)
    .then(sundayCalorie => { this.setState({sundayCalorie})})
    }

    getLastMonthCalorie = () => {
      const { userProfile } = this.state;
      mealData.getLastMonthsCalorieCount(userProfile.userId)
    .then(lastMonthCalorie => { this.setState({lastMonthCalorie})})
    }

    getThisMonthCalorie = () => {
      const { userProfile } = this.state;
      mealData.getThisMonthsCalorieCount(userProfile.userId)
    .then(thisMonthCalorie => { this.setState({thisMonthCalorie})})
    }
  newFoodDescription = (e) => {
    e.preventDefault();
    this.setState({ newFoodDescription: e.target.value});
  }

  newCalorieCount = (e) => {
    e.preventDefault();
    this.setState({ newCalorieCount: e.target.value});
  }

  newWhichMeal = (e) => {
    e.preventDefault();
    this.setState({ newWhichMeal: e.target.value});
  }

  newDate = (e) => {
    e.preventDefault();
    this.setState({ newDate: e.target.value});
  }


  saveNewMeal = (e) => {
    e.preventDefault();
    
    const {
      user,
      userProfile,
      newFoodDescription,
      newCalorieCount,
      newWhichMeal,
      newDate,
      
    } = this.state;

const newMeal = {
    foodDescription: newFoodDescription,
    calorieCount: newCalorieCount,
    whichMeal:  newWhichMeal,
    Date: newDate,
    userId:userProfile.userId,

};

console.log(newMeal);
console.log(userProfile);
console.log(user);

mealData.addMeal(newMeal)
 .then(() => this.props.history.push('/meals'))
 .catch((err) => console.error('unable to add new Meal'))
  }


  render() {
    const {
        newFoodDescription,
        newCalorieCount,
        newWhichMeal,
        newDate,
        userProfile,
        mondayCalorie,
        tuesdayCalorie,
        wednesdayCalorie,
        thursdayCalorie,
        fridayCalorie,
        saturdayCalorie,
        sundayCalorie,
        lastMonthCalorie,
        thisMonthCalorie
          } = this.state;
   
    

    return (
     

   <div className="Meal container">
     <div className="New col-12">
      <h1>Welcome to {`${userProfile.firstName}'s`} Meal Page</h1>
      <form className="col-6 offset-3 text-left">
        <div className="form-group">
        <label htmlFor="new-food-description">Food Description</label>
      <input
        type="text"
        className="form-control"
        id="new-foodDescription"
        value={newFoodDescription}
        onChange={this.newFoodDescription}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-calorieCount">Calorie Count</label>
      <input
        type="text"
        className="form-control"
        id="new-calorieCount"
        value={newCalorieCount}
        onChange={this.newCalorieCount}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-whichMeal">Which Meal</label>
      <select
     
        className="form-control"
        id="new-whichMeal"
        value={newWhichMeal}
        onChange={this.newWhichMeal}>
            <option value="">Select</option>
        <option value="1">Breakfast</option>
        <option value="2">Lunch</option>
        <option value="3">Dinner</option>
        <option value="4">Snack</option>
        </select>
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
        
        <button className="btn btn-secondary" onClick={this.saveNewMeal}>Save New Meal</button>
      </form>
      <div className="meal-container d-flex flex-wrap">
        <Card className="p-2 col-example text-center d-flex col-3 mealCard">
          <CardTitle tag="h4">Last Weeks Total</CardTitle>
        <CardImg  src="https://images.unsplash.com/photo-1510081893571-639c2cb7f2ed?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJyZWFrZmFzdCUyMG1lYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Card image cap" />
        <CardBody>
          
          <CardText>Here are your totals from last week</CardText>
          <CardText>Monday:  Calories Consumed:{`${mondayCalorie}`}   </CardText>
          
          <CardText>Tuesday: Calories Consumed: {`${tuesdayCalorie}`}  </CardText>
          <CardText>Wednesday: Calories Consumed:{`${wednesdayCalorie}`} </CardText>
          <CardText>Thursday:  Calories Consumed: {`${thursdayCalorie}`} </CardText>
          <CardText>Friday:  Calories Consumed: {`${fridayCalorie}`}   </CardText>
          <CardText>Saturday:  Calories Consumed: {`${saturdayCalorie}`}</CardText>
          <CardText>Sunday:  Calories Consumed: {`${sundayCalorie}`}  </CardText> 
          
                    
        </CardBody>
      </Card>
    
    
    <Card className="workoutCard">
          <CardTitle tag="h4">This Months Total</CardTitle>
        <CardImg src="https://images.unsplash.com/photo-1598514983744-9a246f301275?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGx1bmNoJTIwbWVhbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Card image cap" />
        <CardBody>
        
          <CardText>Here are this Month's Totals</CardText>
          <CardText>Calories Consumed:{`${thisMonthCalorie}`}</CardText>
        
        </CardBody>
      </Card>
   
   
     
    <Card className="workoutCard">
          <CardTitle tag="h4">Last Month's Total</CardTitle>
        <CardImg src="https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8a2V0byUyMGRpbm5lciUyMG1lYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Card image cap" />
        <CardBody>
          
          <CardText>Here are Last Months Totals</CardText>
          <CardText>Calories Consumed:{`${lastMonthCalorie}`}</CardText>
         
        </CardBody>
      </Card>
     
    </div>
       </div>
       </div>   
  )
}
}

export default Meal;
