import axios from 'axios';

import {baseUrl} from '../data/constants.json';




const GetUserWorkouts = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/user/${userId}`)
    .then(response => {
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