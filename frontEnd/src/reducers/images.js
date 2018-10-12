//img
import images from "variables/images";

const initialState = {};
for (let i = 0; i < images.length; i++) initialState[i] = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case "IMPORT_IMAGES":
      return {
        ...state,
        ...action.images
      };

    default:
      return state;
  }
}
