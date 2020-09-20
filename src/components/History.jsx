import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function History() {
  const { deleteTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <ul className="list">
        {transactions.map((transactions) => (
          <li className={transactions.amount < 0 ? "minus" : "plus"}>
            <div className="flexContainer">
              <div>
                {transactions.title}
                <p>{transactions.caption}</p>
              </div>
              <div>
                <button
                  onClick={() => deleteTransaction(transactions.id)}
                  className="delete-btn"
                >
                  <svg
                    height="512pt"
                    viewBox="0 0 512 512"
                    width="512pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm0 0"
                      fill="#f44336"
                    />
                    <path
                      d="M350.273 320.105c8.34 8.344 8.34 21.825 0 30.168a21.275 21.275 0 01-15.086 6.25c-5.46 0-10.921-2.09-15.082-6.25L256 286.164l-64.105 64.11a21.273 21.273 0 01-15.083 6.25 21.275 21.275 0 01-15.085-6.25c-8.34-8.344-8.34-21.825 0-30.169L225.836 256l-64.11-64.105c-8.34-8.344-8.34-21.825 0-30.168 8.344-8.34 21.825-8.34 30.169 0L256 225.836l64.105-64.11c8.344-8.34 21.825-8.34 30.168 0 8.34 8.344 8.34 21.825 0 30.169L286.164 256zm0 0"
                      fill="#fafafa"
                    />
                  </svg>
                </button>
                <h3>Rs.{Math.abs(transactions.amount)}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
