import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunchList } from '../../redux/Launch/LaunchAction';

import { Container, Typography, Button, CircularProgress, Alert } from '@mui/material';
import LaunchList from '../../components/Launch/LaunchList';
import LaunchFilter from '../../components/Launch/LaunchFilter';
import Loader from '../../components/Layout/Loader';
import ErrorAlert from '../../components/Layout/ErrorAlert';

const LaunchPage = () => {
  const filter = ['upcoming', 'successful', 'failed'];
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [offset, setOffset] = useState(0);
  const PAGE_LIMIT = 10;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunchList({ limit: PAGE_LIMIT, offset: 0 , filter: { upcoming : true } }));
  }, [dispatch]);

  const { launchList, status, error } = useSelector((state) => state.launch);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredLaunchList = launchList.filter((launch) => {
    if (selectedFilter === 'upcoming') {
      return launch.upcoming == false;
    } else if (selectedFilter === 'successful') {
      return  launch.launch_success === true ;
    } else if (selectedFilter === 'failed') {
      return launch.launch_success === false || launch.launch_success == null;
    } else {
      return true;
    }
  });


  const handleLoadMore = () => {
    const newOffset = offset + PAGE_LIMIT;
    dispatch(fetchLaunchList({ limit: PAGE_LIMIT, offset: newOffset })).then(() => {
      setOffset(newOffset);
    });
  };

  return (
    <Container sx={{ py: 2 }}>
      <Typography variant="h4" gutterBottom>SpaceX Launches</Typography>
      <Container sx={{ py: 2 }}>
        <LaunchFilter filters={filter} onFilterChange={handleFilterChange} />
      </Container>
      {status === 'loading' && (
        <Loader />
      )}
      {status === 'failed' && (
        <ErrorAlert error={error} />
      )}
      {status === 'succeeded' && (
        <>
          <Container sx={{ py: 2 }}>
            <LaunchList data={filteredLaunchList} />
          </Container>
          <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" onClick={handleLoadMore}>Load More</Button>
          </Container>
        </>
      )}
    </Container>
  );
};

export default LaunchPage;
