import { combineReducers } from "redux";

import load_reducer from "./load_reducer";
import delete_reducer from "./delete_reducer";
import submit_reducer from "./submit_reducer";
import update_reducer from "./update_reducer";

export default combineReducers({
  load_reducer,
  delete_reducer,
  submit_reducer,
  update_reducer
});
