import images from "variables/images";

const initialState = {};
for (let i = 0; i < images.length; i++) initialState[i] = 0;

export default function(state = initialState, action) {
  switch (action.type) {
    case "LABEL":
      return {
        ...state,
        [action.id]: action.label
      };
    default:
      return state;
  }
}
