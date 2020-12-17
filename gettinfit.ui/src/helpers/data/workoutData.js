import axios from 'axios';

import {baseUrl} from '../data/constants.json';

import userData from '../data/userData';
import firebase from 'firebase';



  const userId = firebase.auth().currentUser;
  console.log('current user:', userId.email);
  const userEmail = userId.email;
  
  userData.getUserByEmail(userEmail)
  .then((userId) => this.setState({ userId }))


   
      
     
const GetUserWorkouts = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/user/${userId}`)
    .then(response => {
      if (response.data !== "") {
        response.data = response.data.toFixed(2)
        
      }
      resolve(response.data)})
    .catch(reject);
});

const getMondayCaloriesBurned = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/mondayWorkoutCaloriesBurned/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const addWorkout = (newWorkout) => axios.post(`${baseUrl}/workouts`, newWorkout);
// const addWorkout = (newWorkout) => axios.post(`${baseUrl}/workouts`, newWorkout);

export default {
  GetUserWorkouts,
  addWorkout,
  getMondayCaloriesBurned
}