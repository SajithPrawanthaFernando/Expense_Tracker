import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import ExpenseForm from "./ExpenseForm";
import IncomeItem from "./IncomeItem";

const Expenses = () => {
  const { addExpense, expenses, getExpense, deleteExpense, totalExpense } =
    useContext(GlobalContext);

  useEffect(() => {
    getExpense();
  }, []);

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>
      <h2 className="text-xl mb-4 text-red-500">
        Total Expense: <span className="font-semibold">${totalExpense()}</span>
      </h2>

      <div className="flex">
        <div className="w-2/4">
          <ExpenseForm />
        </div>

        <div className="w-2/4">
          {expenses.map((expense) => (
            <IncomeItem
              key={expense._id}
              id={expense._id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              type={expense.type}
              category={expense.category}
              description={expense.description}
              deleteItem={deleteExpense}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
