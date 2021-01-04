import { List } from '@material-ui/core';
import React from 'react';
import './App.css';
/* import Dashboard from './domains/kanvan/Dashboard'; */
import ListCard from './domains/kanvan/components/List';


function App() {
  return (
    <div className="App">
        <h2>To Do List</h2>
        <ListCard />
    </div>
  );
}

export default App;
