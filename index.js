//  actions
const BUY_JERSEY = 'BUY_JERSEY';

// TO IMPLEMENT ACTIONS,  NEEDS TO CREATE ACTION CREATOR: FUNCTION

function buyJersey() {
  return {
    type: BUY_JERSEY,
    info: 'First redux action to buy jersey',
  };
}
