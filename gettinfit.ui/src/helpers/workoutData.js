import axios from 'axios';

import {baseUrl} from './constants.json';


const GetUserWorkout = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/user/${userId}`)
    .then(response => {
      if (response.data !== "") {
        response.data = response.data.toFixed(2)
        
      }
      resolve(response.data)})
    .catch(reject);
});

const addWorkout = (userWorkout) => axios.post(`${baseUrl}/workouts`, userWorkout);

export default {
  GetUserWorkout,
  addWorkout
}