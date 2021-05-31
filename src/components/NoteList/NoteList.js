import React from 'react';
import PropTypes from 'prop-types';
import Note from '../Note';
import './NoteList.css';

const NoteList = ({ notes }) => (
  <div className="notelist">
    <h1 className="noteList__title">Notes</h1>
    <div className="notelist__grid">
      {notes.map((note) => (
        <Note text={note.text} color={note.color} />
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
};

export default NoteList;
