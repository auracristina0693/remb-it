import React from 'react';
import PropTypes from 'prop-types';
import Note from '../Note';
import './NoteListDeleted.css';

const NoteListDeleted = ({ deletedNotes, restoreNote, deletePermanentNote }) => (
  <div className="notelist">
    <h1 className="noteList__title">Recycle Bin</h1>
    <div className="notelist__grid">
      {deletedNotes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          color={note.color}
          restoreNote={restoreNote}
          isDeleted
          deletePermanentNote={deletePermanentNote}
        />
      ))}
    </div>
  </div>
);

NoteListDeleted.propTypes = {
  deletedNotes: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.string,
      id: PropTypes.numb,
    })
  ).isRequired,
  restoreNote: PropTypes.func.isRequired,
  deletePermanentNote: PropTypes.func.isRequired,
};

export default NoteListDeleted;
