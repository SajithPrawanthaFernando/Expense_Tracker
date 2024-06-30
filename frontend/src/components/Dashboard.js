import React, { useEffect, useContext } from "react";
import Chart from "./Chart";
import History from "./History";
import { dollar } from "../utils/Icons";
import { GlobalContext } from "../context/globalContext";

const Dashboard = () => {
  const {
    totalExpense,
    totalIncome,
    incomes,
    expenses,
    getIncome,
    getExpense,
  } = useContext(GlobalContext);

  useEffect(() => {
    getIncome();
    getExpense();
  }, []);

  const balance = totalIncome(totalIncome) - totalExpense(totalExpense);

  const minIncome =
    incomes.length > 0 ? Math.min(...incomes.map((item) => item.amount)) : 0;
  const maxIncome =
    incomes.length > 0 ? Math.max(...incomes.map((item) => item.amount)) : 0;

  const minExpense =
    expenses.length > 0 ? Math.min(...expenses.map((item) => item.amount)) : 0;
  const maxExpense =
    expenses.length > 0 ? Math.max(...expenses.map((item) => item.amount)) : 0;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Transactions</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-700 p-4 shadow rounded-lg">
          <h2>Total Income</h2>
          <p className="text-2xl">
            {dollar}
            {totalIncome(totalIncome)}
          </p>
        </div>

        <div className="bg-gray-700 p-4 shadow rounded-lg">
          <h2>Total Expense</h2>
          <p className="text-2xl">
            {dollar}
            {totalExpense(totalExpense)}
          </p>
        </div>

        <div className="bg-gray-700 p-4 shadow rounded-lg">
          <h2>Total Balance</h2>
          <p className="text-2xl text-green-500">
            {dollar}
            {balance}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-700 p-4 shadow rounded-lg">
          <Chart />
        </div>

        <div className="bg-gray-800 p-4 ">
          <History />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div>
          <h2 className="mb-3 flex justify-between items-baseline">
            Min <span className="text-xl">Salary</span> Max
          </h2>
          <div className="bg-gray-700 p-4 shadow rounded-lg flex justify-between">
            <p>{minIncome}</p>
            <p>{maxIncome}</p>
          </div>
        </div>

        <div>
          <h2 className="mb-3 flex justify-between items-baseline">
            Min <span className="text-xl">Expense</span> Max
          </h2>
          <div className="bg-gray-700 p-4 shadow rounded-lg flex justify-between">
            <p>{minExpense}</p>
            <p>{maxExpense}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
