"use strict";

const divideIntoChunk = (arr, chunkSize = 3) => {
  let res = [];
  while (arr.length > 0) res.push(arr.splice(0, chunkSize));
  return res;
};

module.exports = {
  divideIntoChunk
};
