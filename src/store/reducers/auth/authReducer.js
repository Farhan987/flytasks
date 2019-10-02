import { LOAD_CURRENT_USER } from "../../actions/types";
import MyUser from "../../../businessLogic/MyUser";

const state = {
  currentUser: new MyUser(Math.random(1, 100), "")
};

function AuthReducer(mState = { ...state }, action) {
  switch (action.type) {
    case LOAD_CURRENT_USER:
      return clone(mState);

    default:
      return clone(mState);
  }
}

const clone = obj => {
  return JSON.parse(JSON.stringify(obj));
};

export default AuthReducer;
