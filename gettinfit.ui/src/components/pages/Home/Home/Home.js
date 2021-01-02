import React from 'react';
import MyCarousel from '../../../shared/MyCarousel/MyCarousel';
import { Link } from 'react-router-dom'
import './Home.scss';

import {
  Card, CardImg, CardText, CardTitle,CardBody, Col, Row
} from 'reactstrap';

class Home extends React.Component {
  state = {
    MyCarousel: [],
  }

  render() {
   
    

    return (
     

   <div className="Home container">
      <h1 className ="title">Welcome to Gettin Fit</h1>
      <MyCarousel />
<div className="link-container d-flex flex-wrap">
      <Card className="p-2 col-example text-center d-flex col-3 workoutCard">
          <CardTitle tag="h4">Let's Workout</CardTitle>
        <CardImg className="cardPic"src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d29ya291dHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Card image cap" />
        <CardBody>
        <Link to='/workout'>Follow Me</Link>
          
          <CardText></CardText>
          
        </CardBody>
      </Card>

      <Card className="p-2 col-example text-center d-flex col-3 mealCard">
          <CardTitle tag="h4">Let's Eat</CardTitle>
        <CardImg className="cardPic"src="https://images.unsplash.com/photo-1532884968933-5173fdde39f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Card image cap" />
        <CardBody>
        <Link to='/meals'>Follow Me</Link>
          
          <CardText></CardText>
          
        </CardBody>
      </Card>

      <Card className="p-2 col-example text-center d-flex col-3 dashCard">
          <CardTitle tag="h4">Where are we?</CardTitle>
        <CardImg className="cardPic"src="https://images.unsplash.com/photo-1465984111739-03a1ee4647a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Card image cap" />
        <CardBody>
        <Link to='/userProfile'>Follow Me</Link>
          
          <CardText></CardText>
          
        </CardBody>
      </Card>


  <div className = "aboutUs">
    <h2 className = "aboutUs">About Us</h2>
  <p>"Welcome to GettinFit.  We will help you keep track of your daily calorie intake.  We will show you last weeks calorie count by day.  You can see how you are doing this month and how you compare to last month.  Thanks for allowing us to join your journey to a healthy you "</p>
  </div>
  </div>
  </div>
         
    );   
    }
  }
  
  export default Home;