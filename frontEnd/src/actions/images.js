//@flow
"use-strict";
export const IMPORT_IMAGES = "IMPORT_IMAGES";

export function importImages(images) {
  return {
    type: IMPORT_IMAGES,
    images
  };
}
