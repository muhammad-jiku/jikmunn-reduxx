const redux = require('redux');
const createStore = redux.createStore;

// middleware
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

//  defining intialState
const initialState = {
  loading: false,
  users: [],
  error: '',
};

//  defing actions type
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// action based on types
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users, // payload is used for set to argument
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state, // spread operator copies the previous state
        loading: true,
      };
    }
    case FETCH_USERS_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    }
    case FETCH_USERS_FAILURE: {
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    }
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res);
        const users = res.data.map((user) => user?.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchUsersFailure(err.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
