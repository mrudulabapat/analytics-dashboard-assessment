// src/components/TopMetrics.js
import React from 'react';
import { Grid, Card, Typography } from '@mui/material';

const metrics = [
  { label: 'State', value: 'Washington', change: ' ' },
  { label: 'Monthly users', value: '23.6K', change: '-2.0%' },
  { label: 'New sign ups', value: '756', change: '+7.1%' },
  { label: 'Subscriptions', value: '2.3K', change: '+4.5%' },
];

const TopMetrics = () => (
  <Grid container spacing={3} py={3}>
    {metrics.map((metric, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Card sx={{ padding: '16px', backgroundColor: '#1E2230', color: 'white' }}>
          <Typography variant="h6">{metric.label}</Typography>
          <Typography variant="h4">{metric.value}</Typography>
          <Typography variant="body2" color={metric.change.startsWith('-') ? 'error' : 'success'}>
            {metric.change}
          </Typography>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default TopMetrics;
