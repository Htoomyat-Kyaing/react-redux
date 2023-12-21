import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
  icecreamCount: 20,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        icecreamCount: state.icecreamCount - 1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
