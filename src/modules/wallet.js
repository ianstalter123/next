import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

/**
 |--------------------------------------------------
 | Types
 |--------------------------------------------------
 */
export const WALLET_LIST_GET_SUCCESS = 'WALLET_LIST_GET_SUCCESS';
export const WALLET_LIST_GET_REQUEST = 'WALLET_LIST_GET_REQUEST';
export const WALLET_LIST_GET_FAILURE = 'WALLET_LIST_GET_FAILURE';

/**
 |--------------------------------------------------
 | Actions
 |--------------------------------------------------
 */

export const getWalletList = () => {
  return (dispatch) => {
    dispatch({ type: WALLET_LIST_GET_REQUEST });
    firebase.database().ref(`/wallets`)
      .once('value', (snapshot) => {
        dispatch({ type: WALLET_LIST_GET_SUCCESS, payload: snapshot.val() });
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
    case WALLET_LIST_GET_REQUEST:
    console.log('wallet list get request');
      return { ...state, loading: true };
    case WALLET_LIST_GET_SUCCESS:
    console.log('wallets are received', action.payload);
    const { wallets } = action.payload;
      return {  ...state, ...INITIAL_STATE, list: action.payload };
    case WALLET_LIST_GET_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
