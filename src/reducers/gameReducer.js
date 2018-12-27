import {
  CREATE_TIMELINE
} from '../actions/types';

const initialState = {
  timeline: null,
  gameView: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_TIMELINE:
      return {
        ...state,
        timeline: action.payload,
        gameView: true
      };
    
    default:
      return state;
  }
}