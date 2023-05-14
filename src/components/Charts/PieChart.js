import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import transformDataForPie from "../../utils/transformDataForPie";

function PieChart({ chartData }) {
  const [labels, data] = transformDataForPie(chartData.datasets[0].data);

  chartData.labels = labels;
  chartData.datasets[0].data = data;

  return (
    <Pie
      data={chartData}
      options={{ maintainAspectRatio: false, responsive: true }}
    />
  );
}

export default PieChart;
