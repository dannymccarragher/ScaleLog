import { useState } from 'react'
import './App.css'
import { Header } from './components/Header';
import ChartContainer from './components/ChartContainer';
import Logs from './components/Logs';
import MileStone from './components/AddWeightContainer';
import Trends from './components/Trends';

function App() {

  return (
    <>
      <Header>
        <button> Home </button>
        <button> Add Weight </button>
        <button> Add Goal </button>
      </Header>
      <div className="app-container">
        <div className="grid-container">
          <div className="grid-item"><ChartContainer />
          </div>
          <div className="grid-item"><Logs/></div>
          <div className="grid-item"><MileStone /></div>
          <div className="grid-item"><Trends /></div>
        </div>
      </div>
    </>
  )
}

export default App
