"use-strict";
export const LABEL_SET = "LABEL_SET";

export function newLabelSet(labels) {
  return {
    type: LABEL_SET,
    labels
  };
}
