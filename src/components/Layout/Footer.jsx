import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright &copy; {new Date().getFullYear() } SpaceX
      </Typography>
    </footer>
  );
};

export default Footer;
