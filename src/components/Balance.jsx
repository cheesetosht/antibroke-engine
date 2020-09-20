import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  const balance = income - expense;
  return (
    <>
      <div className="mainData">
        <h5>YOUR BALANCE</h5>
        <h1 style={{ color: balance > 0 ? "#2196f3" : "#ff5722" }}>
          {balance}
        </h1>
      </div>
      <div className="balance">
        <div>
          <h5>INCOME</h5>
          <h2 id="in">{income} </h2>
        </div>
        <div>
          <h5>EXPENSE</h5>
          <h2 id="out">{expense}</h2>
        </div>
      </div>
    </>
  );
}
