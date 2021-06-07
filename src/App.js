import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';
import NoteListDeleted from './components/NoteListDeleted';
import './App.css';
import getDate from './utils/getDate';

function App() {
  const [notes, setNotes] = useState([
    { text: ' Hacer las tareas de integra', color: '#ff9aa2', id: 0, date: '06/05/1993' },
    { text: 'ir de compras', color: ' #ffdac1', id: 1, date: '06/05/1993' },
    { text: 'pagar el internet de claro', color: '#b5ead7', id: 2, date: '06/05/1993' },
    { text: 'recordar usar react dom', color: '#c7ceea', id: 3, date: '06/05/1993' },
    { text: 'marejada feliz la canción', color: '#fff87f', id: 4, date: '06/05/1993' },
  ]);

  const [deletedNotes, setNotesDeleted] = useState([]);

  const createNote = async (color) => {
    function newId(array) {
      const ids = array.map((obj) => obj.id);
      return Math.max(...ids) + 1;
    }

    setNotes([...notes, { text: '', color, id: newId(notes), date: getDate() }]);
  };

  const editNote = (id, text, color) => {
    const newNote = { id, text, color };

    setNotes(notes.map((note) => (note.id === id ? newNote : note)));
  };

  const deleteNote = (id) => {
    const deletedNote = notes.find((note) => note.id === id);

    setNotes(notes.filter((note) => note.id !== id));
    setNotesDeleted([...deletedNotes, deletedNote]);
  };

  const restoreNote = (id) => {
    const restoredNote = deletedNotes.find((note) => note.id === id);

    setNotesDeleted(deletedNotes.filter((note) => note.id !== id));
    setNotes([...notes, restoredNote]);
  };

  const deletePermanentNote = (id) => {
    setNotesDeleted(deletedNotes.filter((note) => note.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <Sidebar createNote={createNote} deletedNotes={deletedNotes} />
        <Switch>
          <Route path="/" exact>
            <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
          </Route>
          <Route path="/recycle-bin" exact>
            <NoteListDeleted
              deletedNotes={deletedNotes}
              restoreNote={restoreNote}
              deletePermanentNote={deletePermanentNote}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
