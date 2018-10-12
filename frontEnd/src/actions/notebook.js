"use-strict";
export const NOTEBOOK_NEXT = "NOTEBOOK_NEXT";
export const NOTEBOOK_PREV = "NOTEBOOK_PREV";
export const NOTEBOOK_MOVE = "NOTEBOOK_MOVE";
export function notebookNext() {
  return {
    type: NOTEBOOK_NEXT
  };
}

export function notebookPrev() {
  return {
    type: NOTEBOOK_PREV
  };
}

export function notebookMove(page) {
  return {
    type: NOTEBOOK_MOVE,
    page
  };
}
