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

const addWorkout = (newWorkout) => axios.post(`${baseUrl}/workouts`, newWorkout);

export default {
  GetUserWorkout,
  addWorkout
}