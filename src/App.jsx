import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./components/Nav";
import "./scss/App.scss";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="mainData">
          <h5>YOUR BALANCE</h5>
          <h1>0</h1>
        </div>
        <div className="balance">
          <div>
            <h5>INCOME</h5>
            <h2 id="in">0</h2>
          </div>
          <div>
            <h5>EXPENSE</h5>
            <h2 id="out">0</h2>
          </div>
        </div>
        <div className="flexContainer">
          <div>
            <h3>History</h3>
            <h5>Current Month</h5>
          </div>
          <div>
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
            <button className="opt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            </button>
          </div>
        </div>
        <form className="info" action="">
          <input type="text" id="" placeholder="Transaction Title" />
          <select>
            <option value="1" selected>
              Essentials
            </option>
            <option value="2">Leisure</option>
            <option value="3">Emergency</option>
            <option value="4">Others</option>
          </select>
          <input type="number" id="" placeholder="Transaction Title" />
          <p>Expense: -ve | Income: +ve</p>
          <textarea placeholder="Captions"></textarea>
        </form>
      </div>
    );
  }
}
