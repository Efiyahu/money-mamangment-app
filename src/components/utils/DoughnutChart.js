import React, { useRef } from 'react';
import { getElementAtEvent } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoghnutChart({ chartData }) {
  const chartRef = useRef();

  const onClick = (e) => {
    getElementAtEvent(chartRef.current, e);
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
