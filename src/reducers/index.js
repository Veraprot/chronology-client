import { combineReducers } from 'redux';

import profileReducer from './profileReducer';
import gameReducer from './gameReducer';

export default combineReducers({
  profile: profileReducer,
  game: gameReducer
})
