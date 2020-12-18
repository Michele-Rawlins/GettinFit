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


const addWorkout = (newWorkout) => axios.post(`${baseUrl}/workouts`, newWorkout);
// const addWorkout = (newWorkout) => axios.post(`${baseUrl}/workouts`, newWorkout);

export default {
  GetUserWorkouts,
  addWorkout,
  getMondayCaloriesBurned,
  getTuesdayCaloriesBurned,
  getWednesdayCaloriesBurned,
  getThursdayCaloriesBurned,
  getFridayCaloriesBurned,
  getSaturdayCaloriesBurned,
  getSundayCaloriesBurned

}