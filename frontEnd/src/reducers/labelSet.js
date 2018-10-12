const initialState = {
  0: "None",
  1: "Alzheimer",
  2: "Parkinson",
  3: "Healthy"
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "LABEL_SET":
      return action.labels;
    default:
      return state;
  }
}
