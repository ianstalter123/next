import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

/**
 |--------------------------------------------------
 | Types
 |--------------------------------------------------
 */
export const ITEM_LIST_GET_SUCCESS = 'ITEM_LIST_GET_SUCCESS';
export const ITEM_LIST_GET_REQUEST = 'ITEM_LIST_GET_REQUEST';
export const ITEM_LIST_GET_FAILURE = 'ITEM_LIST_GET_FAILURE';

/**
 |--------------------------------------------------
 | Actions
 |--------------------------------------------------
 */

export const getItemList = () => {
  return (dispatch) => {
    dispatch({ type: ITEM_LIST_GET_REQUEST });
    firebase.database().ref(`/allItems`)
      .once('value', (snapshot) => {
        dispatch({ type: ITEM_LIST_GET_SUCCESS, payload: snapshot.val() });
      });
  };
};

/**
 |--------------------------------------------------
 | Reducer
 |--------------------------------------------------
 */
const INITIAL_STATE = {
  list: [],
  error: '',
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEM_LIST_GET_REQUEST:
    console.log('item list get request');
      return { ...state, loading: true };
    case ITEM_LIST_GET_SUCCESS:
    console.log('items are received');
    const { items } = action.payload;
      return {  ...state, ...INITIAL_STATE, list: action.payload };
    case ITEM_LIST_GET_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
