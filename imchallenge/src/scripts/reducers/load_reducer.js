import { LOAD_MOVIES } from "../actions/load_action";

export default function load_reducer(state, action) {
  if (state === undefined) {
    return {
      movies: null
    };
  }

  switch (action.type) {
    case "TEST_REDUCER":
      // DELETE OR CHANGE ME: I AM JUST AN EXAMPLE
      return Object.assign({}, state, { newData: action.data });

    case "LOAD_MOVIES":
      return Object.assign({}, state, {
        movies: action.data
      });
  }

  console.log("Unhandled State!");
  return state;
}
