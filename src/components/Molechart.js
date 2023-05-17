import React from 'react';
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Data',
        data: [10, 20, 15, 25, 30, 22],
        fill: false,
        pointStyle: 'circle',
        borderColor: 'blue',
        backgroundColor: 'white',
      },
    ],
  };

  return <Line className='bg-dark rounded p-3' data={data} />;
};

export default LineChart;
