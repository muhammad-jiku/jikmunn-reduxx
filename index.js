//  actions
const BUY_JERSEY = 'BUY_JERSEY';

// TO IMPLEMENT ACTIONS,  NEEDS TO CREATE ACTION CREATOR: FUNCTION

function buyJersey() {
  return {
    type: BUY_JERSEY,
    info: 'First redux action to buy jersey',
  };
}

// reducers are basically used for changing states of application based on action. So here is the demo:

const initialState = { numOfJersies: 500 };

const reducersForJersey = (state = initialState, action) => {
  switch (action.type) {
    case BUY_JERSEY:
      return {
        ...state, // here spread operator copying state values
        numOfJersies: state.numOfJersies - 3,
      };
    default:
      return state;
  }
};
