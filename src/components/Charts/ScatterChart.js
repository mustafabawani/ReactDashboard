import React, { useEffect } from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function ScatterChart({ chartData }) {
  return (
    <Scatter
      data={chartData}
      // height="100%"
      width="80%"
      options={{ maintainAspectRatio: false, responsive: true }}
    />
  );
}

export default ScatterChart;
