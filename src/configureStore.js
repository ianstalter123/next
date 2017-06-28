import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import auth from './modules/auth';
import post from './modules/post';
import item from './modules/item';
import wallet from './modules/wallet';

const reducers = combineReducers({
  auth,
  post,
  item,
  wallet,
  form: formReducer,
});

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default store;
