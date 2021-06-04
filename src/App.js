import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';
import NoteListDeleted from './components/NoteListDeleted';
import './App.css';

function App() {
  const [notes, setNotes] = useState([
    { text: 'Hacer las tareas de integra', color: '#ff9aa2', id: 0 },
    { text: 'ir de compras', color: ' #ffdac1', id: 1 },
    { text: 'pagar el internet de claro', color: '#b5ead7', id: 2 },
    { text: 'recordar usar react dom', color: '#c7ceea', id: 3 },
    { text: 'marejada feliz la canción', color: '#fff87f', id: 4 },
  ]);

  const createNote = (color) => {
    function newId(array) {
      const ids = array.map((obj) => obj.id);
      return Math.max(...ids) + 1;
    }

    setNotes([...notes, { text: '', color, id: newId(notes) }]);
  };

  const editNote = (id, text, color) => {
    const newNote = { id, text, color };

    setNotes(notes.map((note) => (note.id === id ? newNote : note)));
  };

  return (
    <Router>
      <div className="app">
        <Sidebar createNote={createNote} />
        <Switch>
          <Route path="/">
            <NoteList notes={notes} editNote={editNote} />
          </Route>
          <Route path="/recycle-bin" component={NoteListDeleted} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
