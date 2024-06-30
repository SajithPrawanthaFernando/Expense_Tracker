import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../context/globalContext";
import { plus } from "../utils/Icons";

const Form = () => {
  const { addIncome, getIncome } = useContext(GlobalContext);

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
      alert("Salary amount must be a number.");
      return;
    }

    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });

    getIncome();
  };

  return (
    <div className="flex flex-col bg-gray-800 rounded-xl p-6 w-[500px] text-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="title">
            Salary Title
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="title"
            type="text"
            placeholder="Salary Title"
            value={title}
            onChange={handleInput("title")}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="amount">
            Salary Amount
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="amount"
            type="text"
            placeholder="Salary Amount"
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
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="category"
            required
            value={category}
            onChange={handleInput("category")}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investments</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank Transfer</option>
            <option value="youtube">Youtube</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            {plus} Add Income
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
