// src/App.js
import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';
import PieChart from './components/PieChart';
import Chart from './components/Chart';
import LineChart from './components/LineChart';
import Papa from 'papaparse';


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

  const [csvData, setCsvData] = useState([]);
  
  useEffect(() => {
    // Load the CSV file from public folder
    Papa.parse(`${process.env.PUBLIC_URL}/Electric_Vehicle_Population_Data.csv`, {
      download: true,
      header: true,  // To use the first row as column names
      complete: (result) => {
        console.log(result.data);  // Check the parsed data
        setCsvData(result.data);      // Set the parsed data to state
       
      },
    });
  }, []);


  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chart" element={<Chart data={csvData}/>}  />
          <Route path="/piechart" element={<PieChart data={csvData} />} />
          <Route path="/linechart" element={<LineChart data={csvData} />} />
        </Routes>
      </Layout>
      </Router> 
      

    </ThemeProvider>
  );
}

export default App;
