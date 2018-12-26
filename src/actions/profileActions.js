import axios from 'axios';

import {
  ADD_PROFILE,
} from './types';


export const addProfile = (username) => {
  return {
    type: ADD_PROFILE,
    payload: {
      username
    }
  }
}