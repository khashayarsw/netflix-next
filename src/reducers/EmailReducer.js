import * as Constants from "../actions/ActionTypes";

const initState = {
  emailData: ""
};

export const Email = (state = initState, action) => {
  switch (action.type) {
    case Constants.SET_EMAIL:
      return { ...state, emailData: action.emailData };

    default:
      return state;
  }
};
