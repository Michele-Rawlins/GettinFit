import React from 'react';
import mealData from '../../../helpers/data/mealData';
import mealShape from '../../../helpers/propz/mealShape';

import authData from '../../../../src/helpers/data/authData';



import {
  Card, CardImg, CardText, CardTitle,CardBody, Col, Row
} from 'reactstrap';

class Meal extends React.Component {
  state = {
    newFoodDescription: '',
    newCalorieCount: '',
    newWhichMeal: '',
    newDate: '',
    // uid: 0,
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
      newFoodDescription,
      newCalorieCount,
      newWhichMeal,
      newDate,
    } = this.state;

const newMeal = {
    foodDescription: newFoodDescription,
    calorieCount: newCalorieCount,
    whichMeal:  newWhichMeal,
    Date: newDate
    // uid: authData.getUid(),

};

console.log(newMeal);
 mealData.addMeal(newMeal)
 .then(() => this.props.history.push('/meals'))
 .catch((err) => console.error('unable to add new Workout'))
}

  render() {
    const {
        newFoodDescription,
        newCalorieCount,
        newWhichMeal,
        newDate,
          } = this.state;
   
    

    return (
     

   <div className="Meal container">
     <div className="New col-12">
      <h1>Welcome to Your Meal Page</h1>
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
        type="number"
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
     
      <Row>
      <Col sm="4">
      <Card className="MealCard">
          <CardTitle tag="h4">Last Weeks Total</CardTitle>
        <CardImg  src="https://images.unsplash.com/photo-1510081893571-639c2cb7f2ed?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJyZWFrZmFzdCUyMG1lYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Card image cap" />
        <CardBody>
          
          <CardText>Here are your totals from last week</CardText>
          <CardText>Calories Consumed:</CardText>
                    
        </CardBody>
      </Card>
    
    
    <Card className="workoutCard">
          <CardTitle tag="h4">This Months Total</CardTitle>
        <CardImg src="https://images.unsplash.com/photo-1598514983744-9a246f301275?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGx1bmNoJTIwbWVhbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Card image cap" />
        <CardBody>
        
          <CardText>Here are this Month's Totals</CardText>
          <CardText>Calories Consumed:</CardText>
        
        </CardBody>
      </Card>
   
   
     
    <Card className="workoutCard">
          <CardTitle tag="h4">Last Month's Total</CardTitle>
        <CardImg src="https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8a2V0byUyMGRpbm5lciUyMG1lYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Card image cap" />
        <CardBody>
          
          <CardText>Here are Last Months Totals</CardText>
          <CardText>Calories Consumed:</CardText>
         
        </CardBody>
      </Card>
      </Col>
      </Row>
    
       </div>
       </div>   
  )
}
}

export default Meal;
