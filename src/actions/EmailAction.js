import * as Constants from "./ActionTypes";

export const setEmailData = action => {
  return {
    type: Constants.SET_EMAIL,
    ...action
  };
};
