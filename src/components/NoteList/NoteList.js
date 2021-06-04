import React from 'react';
import PropTypes from 'prop-types';
import Note from '../Note';
import './NoteList.css';

const NoteList = ({ notes, editNote }) => (
  <div className="notelist">
    <h1 className="noteList__title">Notes</h1>
    <div className="notelist__grid">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} color={note.color} editNote={editNote} />
      ))}
    </div>
  </div>
);

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
  editNote: PropTypes.func.isRequired,
};

export default NoteList;
