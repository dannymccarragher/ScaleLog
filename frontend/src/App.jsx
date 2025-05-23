import { useRef, useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import ChartContainer from './components/ChartContainer';
import Logs from './components/Logs';
import Trends from './components/Trends';
import AddWeight from './components/AddWeight';

function App() {
  const addWeightInputRef = useRef(null);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    try {
      const URI = 'http://localhost:3000/weights';
      const config = {
        method: 'GET',
        mode: 'cors'
      };

      const response = await fetch(URI, config);
      const data = await response.json();
      setLogs(data);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleAddWeightClick = () => {
    if (addWeightInputRef.current) {
      addWeightInputRef.current.focus();
    }
  };

  return (
    <>
      <Header>
        <button>Home</button>
        <button onClick={handleAddWeightClick}>Add Weight</button>
        <button>Add Goal</button>
      </Header>
      <div className="app-container">
        <div className="grid-container">
          <div className="grid-item"><ChartContainer /></div>
          <div className="grid-item"><Logs logs={logs} loading={loading} fetchLogs={fetchLogs} /></div>
          <div className="grid-item">
            <AddWeight ref={addWeightInputRef} refreshLogs={fetchLogs} />
          </div>
          <div className="grid-item"><Trends /></div>
        </div>
      </div>
    </>
  );
}

export default App;
