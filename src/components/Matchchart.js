import React from 'react';
import Chart from "chart.js/auto";
import {Bar} from 'react-chartjs-2';


const ChartComponent = ({labelarray}) => {
  const data = {
      labels: labelarray,
      datasets: [
      {
          label: 'Time',
          data: [10, 8, 12, 6, 9],
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      {
          label: 'Moves',
        data: [6, 9, 4, 11, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
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

return <Bar className='bg-dark rounded p-3' data={data} options={options} />;
};

export default ChartComponent;