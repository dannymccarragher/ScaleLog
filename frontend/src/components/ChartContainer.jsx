import { useState, useEffect } from 'react';
import Chart from './Chart';

const ChartContainer = ({dataPoints}) => {
  // const [dataPoints, setDataPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/weights');
      const data = await response.json();

   
      const formattedData = data.map(entry => ({
        date: entry.date,
        value: parseFloat(entry.weight),
      }));

      setDataPoints(formattedData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching chart data:', err);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading chart data...</p>;
  if (!dataPoints.length) return <p>No data to display.</p>;

  return (
    <>
  <Chart dataPoints={dataPoints} />
  </>
)
};

export default ChartContainer;
