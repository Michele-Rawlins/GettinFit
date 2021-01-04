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

const getTuesdayCaloriesBurned = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/tuesdayWorkoutCaloriesBurned/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getWednesdayCaloriesBurned = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/wednesdayWorkoutCaloriesBurned/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getThursdayCaloriesBurned = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/thursdayWorkoutCaloriesBurned/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getFridayCaloriesBurned = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/fridayWorkoutCaloriesBurned/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getSaturdayCaloriesBurned = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/saturdayWorkoutCaloriesBurned/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getSundayCaloriesBurned = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/sundayWorkoutCaloriesBurned/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getLastMonthsCaloriesBurned = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/lastMonthsCaloriesBurned/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getThisMonthsCaloriesBurned = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/thisMonthsCaloriesBurned/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getMondayWeightLifted = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/mondayWeightLifted/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getTuesdayWeightLifted = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/tuesdayWeightLifted/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getWednesdayWeightLifted = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/wednesdayWeightLifted/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getThursdayWeightLifted = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/thursdayWeightLifted/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getFridayWeightLifted = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/fridayWeightLifted/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getSaturdayWeightLifted = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/saturdayWeightLifted/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getSundayWeightLifted = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/sundayWeightLifted/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getLastMonthsWeightLifted = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/lastMonthsWeightLifted/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getThisMonthsWeightLifted = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts/thisMonthsWeightLifted/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const addWorkout = (newWorkout) => axios.post(`${baseUrl}/workouts`, newWorkout);


export default {
  GetUserWorkouts,
  addWorkout,
  getMondayCaloriesBurned,
  getTuesdayCaloriesBurned,
  getWednesdayCaloriesBurned,
  getThursdayCaloriesBurned,
  getFridayCaloriesBurned,
  getSaturdayCaloriesBurned,
  getSundayCaloriesBurned,
  getLastMonthsCaloriesBurned,
  getThisMonthsCaloriesBurned,
  getMondayWeightLifted,
  getTuesdayWeightLifted,
  getWednesdayWeightLifted,
  getThursdayWeightLifted,
  getFridayWeightLifted,
  getSaturdayWeightLifted,
  getSundayWeightLifted,
  getLastMonthsWeightLifted,
  getThisMonthsWeightLifted

}