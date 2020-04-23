import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      return {
        ...state,
        ...action.payload
      }

    case 'SHOW_SPECIFIC_EVENT': 
    return {
      ...state,
      ...action.payload
    }
    default:
      return state;
  }
};

export default rootReducer;