import React, { useState } from "react";

export default function Form() {
  const [caption, setCaption] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  return (
    <form className="info" action="">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Transaction Title"
        type="text"
      />
      <select>
        <option value="1" selected>
          Essentials
        </option>
        <option value="2">Leisure</option>
        <option value="3">Emergency</option>
        <option value="4">Others</option>
      </select>
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Transaction Title"
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
