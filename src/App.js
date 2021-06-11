import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';
import NoteListDeleted from './components/NoteListDeleted';
import './App.css';
import getDate from './utils/getDate';
import useLocalStorage from './hooks/useLocalStorage';
import getNewId from './utils/getNewId';

function App() {
  const [notes, setNotes] = useLocalStorage('notes', []);

  const [deletedNotes, setNotesDeleted] = useLocalStorage('deletedNotes', []);

  const createNote = (color) => {
    setNotes([...notes, { text: '', color, id: getNewId(notes), date: getDate() }]);
  };

  const editNote = (id, text, color, date) => {
    const newNote = { id, text, color, date };

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
        <div className="main">
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
      </div>
    </Router>
  );
}

export default App;
