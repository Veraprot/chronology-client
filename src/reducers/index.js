import { combineReducers } from 'redux';

import profileReducer from './profileReducer';
// import authReducer from './authReducer';
// import errorReducer from './errorReducer';
// import postReducer from './postReducer';

// export default combineReducers({
//   auth: authReducer,
//   errors: errorReducer,
//   profile: profileReducer,
//   post: postReducer
// });

export default combineReducers({
  profile: profileReducer
})
