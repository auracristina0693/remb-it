import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';
import NoteListDeleted from './components/NoteListDeleted';
import './App.css';

function App() {
  const [notes, setNotes] = useState([
    { text: 'Hacer las tareas de integra', color: '#ff9aa2' },
    { text: 'ir de compras', color: ' #ffdac1' },
    { text: 'pagar el internet de claro', color: '#b5ead7' },
    { text: 'recordar usar react dom', color: '#c7ceea' },
    { text: 'marejada feliz la canción', color: '#fff87f' },
  ]);

  const createNote = (color) => {
    setNotes([...notes, { text: 'holi', color }]);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar createNote={createNote} />
        <Switch>
          <Route path="/">
            <NoteList notes={notes} />
          </Route>
          <Route path="/recycle-bin" component={NoteListDeleted} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
