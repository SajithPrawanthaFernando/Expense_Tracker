import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import Form from "./Form";
import IncomeItem from "./IncomeItem";

const Incomes = () => {
  const { addIncome, incomes, getIncome, deleteIncome, totalIncome } =
    useContext(GlobalContext);

  useEffect(() => {
    getIncome();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Incomes</h1>
      <h2 className="text-xl mb-4 text-green-500">
        Total Income:{" "}
        <span className="font-semibold ">${totalIncome(totalIncome)}</span>
      </h2>

      <div className="flex ">
        <div className="w-2/4">
          <Form />
        </div>

        <div className="w-2/4">
          {incomes.map((income) => (
            <IncomeItem
              key={income._id}
              id={income._id}
              title={income.title}
              amount={income.amount}
              date={income.date}
              type={income.type}
              category={income.category}
              description={income.description}
              deleteItem={deleteIncome}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incomes;
