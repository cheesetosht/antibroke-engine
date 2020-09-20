import React, { createContext, useReducer } from "react";

// Initial State

const initialState = {
  transactions: [
    { id: 1, title: "Fees", caption: "School" },
    { id: 2, title: "Food", caption: "Restaurant" },
    { id: 3, title: "Fees", caption: "School" },
  ],
};
