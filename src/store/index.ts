import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import reducer from "./reducer";

export * from "./actions";
export * from "./interfaces";
// export type Reducer = ReturnType<typeof reducer>;

function configureStore(initialState = {}) {
  const store = createStore(reducer, initialState, devToolsEnhancer({}));
  return store;
}

export default configureStore;
export { reducer };
