import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./containers/App";
import Hero from "./containers/hero/Hero";

import "./index.scss";

render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/hero/:id" component={Hero} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
