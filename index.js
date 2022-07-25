const redux = require('redux');
const createStore = redux.createStore;

//  actions
const BUY_JERSEY = 'BUY_JERSEY';
const BUY_KIT = 'BUY_KIT';

// TO IMPLEMENT ACTIONS,  NEEDS TO CREATE ACTION CREATOR: FUNCTION

function buyJersey() {
  return {
    type: BUY_JERSEY,
    info: 'First redux action to buy jersey',
  };
}
function buyKit() {
  return {
    type: BUY_KIT,
    info: 'First redux action to buy kit',
  };
}

// reducers are basically used for changing states of application based on action. So here is the demo:
// (previousStare, action) => newState | this is the structure

const initialJersyState = { numOfJersies: 500 };
const initialKitState = { numOfKits: 800 };

const reducersForJersey = (state = initialJersyState, action) => {
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

const reducersForKit = (state = initialKitState, action) => {
  switch (action.type) {
    case BUY_KIT:
      return {
        ...state, // here spread operator copying state values
        numOfKits: state.numOfKits - 6,
      };
    default:
      return state;
  }
};

// store for redux:
// 1. holds application states
// 2. allows acces to get the states by getState()
// 3. allows to update the states via dispatch method: dispatch(action)
// 4. registes listener by subscribe method: subscribe(listener)
// 5. handles unregistering of listeners by function returned by the subscribe method: subscribe(listener)
// here is the demo

const store = createStore(reducersForJersey); // 1st point :- here store holds state by accepting reducers

console.log('getting intialState', store.getState()); // 2nd point

store.subscribe(() => console.log('updated state', store.getState())); // 4th point

store.dispatch(buyJersey()); // 3rd point
store.dispatch(buyJersey()); // 3rd point
store.dispatch(buyJersey()); // 3rd point
store.dispatch(buyJersey()); // 3rd point
store.dispatch(buyKit()); // 3rd point
store.dispatch(buyKit()); // 3rd point
store.dispatch(buyKit()); // 3rd point

const unsubscribe = store.subscribe(() =>
  console.log('final updated state', store.getState())
); // 5th point
unsubscribe();
