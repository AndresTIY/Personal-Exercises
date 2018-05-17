export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      runs: null
    };
  }

  switch (action.type) {
    case "LOAD_RUNS":
      return Object.assign({}, state, { runs: action.data });
  }

  console.log("Unhandled State!");
  return state;
}
