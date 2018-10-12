"use-strict";
export const CHANGE_VERSION = "CHANGE_VERSION";

export function changeVersion(id, version) {
  return {
    type: CHANGE_VERSION,
    id,
    version
  };
}
