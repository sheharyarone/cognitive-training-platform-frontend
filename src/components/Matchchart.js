import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ChartComponent = (props) => {
  const arraylength = props.flips.length;
  const data = {
    labels: Array.from({ length: arraylength }, (_, index) =>
      (index + 1).toString()
    ),
    datasets: [
      {
        label: "Time",
        data: props.times,
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Flips",
        data: props.flips,
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar className="bg-dark rounded p-3" data={data} options={options} />;
};

export default ChartComponent;
