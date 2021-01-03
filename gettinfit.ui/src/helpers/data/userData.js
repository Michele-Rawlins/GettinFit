import axios from 'axios';
import {baseUrl} from './constants.json';

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Users`)
    .then(response => resolve(response.data))
    .catch(reject);
});


// change to ${userId}
const getUserByEmail = (email) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Users/${email}/authedUser`)
  .then(response => resolve(response.data))
  .catch(reject)
})

const getSingleUser = (userId) => axios.get(`${baseUrl}/users/${userId}`);

const getUserWeightGoal = (userId) => axios.get(`${baseUrl}/users/${userId}`);
const getUserCurrentWeight = (userId) => axios.get(`${baseUrl}/users/${userId}`);
const getUserBeginningWeight = (userId) => axios.get(`${baseUrl}/users/${userId}`);

const updateUser = (userId, updatedUser) => axios.put(`${baseUrl}/users/${userId}`, updatedUser);


export default {
  getAllUsers, 
  getUserByEmail,
  getSingleUser,
  updateUser,
  getUserWeightGoal,
  getUserCurrentWeight,
  getUserBeginningWeight
};