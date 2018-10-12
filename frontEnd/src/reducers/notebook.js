const initialState = 0;
export default function(state = initialState, action) {
  switch (action.type) {
    case "NOTEBOOK_NEXT":
      return state + 1 > 6 ? state : state + 1;

    case "NOTEBOOK_PREV":
      return state - 1 < 0 ? state : state - 1;

    case "NOTEBOOK_MOVE":
      return action.page;

    default:
      return state;
  }
}
