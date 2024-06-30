import React, { useContext } from "react";
import { dateFormat } from "../utils/dateFormat";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { GlobalContext } from "../context/globalContext";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { incomes, expenses } = useContext(GlobalContext);

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: incomes.map((income) => income.amount),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "green",
        borderWidth: 1,
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: expenses.map((expense) => expense.amount),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "red",
        borderWidth: 1,
        tension: 0.2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default Chart;
