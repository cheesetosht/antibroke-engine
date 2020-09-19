import React from "react";

export default function Form() {
  return (
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
  );
}
