/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IoTrash } from 'react-icons/io5';
import { IoIosColorPalette } from 'react-icons/io';
import { MdRestore } from 'react-icons/md';
import PropTypes from 'prop-types';
import './Note.css';

const Note = ({
  text,
  color,
  editNote,
  id,
  deleteNote,
  restoreNote,
  isDeleted,
  deletePermanentNote,
}) => {
  const onTextChange = (event) => {
    editNote(id, event.target.value, color);
  };

  return (
    <div
      className="note"
      style={isDeleted ? { backgroundColor: 'lightgray' } : { backgroundColor: color }}
    >
      <input value={text} className="note__input" onChange={onTextChange} />
      <div className="note__bottom">
        <p>29 may,2021</p>
        <div className="note__icons">
          {!isDeleted ? (
            <>
              <div className="icon-wrapper" onClick={() => deleteNote(id)}>
                <IoTrash size={20} color="white" />
              </div>
              <div className="icon-wrapper">
                <IoIosColorPalette size={20} color="white" />
              </div>
            </>
          ) : (
            <>
              <div className="icon-wrapper" onClick={() => restoreNote(id)}>
                <MdRestore size={20} color="white" />
              </div>
              <div className="icon-wrapper" onClick={() => deletePermanentNote(id)}>
                <IoTrash size={20} color="white" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Note.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  editNote: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  deleteNote: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool.isRequired,
  restoreNote: PropTypes.func.isRequired,
  deletePermanentNote: PropTypes.func.isRequired,
};

export default Note;
