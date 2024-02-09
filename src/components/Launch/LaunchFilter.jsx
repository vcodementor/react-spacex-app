import React, { useState } from 'react';
import { Chip, Grid } from '@mui/material';

const LaunchFilter = ({ filters, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (filter) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null);
      onFilterChange(null);
    } else {
      setSelectedFilter(filter);
      onFilterChange(filter);
    }
  };

  return (
    <Grid container spacing={1}>
      {filters.map((filter) => (
        <Grid item key={filter}>
          <Chip
            label={filter}
            onClick={() => handleFilterClick(filter)}
            color={selectedFilter === filter ? 'primary' : 'default'}
            variant={selectedFilter === filter ? 'filled' : 'outlined'}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default LaunchFilter;