import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function History() {
  const { transactionHistory } = useContext(GlobalContext);
  const [...history] = transactionHistory();

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div
            key={_id}
            className="flex justify-between mb-2 p-2 bg-gray-700 rounded-lg shadow"
          >
            <p
              className={`font-medium ${
                type === "expense" ? "text-red-500" : "text-green-500"
              }`}
            >
              {title}
            </p>
            <p
              className={`font-medium ${
                type === "expense" ? "text-red-500" : "text-green-500"
              }`}
            >
              {type === "expense"
                ? `-${amount <= 0 ? 0 : amount}`
                : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default History;
