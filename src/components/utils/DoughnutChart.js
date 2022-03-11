import React, { useRef } from 'react';
import {
  Doughnut,
  getDatasetAtEvent,
  getElementAtEvent,
} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function DoghnutChart({ chartData }) {
  const chartRef = useRef();

  const onClick = (e) => {
    console.log(getElementAtEvent(chartRef.current, e));
  };

  return (
    <Doughnut
      ref={chartRef}
      onClick={onClick}
      data={chartData}
      options={{ maintainAspectRatio: false }}
    />
  );
}

export default DoghnutChart;
