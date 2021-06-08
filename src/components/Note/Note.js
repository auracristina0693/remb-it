/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { IoTrash } from 'react-icons/io5';
import { IoIosColorPalette } from 'react-icons/io';
import { MdRestore } from 'react-icons/md';
import PropTypes from 'prop-types';
import './Note.css';
import { COLORS } from '../../utils/constants';

const Note = ({
  text,
  color,
  editNote,
  id,
  date,
  deleteNote,
  restoreNote,
  isDeleted,
  deletePermanentNote,
  editColor,
}) => {
  const onTextChange = (event) => {
    editNote(id, event.target.value, color);
  };
  const [showColors, setshowColors] = useState(false);

  return (
    <div
      className="note"
      style={isDeleted ? { backgroundColor: 'lightgray' } : { backgroundColor: color }}
    >
      <input value={text} className="note__input" onChange={onTextChange} />
      <div className="note__bottom">
        <p>{date}</p>
        <div className="note__icons">
          {!isDeleted ? (
            <>
              <div className="icon-wrapper" onClick={() => deleteNote(id)}>
                <IoTrash size={20} color="white" />
              </div>
              <div className="icon-wrapper" onClick={() => setshowColors(!showColors)}>
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
      {showColors && (
        <div className="note__colors">
          <button
            type="button"
            className="color-btn pink"
            onClick={() => editColor(id, COLORS.pink)}
          >
            +
          </button>
          <button
            type="button"
            className="color-btn orange"
            onClick={() => editColor(id, COLORS.orange)}
          >
            +
          </button>
          <button
            type="button"
            className="color-btn green"
            onClick={() => editColor(id, COLORS.green)}
          >
            +
          </button>
          <button
            type="button"
            className="color-btn purple"
            onClick={() => editColor(id, COLORS.purple)}
          >
            +
          </button>
          <button
            type="button"
            className="color-btn yellow"
            onClick={() => editColor(id, COLORS.yellow)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

Note.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  editNote: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool.isRequired,
  restoreNote: PropTypes.func.isRequired,
  deletePermanentNote: PropTypes.func.isRequired,
  editColor: PropTypes.func.isRequired,
};

export default Note;
