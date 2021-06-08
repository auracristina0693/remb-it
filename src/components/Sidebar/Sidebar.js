/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FcEmptyTrash, FcFullTrash } from 'react-icons/fc';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { COLORS } from '../../utils/constants';

const Sidebar = ({ createNote, deletedNotes }) => {
  const [showColors, setShowColors] = useState(false);
  const history = useHistory();
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="logo" onClick={() => history.push('/')} />
      <div className="sidebar__icons">
        <div>
          <AiFillPlusCircle onClick={() => setShowColors(!showColors)} size={60} />
        </div>
        {showColors && (
          <div className="sidebar__colors">
            <button
              type="button"
              className="color-btn pink"
              onClick={() => createNote(COLORS.pink)}
            >
              +
            </button>
            <button
              type="button"
              className="color-btn orange"
              onClick={() => createNote(COLORS.orange)}
            >
              +
            </button>
            <button
              type="button"
              className="color-btn green"
              onClick={() => createNote(COLORS.green)}
            >
              +
            </button>
            <button
              type="button"
              className="color-btn purple"
              onClick={() => createNote(COLORS.purple)}
            >
              +
            </button>
            <button
              type="button"
              className="color-btn yellow"
              onClick={() => createNote(COLORS.yellow)}
            >
              +
            </button>
          </div>
        )}
        <div>
          {deletedNotes.length > 0 ? (
            <FcFullTrash size={70} onClick={() => history.push('/recycle-bin')} />
          ) : (
            <FcEmptyTrash size={70} onClick={() => history.push('/recycle-bin')} />
          )}
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  createNote: PropTypes.func.isRequired,
  deletedNotes: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.string,
      id: PropTypes.numb,
    })
  ).isRequired,
};

export default Sidebar;
