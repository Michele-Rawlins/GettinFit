import axios from 'axios';

import {baseUrl} from '../data/constants.json';




const GetUserMeal = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals/user/${userId}`)
          .then(response => {
        resolve(response.data)})
       .catch(reject);
        
      });

const getMondayCalorieCount = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals/mondayCalorieCount/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getTuesdayCalorieCount = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals/tuesdayCalorieCount/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getWednesdayCalorieCount = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals/wednesdayCalorieCount/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getThursdayCalorieCount = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals/thursdayCalorieCount/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getFridayCalorieCount = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals/fridayCalorieCount/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getSaturdayCalorieCount = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals/saturdayCalorieCount/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getSundayCalorieCount = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals/sundayCalorieCount/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getLastMonthsCalorieCount = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals/lastMonthsCalorieCount/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getThisMonthsCalorieCount = (UserId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals/thisMonthsCalorieCount/${UserId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});


const addMeal = (newMeal) => axios.post(`${baseUrl}/meals`, newMeal);


export default {
  GetUserMeal,
  addMeal,
  getMondayCalorieCount,
  getTuesdayCalorieCount,
  getWednesdayCalorieCount,
  getThursdayCalorieCount,
  getFridayCalorieCount,
  getSaturdayCalorieCount,
  getSundayCalorieCount,
  getLastMonthsCalorieCount,
  getThisMonthsCalorieCount
}