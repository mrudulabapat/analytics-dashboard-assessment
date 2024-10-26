// src/components/TopMetrics.js
import React from 'react';
import { Grid, Card, Typography } from '@mui/material';

const metrics = [
  { label: 'State', value: 'Washington', change: '50000+ EV users' },
  { label: 'Most Used Electric Utility', value: 'Puget Sound Energy Inc', change: '++' },
  { label: 'Most EV Users', value: 'Seattle', change: '+10427' },
  { label: 'Most Used Make in 2023', value: 'Tesla', change: 'Model Y' },
];

const TopMetrics = () => (
  <Grid container spacing={3} py={3}>
    {metrics.map((metric, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Card sx={{ padding: '16px', backgroundColor: '#1E2230', color: 'white' }}>
          <Typography variant="h6">{metric.label}</Typography>
          <Typography variant="h5">{metric.value}</Typography>
          <Typography variant="body2" color={metric.change.startsWith('-') || metric.change.endsWith('-') ? 'error' : 'success'}>
            {metric.change}
          </Typography>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default TopMetrics;
