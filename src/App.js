import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';
import NoteListDeleted from './components/NoteListDeleted';
import './App.css';
import getDate from './utils/getDate';
import { COLORS } from './utils/constants';

function App() {
  const [notes, setNotes] = useState([
    { text: ' Hacer las tareas de integra', color: COLORS.pink, id: 0, date: '06/05/1993' },
    { text: 'ir de compras', color: COLORS.orange, id: 1, date: '06/05/1993' },
    { text: 'pagar el internet de claro', color: COLORS.green, id: 2, date: '06/05/1993' },
    { text: 'recordar usar react dom', color: COLORS.purple, id: 3, date: '06/05/1993' },
    { text: 'marejada feliz la canción', color: COLORS.yellow, id: 4, date: '06/05/1993' },
  ]);

  const [deletedNotes, setNotesDeleted] = useState([]);

  const createNote = (color) => {
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

  const editColor = (id, color) => {
    const noteFind = notes.find((note) => note.id === id);
    const noteEdited = { ...noteFind, color };
    setNotes(notes.map((note) => (note.id === id ? noteEdited : note)));
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
            <NoteList
              notes={notes}
              editNote={editNote}
              deleteNote={deleteNote}
              editColor={editColor}
            />
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
