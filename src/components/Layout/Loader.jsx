import React from 'react';
import { Container,CircularProgress} from '@mui/material';

const Loader = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' ,alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </Container>
  );
}

export default Loader;
