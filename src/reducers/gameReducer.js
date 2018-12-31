import {
  CREATE_TIMELINE,
  GEN_RANDOM_CARD
} from '../actions/types';

const initialState = {
  timeline: null,
  cards: null,
  activeCard: null,
  answeredCards: null,
  gameView: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_TIMELINE:
      return {
        ...state,
        timeline: action.payload.timeline,
        cards: action.payload.cards,
        activeCard: action.payload.activeCard,
        gameView: true
      };
    case GEN_RANDOM_CARD:
      return {
        ...state,
        activeCard: action.payload.activeCard,
      };
    
    default:
      return state;
  }
}