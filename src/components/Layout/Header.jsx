import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  >
          SpaceX
      </Typography>
      <ThemeSwitcher />
    </Toolbar>
  </AppBar>
  );
};

export default Header;
