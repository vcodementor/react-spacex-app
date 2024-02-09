import React from 'react';
import { Container} from '@mui/material';
import Alert from '@mui/material/Alert';

const ErrorAlert = ({ error }) => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Alert severity="error">{error.message}</Alert>
    </Container>
  );
}

export default ErrorAlert;
