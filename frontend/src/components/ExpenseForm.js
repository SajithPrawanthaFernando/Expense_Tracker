import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../context/globalContext";
import { plus } from "../utils/Icons";

const ExpenseForm = () => {
  const { addExpense, getExpense } = useContext(GlobalContext);

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date || !category || !description) {
      alert("All fields are required.");
      return;
    }

    if (isNaN(amount)) {
      alert("Expense amount must be a number.");
      return;
    }

    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });

    getExpense();
  };

  return (
    <div className="flex flex-col bg-gray-800 rounded-xl p-6 w-[500px] text-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="title">
            Expense Title
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            id="title"
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={handleInput("title")}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="amount">
            Expense Amount
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            id="amount"
            type="text"
            placeholder="Expense Amount"
            value={amount}
            onChange={handleInput("amount")}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="date">
            Date
          </label>
          <DatePicker
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            id="date"
            placeholderText="Enter A Date"
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              setInputState({ ...inputState, date: date });
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="category">
            Category
          </label>
          <select
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            id="category"
            required
            value={category}
            onChange={handleInput("category")}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>
            <option value="travelling">Travelling</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            id="description"
            placeholder="Add A Reference"
            value={description}
            onChange={handleInput("description")}
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <button
            className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-500 disabled:opacity-25 transition"
            type="submit"
          >
            {plus} Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
