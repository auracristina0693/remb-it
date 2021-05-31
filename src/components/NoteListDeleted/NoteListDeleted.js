import React from 'react';
import Note from '../Note';
import '../NoteList/NoteList';

const NoteList = () => (
  <div className="notelist">
    <h1 className="noteList__title">Notes</h1>
    <div className="notelist__grid">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  </div>
);

export default NoteList;
