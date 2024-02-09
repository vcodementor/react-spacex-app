import React from 'react';
import LaunchCard from './LaunchCard';
import { Grid } from '@mui/material';

const LaunchList = ({data}) => {
  return (
      <Grid container spacing={3}>
        {data.map((launch,index) => (
          <Grid item xs={12} sm={6} md={4} key={`launch-grid-${index}`}>
            <LaunchCard launch={launch} key={`launch-card-${index}`} />
          </Grid>
        ))}
      </Grid>
  );
};

export default LaunchList;
