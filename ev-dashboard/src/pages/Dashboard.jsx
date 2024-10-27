// src/pages/Dashboard.js
import React, {useState, useEffect} from 'react';
import TopMetrics from '../components/TopMetrics';
import {Grid, Box, Typography, Card, CardContent} from '@mui/material';
import WordCloudChart from '../components/WordCloudChart';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = ({ data }) => {
  const [evUsageData, setEvUsageData] = useState({ labels: [], datasets: [] });
  
  useEffect(() => {
    if (data.length > 0) {
      analyzeEvUsage(data);

    }
  }, [data]);

  const analyzeEvUsage = (data) => {
    const usageCount = {
      BEV: {},
      PHEV: {},
    };

    // Loop through the data and count the number of EVs per year
    data.forEach(row => {
      const year = row['Model Year'];  // Adjust this key based on your data structure
      const vehicleType = row['Electric Vehicle Type']; // Ensure this matches your data structure

      // Exclude 2024 from the dataset
      if (year && year !== '2024') {
        if (vehicleType === 'Battery Electric Vehicle (BEV)') {
          usageCount.BEV[year] = (usageCount.BEV[year] || 0) + 1; // Increment count for BEV
        } else if (vehicleType === 'Plug-in Hybrid Electric Vehicle (PHEV)') {
          usageCount.PHEV[year] = (usageCount.PHEV[year] || 0) + 1; // Increment count for PHEV
        }
      }
    });

    // Prepare data for the chart
    const labels = [...new Set([...Object.keys(usageCount.BEV), ...Object.keys(usageCount.PHEV)])];
    const valuesBEV = labels.map(year => usageCount.BEV[year] || 0);
    const valuesPHEV = labels.map(year => usageCount.PHEV[year] || 0);

    setEvUsageData({
      labels,
      datasets: [
        {
          label: 'Battery Electric Vehicle (BEV)',
          data: valuesBEV,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.4)',
          fill: true,
        },
        {
          label: 'Plug-in Hybrid Electric Vehicle (PHEV)',
          data: valuesPHEV,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.4)',
          fill: true,
        },
      ],
    });
  };

  return(
    <>
      <TopMetrics />  
      <Box sx={{ padding: '1em', mt: '1em' }} >
        <Grid container spacing={2} sx={{ height: '100%' }}>
          <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: 'stretch' }}>
            <Card sx={{ minHeight: '300px',  height: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                {evUsageData.labels.length > 0 ? (
                  <Line data={evUsageData} />
                ) : (
                  <p>Loading data...</p>
                )}
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6} >
          <Card sx={{ minHeight: '300px', height: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column'  }}>
              <CardContent sx={{ flexGrow: 1, display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Market share in 2023
                </Typography>
                <WordCloudChart data={data} />
              </CardContent>
            </Card>
            
          </Grid>
    
        </Grid>
      </Box>
 
      
    </>

  );


};


export default Dashboard;
