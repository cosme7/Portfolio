import React from 'react';
import Routes from './Services/routes';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Theme';
import {GlobalStyle} from "./Global/GlobalStyle"
import { lightTheme, darkTheme } from './Global/GlobalStyle';
import Toggle from './Theme/toggle'

export default function App() {

  const [theme, toggleTheme, componentMounted] = DarkTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
    <>
      <GlobalStyle />
      <Toggle theme={theme} toggleTheme={toggleTheme}/> 
      <Routes />
    </>
    </ThemeProvider>
  );
}