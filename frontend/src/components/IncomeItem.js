import React from "react";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  dollar,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../utils/Icons";
import { dateFormat } from "../utils/dateFormat";

const IncomeItem = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  type,
}) => {
  const getIncomeCategoryIcon = (category) => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return null;
    }
  };

  const getExpenseCategoryIcon = (category) => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return null;
    }
  };

  const categoryIcon =
    type === "expense"
      ? getExpenseCategoryIcon(category)
      : getIncomeCategoryIcon(category);

  return (
    <div className="flex items-center bg-gray-700 border-gray-900 p-5 mb-4 rounded-xl text-white">
      <div className="flex items-center">
        {categoryIcon && <div className="mr-4 text-3xl">{categoryIcon}</div>}
        <div>
          <h5 className="font-bold">{title}</h5>
          <span className="text-gray-400 text-sm">{category}</span>
        </div>
      </div>
      <div className="ml-auto flex items-center">
        <div className="mr-6">
          <p className="flex items-center">
            {dollar}
            <span className="ml-1">{amount}</span>
          </p>
          <p className="flex items-center">
            {calender}
            <span className="ml-1">{dateFormat(date)}</span>
          </p>
          <p className="flex items-center">
            {comment}
            <span className="ml-1">{description}</span>
          </p>
        </div>
        <button
          className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => deleteItem(id)}
        >
          {trash} Delete
        </button>
      </div>
    </div>
  );
};

export default IncomeItem;
