import images from "variables/images";

const initialState = {};
for (let i = 0; i < images.length; i++) initialState[i] = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_CHECKBOX":
      return {
        ...state,
        [action.id]: !state[action.id]
      };
    default:
      return state;
  }
}
