import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  console.log("yes");
  return (
    <Bar
      data={chartData}
      height="100%"
      options={{ maintainAspectRatio: false, responsive: true }}
      width="80%"
      // width="40%"
    />
  );
}

export default BarChart;
