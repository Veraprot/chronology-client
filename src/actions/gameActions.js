import axios from 'axios';

import {
  CREATE_TIMELINE,
  GEN_RANDOM_CARD
} from './types';


const baseUrl = 'http://localhost:3001/api/v1'

export const createTimeline = (startDate, endDate) => dispatch => {
  let body = JSON.stringify({ game: {startDate, endDate}})
  axios
    .post(
      `${baseUrl}/games/timeline`, 
      body,
      {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      dispatch({
        type: CREATE_TIMELINE,
        payload: {
          timeline: {
            startDate, 
            endDate
          },
          cards: res.data,
          activeCard: generateRandomCard(res.data)
        }
      })
    })
    .catch(err => {
      console.log(err)
    });
}

export const setRandomCard = (cardStack) => {
  const randomCard = generateRandomCard(cardStack)
  return {
    type: GEN_RANDOM_CARD,
    payload: {
      activeCard: randomCard
    }
  }
}

const generateRandomCard = (cardStack) => {
  return cardStack[Math.floor(Math.random() * cardStack.length)]
}
