const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_RESTOCK = 'CAKE_RESTOCK';

export const orderCake = (payload: number) => {
  return {
    type: CAKE_ORDER,
    quantity: payload,
  };
};

export const restockCake = (payload: number) => {
  return {
    type: CAKE_RESTOCK,
    quantity: payload,
  };
};

export const orderIceCream = () => {
  return {
    type: 'ICECREAM_ORDER',
    payload: 1,
  };
};

export const restockIceCream = () => {
  return {
    type: 'ICECREAM_RESTOCK',
    payload: 20,
  };
};
