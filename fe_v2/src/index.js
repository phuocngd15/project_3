// -- React and related libs
import React from "react";
import { render } from "react-dom";

// -- Redux
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
// -- App
import App from "./App";

// -- Service Worker
import * as serviceWorker from "./serviceWorker";

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ReduxThunk)
});

// -- Rendering Application
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
