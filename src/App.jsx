import React, { Component } from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import History from "./components/History";
import Form from "./components/Form";
import Balance from "./components/Balance";

import { GlobalProvider } from "./context/GlobalState";
import "./scss/App.scss";

export default class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <div className="container">
          <Header />
          <div className="mainData">
            <h5>YOUR BALANCE</h5>
            <h1>0</h1>
          </div>
          <Balance />
          <Router>
            <div className="flexContainer">
              <div>
                <h3>History</h3>
                <h5>Current Month</h5>
              </div>
              <div>
                <NavLink to="/history">
                  <button className="opt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 448"
                    >
                      <path d="M234.667 138.667v106.666l91.306 54.187 15.36-25.92-74.666-44.267v-90.666z" />
                      <path d="M255.893 32C149.76 32 64 117.973 64 224H0l83.093 83.093 1.493 3.093L170.667 224h-64c0-82.453 66.88-149.333 149.333-149.333S405.333 141.547 405.333 224 338.453 373.333 256 373.333c-41.28 0-78.507-16.853-105.493-43.84L120.32 359.68C154.987 394.453 202.88 416 255.893 416 362.027 416 448 330.027 448 224S362.027 32 255.893 32z" />
                    </svg>{" "}
                  </button>
                </NavLink>
                <NavLink to="/add-transaction">
                  <button className="opt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </button>
                </NavLink>
              </div>
            </div>
            <Switch>
              <Route path="/add-transaction" component={Form} />
              <Route path="/history" component={History} />
            </Switch>
          </Router>
        </div>
      </GlobalProvider>
    );
  }
}
