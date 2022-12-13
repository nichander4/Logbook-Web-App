// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createWrapper } from "next-redux-wrapper";
// import rootReducer from "redux/reducers";
// import { loadState, saveState } from "helpers/utils";

// const middleware = [thunk];

// const persistedState = loadState();

// export const store = createStore(
//   rootReducer,
//   persistedState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// store.subscribe(() => {
//   saveState({ auth: store.getState().auth });
// });

// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

// initial states here

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
