import React, { useState } from 'react';
import { IoTrash } from 'react-icons/io5';
import { IoIosColorPalette as ColorPalette } from 'react-icons/io';
import { MdRestore as RestoreIcon } from 'react-icons/md';
import PropTypes from 'prop-types';
import './Note.css';
import { BACKGROUND_COLORS } from '../../utils/constants';

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
    editNote(id, event.target.value, color, date);
  };
  const [showColors, setshowColors] = useState(false);

  const colorsOptions = Object.values(BACKGROUND_COLORS).filter(
    (colorOption) => colorOption !== color
  );

  return (
    <div className={`note ${isDeleted ? 'bg-gray' : color}`}>
      <textarea value={text} className="note__input" onChange={onTextChange} />
      <div className="note__bottom">
        <p>{date}</p>
        <div className="note__icons">
          {!isDeleted ? (
            <>
              <button type="button" className="icon-wrapper" onClick={() => deleteNote(id)}>
                <IoTrash size={20} color="white" />
              </button>
              <button
                type="button"
                className="icon-wrapper"
                onClick={() => setshowColors(!showColors)}
              >
                <ColorPalette size={20} color="white" />
              </button>
            </>
          ) : (
            <>
              <button type="button" className="icon-wrapper" onClick={() => restoreNote(id)}>
                <RestoreIcon size={20} color="white" />
              </button>
              <button
                type="button"
                className="icon-wrapper"
                onClick={() => deletePermanentNote(id)}
              >
                <IoTrash size={20} color="white" />
              </button>
            </>
          )}
        </div>
      </div>
      {showColors && (
        <div className="note__colors">
          {colorsOptions.map((colorOpt) => (
            <button
              type="button"
              className={`color-btn ${colorOpt}`}
              onClick={() => editColor(id, colorOpt)}
            >
              .
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Note.propTypes = {
  id: PropTypes.number,
  isDeleted: PropTypes.bool,
  restoreNote: PropTypes.func,
  deletePermanentNote: PropTypes.func,
  editNote: PropTypes.func,
  deleteNote: PropTypes.func,
  editColor: PropTypes.func,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

Note.defaultProps = {
  id: 0,
  isDeleted: false,
  restoreNote: () => {},
  deletePermanentNote: () => {},
  editNote: () => {},
  deleteNote: () => {},
  editColor: () => {},
};

export default Note;
