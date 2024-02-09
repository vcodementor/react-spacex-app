import React, { useContext } from "react";
import Switch from "@mui/material/Switch";
import { Brightness4 as DarkIcon, Brightness7 as LightIcon } from "@mui/icons-material";
import { ThemeContext } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
        <Switch
          checked={theme === 'dark'}
          onChange={toggleTheme}
          inputProps={{ "aria-label": "Toggle Dark Mode" }}
          icon={<LightIcon />}
          checkedIcon={<DarkIcon />}
        />
  );
};

export default ThemeSwitcher;