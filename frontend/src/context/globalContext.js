import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/expense/";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });

    getIncome();
  };

  const getIncome = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-incomes`);
      setIncomes(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncome();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });
    return totalIncome;
  };

  const addExpense = async (expense) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, expense)
      .catch((err) => {
        setError(err.response.data.message);
      });

    getIncome();
  };

  const getExpense = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-expenses`);
      setExpenses(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpense();
  };

  const totalExpense = () => {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense = totalExpense + expense.amount;
    });
    return totalExpense;
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createAt) - new Date(a.createAt);
    });

    return history.slice(0, 4);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncome,
        incomes,
        expenses,
        deleteIncome,
        totalIncome,
        addExpense,
        getExpense,
        deleteExpense,
        totalExpense,
        transactionHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
