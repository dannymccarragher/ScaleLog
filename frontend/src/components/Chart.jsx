import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ dataPoints }) => {
  
  const labels = dataPoints.map(point => new Date(point.date).toLocaleDateString());
  const dataValues = dataPoints.map(point => point.value);

  const data = {
    labels,
    datasets: [
      {
        label: 'Weight',
        data: dataValues,
        fill: false,
        borderColor: '#4a90e2',
        backgroundColor: '#4a90e2',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weight Progress Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Weight (lbs)',
        },
        beginAtZero: false,
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default Chart;
