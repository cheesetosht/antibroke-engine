import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Form() {
  const { addTransaction } = useContext(GlobalContext);

  const [caption, setCaption] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");

  const addT = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      title,
      amount: +amount,
      caption,
    };

    addTransaction(newTransaction);
  };
  return (
    <form className="info" onSubmit={addT}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Transaction Title"
        type="text"
      />

      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Transaction Amount"
        type="number"
      />
      <p>Expense: -ve | Income: +ve</p>
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Captions"
      ></textarea>
      <button type="submit">Add Transaction</button>
    </form>
  );
}
