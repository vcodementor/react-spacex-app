import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '../ThemeSwitcher/ThemeContext';
import {CssBaseline} from '@mui/material';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div>
        <Header />
          <div>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
