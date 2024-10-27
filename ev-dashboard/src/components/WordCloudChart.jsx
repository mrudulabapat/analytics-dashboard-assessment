import { TagCloud } from 'react-tagcloud';
import React, { useState, useEffect } from 'react';

const WordCloudChart = ({ data }) => {
  const [makeWordData, setMakeWordData] = useState([]);

  useEffect(() => {

    if (!data || data.length === 0) return; 

    // Filter data for 2023 and prepare word cloud data
    const prepareWordCloudData = () => {
      const filteredData = data.filter((row) => row['Model Year'] === '2023');
      const makeCount = filteredData.reduce((acc, row) => {
        const make = row['Make'];
        acc[make] = (acc[make] || 0) + 1;
        return acc;
      }, {});

      // Convert the make count to format suitable for react-tagcloud
      const wordData = Object.keys(makeCount).map((make) => ({
        value: make,
        count: makeCount[make],
      }));

      setMakeWordData(wordData);
    };

    prepareWordCloudData();

  }, [data]);

  const styles = {
    container: {
      //border: '1px solid #ccc',
      padding: '2em',
      //borderRadius: '8px',
      //boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif', // Custom font for the box
      height: '100%', 
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
      //maxWidth: '500px',
      //margin: '2 auto',
      //backgroundColor: '#f9f9f9',
      
    },
    tagCloud: {
      fontFamily: 'Arial, monospace', // Custom font for words
    },
  };

  return (
    <div style={styles.container}>
      <TagCloud
        //minSize={25}
        //maxSize={50}
        tags={makeWordData}
        colorOptions={{
          luminosity: 'bright', // Darker shades
          hue: 'white',       
        }}
        style={styles.tagCloud}
      />
    </div>
  );
};

export default WordCloudChart;
