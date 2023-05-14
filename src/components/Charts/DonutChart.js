import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import transformDataForPie from "../../utils/transformDataForPie";

function DonutChart({ chartData }) {
  const [labels, data] = transformDataForPie(chartData.datasets[0].data);

  chartData.labels = labels;
  chartData.datasets[0].data = data;

  return (
    <Doughnut
      data={chartData}
      options={{ maintainAspectRatio: false, responsive: true }}
    />
  );
}

export default DonutChart;
