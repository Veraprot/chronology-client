import {
  CREATE_TIMELINE,
  GEN_RANDOM_CARD,
  ADD_ANSWER
} from '../actions/types';

const initialState = {
  timeline: null,
  cards: null,
  activeCard: null,
  answeredCards: [],
  gameView: false
};

export default function(state = initialState, action) {
  console.log('store state', state)
  switch (action.type) {
    case CREATE_TIMELINE:
      return {
        ...state,
        timeline: action.payload.timeline,
        cards: action.payload.cards,
        activeCard: action.payload.activeCard,
        answeredCards: action.payload.answeredCards,
        gameView: true
      };
    case GEN_RANDOM_CARD:
      return {
        ...state,
        activeCard: action.payload.activeCard,
      };

    case ADD_ANSWER:
      return {
        ...state, 
        activeCard: action.payload.activeCard,
        answeredCards: [...state.answeredCards, action.payload.answeredCard]
      }
    
    default:
      return state;
  }
}
