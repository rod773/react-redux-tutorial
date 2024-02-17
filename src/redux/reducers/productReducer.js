import { ActionTypes } from "./../constants/actionTypes";

const initialStatae = {
  products: [
    {
      id: 1,
      title: "rod",
      catagory: "programmer",
    },
  ],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      break;
  }
};
