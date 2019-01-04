import axios from 'axios';

import {
  CREATE_TIMELINE,
  GEN_RANDOM_CARD,
  ADD_ANSWER
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
          activeCard: generateRandomCard(res.data),
          answeredCards: [ generateRandomCard(res.data), generateRandomCard(res.data) ]
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

export const addAnswer = (card, cardStack) => {
  return {
    type: ADD_ANSWER, 
    payload: {
      activeCard: generateRandomCard(cardStack),
      answeredCard: card
    }
  }
}

const generateRandomCard = (cardStack) => {
  return cardStack[Math.floor(Math.random() * cardStack.length)]
}
