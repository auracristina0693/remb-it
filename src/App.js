import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';
import NoteListDeleted from './components/NoteListDeleted';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route path="/" component={NoteList} />
          <Route path="/recycle-bin" component={NoteListDeleted} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
