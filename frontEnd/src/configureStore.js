"use strict";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";

// import { logger } from "redux-logger";

const middlewares = [];
// middlewares.push(logger);

var createMFStore = applyMiddleware(...middlewares)(createStore);

export default function configureStore() {
  const store = createMFStore(reducers);

  return store;
}
