import axios from 'axios';

import {
  GET_PROFILE,
  GET_ERRORS
} from './types';


const baseUrl = 'http://localhost:3001/api/v1/'

export const getProfile = (username) => {
  return {
    type: GET_PROFILE,
    payload: {
      username
    }
  }
}

export const getProfileById = id => dispatch => {
  axios
    .get(`${baseUrl}/users/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};

export const createProfile = (username, history) => dispatch => {
  console.log(username)
  let body = JSON.stringify({user: {username}})
  axios
    .post(
      `${baseUrl}/users`, 
      body,
      {
      headers: {
        'Content-Type': 'application/json',
      }
  })
    .then(res => history.push('/game'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};