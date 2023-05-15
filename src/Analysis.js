import React, { useState } from 'react';
import styled from "styled-components";
import { parse } from 'papaparse';
import FileInput from './components/FileInput';
import { Button, Tooltip, TextField, MenuItem } from '@mui/material';
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import ShowChart from "@mui/icons-material/ShowChart";
import Input from './components/Input';
import BarChart from './components/Charts/BarChart';
import LineChart from './components/Charts/LineGraph';
import DeleteIcon from '@mui/icons-material/Delete';
import PieChart from './components/Charts/PieChart';

const Container = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const LeftBar = styled.div`
  background: white;
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const RightBar = styled.div`
  background: #00001a;
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const RightBar1 = styled.div`
  background: #00001a;
  width: 20vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
`;

const RightBar2 = styled.div`
  background: #00001a;
  width: 20vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
`;

const RightBar3 = styled.div`
  background: #00001a;
  width: 20vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

const ChartWrapper = styled.div`
  width: 45%;
  height: 300px;
  margin-bottom: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  padding: 10px;
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;

  &:hover .deleteButton {
    opacity: 1;
  }
`;

const DeleteButton = styled(DeleteIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
`;

const Analysis = () => {
  const [dataColumn, setDataColumn] = useState([]);
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState('Bar');
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const [charts, setCharts] = useState([]);

  const handleFileChange = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const csvData = e.target.result;
      const parsedData = parse(csvData, { header: true });
      const columns = parsedData.meta.fields;
      const dataRows = parsedData.data;
      setDataColumn(columns);
      setData(dataRows);
    };

    reader.readAsText(file);
  };

  const formatDataForCharts = (data,
    xAxis, yAxis) => {
      let dataForX = [];
      let dataForY = [];
      
      data.forEach(item => {
        dataForX.push(item[xAxis]);
        dataForY.push(item[yAxis]);
      });
      
      return {
        labels: dataForX,
        datasets: [{
          label: yAxis,
          data: dataForY,
          backgroundColor: [
            "#00a4ec",
            "#ff567b",
            "#00c3c3",
            "#ff9a33",
            "#ffcb53",
            "#a164fd",
          ],
          borderColor: '#00001a',
          borderWidth: 1,
        }]
      };
    };

    const handleCreate = () => {
    const chartData = formatDataForCharts(data, xAxis, yAxis);setCharts(prevCharts => [
      ...prevCharts,
      {
        type: chartType,
        data: chartData,
      }
    ]);
  };

  const handleDelete = (indexToDelete) => {
  setCharts(charts.filter((_, index) => index !== indexToDelete));
  };return (
    <Container>
    <LeftBar>
    {charts.map((chart, index) => (
    <ChartWrapper key={index}>
    {chart.type === 'Bar' && (
    <BarChart key={index} chartData={chart.data} />
    )}
    {chart.type === 'Pie' && (
    <PieChart key={index} chartData={chart.data} />
    )}
    {chart.type === 'Line' && (
    <LineChart key={index} chartData={chart.data} />
    )}
    <DeleteButton className="deleteButton" onClick={() => handleDelete(index)} />
    </ChartWrapper>
    ))}
    </LeftBar>
    <RightBar>
    <RightBar1>
    <h3 style={{ color: "white" }}>CSV File Importer</h3>
    <FileInput onFileChange={handleFileChange} />
    </RightBar1>
    <RightBar2>
    <h3 style={{ color: "white" }}>CUSTOMIZE CHART TYPE</h3>
    <form className="createProjectForm">
    <div style={{ display: "flex", flexDirection: "row" }}>
    <Tooltip title="Bar Graph" placement="top">
    <BarChartIcon
    style={{
    cursor: "pointer",
    marginLeft: "2%",
    color: chartType === "Bar" ? "blue" : "white"
    }}
    onClick={() => setChartType("Bar")}
    />
    </Tooltip>
    <Tooltip title="Pie Chart" placement="top">
    <PieChartIcon
    style={{
    cursor: "pointer",
    marginLeft: "2%",
    color: chartType === "Pie" ? "blue" : "white"
    }}
    onClick={() => setChartType("Pie")}
    />
    </Tooltip>
    <Tooltip title="Line Chart" placement="top">
    <ShowChart
    style={{
    cursor: "pointer",
    marginLeft: "2%",
    color: chartType === "Line" ? "blue" : "white"
    }}
    onClick={() => setChartType("Line")}
    />
    </Tooltip>
    </div>
    </form>
    </RightBar2>
    <RightBar3>
    <Input text='X-axis' data={dataColumn} setValue={setXAxis} />
    <Input text="Y-axis" data={dataColumn} setValue={setYAxis} />
    <Button
    style={{ margin: "3%", color: "white", backgroundColor: "blue" }}
    onClick={handleCreate}
    >
    Create
    </Button>
    </RightBar3>
  </RightBar>
</Container>
);
}

export default Analysis;                