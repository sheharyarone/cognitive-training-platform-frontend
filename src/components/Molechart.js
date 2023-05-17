import React from 'react';
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';

const LineChart = (props) => {
  const arraylength=props.scoresMole.length;
  const data = {
    labels: Array.from({ length: arraylength }, (_, index) => (index + 1).toString()),
    datasets: [
      {
        label: 'Score',
        data: props.scoresMole,
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
