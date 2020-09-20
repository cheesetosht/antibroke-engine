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
  return (
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
  );
}
