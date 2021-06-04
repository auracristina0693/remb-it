import React from 'react';
import { IoTrash } from 'react-icons/io5';
import { IoIosColorPalette } from 'react-icons/io';
import PropTypes from 'prop-types';
import './Note.css';

const Note = ({ text, color, editNote, id }) => {
  const onTextChange = (event) => {
    editNote(id, event.target.value, color);
  };

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <input value={text} className="note__input" onChange={onTextChange} />
      <div className="note__bottom">
        <p>29 may,2021</p>
        <div className="note__icons">
          <div className="icon-wrapper">
            <IoTrash size={20} color="white" />
          </div>
          <div className="icon-wrapper">
            <IoIosColorPalette size={20} color="white" />
          </div>
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
};

export default Note;
