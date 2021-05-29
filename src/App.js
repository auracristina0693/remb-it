import React from 'react';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <NoteList />
    </div>
  );
}

export default App;
