// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#181C24',
      paper: '#1E2230',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Dashboard />} />
          {/* You can add more routes here for other pages */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
