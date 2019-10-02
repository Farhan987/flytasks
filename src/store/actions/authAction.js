import { LOAD_CURRENT_USER } from "./types";

export const loadUser = l_user => {
  const state = {
    type: LOAD_CURRENT_USER,
    payload: l_user
  };
  dispatch(state);
};
