const initialStateCake = {
  numberOfCakes: 99,
};

const initialStateIceCream = {
  numberOfIceCreams: 49,
};

export const reducerCake = (state = initialStateCake, action) => {
  switch (action.type) {
    case 'CAKE_ORDER':
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.quantity,
      };
    case 'CAKE_RESTOCK':
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.quantity,
      };
    default:
      return state;
  }
};

export const reducerIceCream = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case 'ICECREAM_ORDER':
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    case 'ICECREAM_RESTOCK':
      return {
        ...state,
        numberOfCakes: state.numberOfIceCreams + 20,
      };
    default:
      return state;
  }
};
