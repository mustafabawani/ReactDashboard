import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, setGraph }) {
  // useEffect(() => {
  //   setGraph(false);
  // }, []);
  console.log(chartData)
  return (
    <Line
      data={chartData}
      // height="100%"
      // width="80%"
      options={{ maintainAspectRatio: false, responsive: true }}
    />
  );
}

export default LineChart;
