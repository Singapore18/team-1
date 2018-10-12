"use-strict";
export const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";

export function toggleCheckbox(id) {
  return {
    type: TOGGLE_CHECKBOX,
    id
  };
}
