import axios from 'axios';

import {baseUrl} from '../data/constants.json';




const GetUserMeal = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals/user/${userId}`)
    .then(response => {
      if (response.data !== "") {
        response.data = response.data.toFixed(2)
        
      }
      resolve(response.data)})
    .catch(reject);
});

const addMeal = (newMeal) => axios.post(`${baseUrl}/meals`, newMeal);
// const addWorkout = (newWorkout) => axios.post(`${baseUrl}/workouts`, newWorkout);

export default {
  GetUserMeal,
  addMeal
}