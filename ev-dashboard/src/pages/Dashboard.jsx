// src/pages/Dashboard.js
import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import TopMetrics from '../components/TopMetrics';
import RevenueChart from '../components/RevenueChart';
import Chart from '../components/Chart';
import Papa from 'papaparse';



const Dashboard = () => {
  
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

  return(
    <Layout>
      <TopMetrics />
      <Chart data={csvData} />
      
    </Layout>
  );


};


export default Dashboard;
