import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Box, Card, CardContent } from '@mui/material';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,       // Register the category scale
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components for use
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({data}) => {

  const [stateAnalysis, setStateAnalysis] = useState({});
  
  useEffect(() => {
    if (data.length > 0) {
      analyzeData(data); // Call analyzeData only if data is available
    }
  }, [data]);

// Analyze the data by state, for example
const analyzeData = (data) => {
  const countyCount = data.reduce((acc, row) => {
    const county = row['County'];
    if (county) {
      if (!acc[county]) {
        acc[county] = 0;
      }
      acc[county] += 1;
    }
    return acc;
  }, {});
  setStateAnalysis(countyCount);
  console.log('State Analysis:', countyCount);  // Debug the result of the analysis
};

  // Prepare chart data
  const chartData = {
    labels: Object.keys(stateAnalysis),  // States
    datasets: [{
      label: 'Number of Electric Vehicles',
      data: Object.values(stateAnalysis),  // Count of vehicles by state
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }],

  };

  return (
    <Box sx={{ height: '50vh', padding: '1em' , width:'80vh'}}>
      <Card sx={{ marginBottom: '2em' }}>
        <CardContent>
        {Object.keys(stateAnalysis).length > 0 ? (
            <Bar data={chartData} />
          ) : (
            <p>Loading data...</p>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Chart;
