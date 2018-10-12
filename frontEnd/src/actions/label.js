"use-strict";
export const LABEL = "LABEL";

export function label(id, label) {
  return {
    type: LABEL,
    id,
    label
  };
}
