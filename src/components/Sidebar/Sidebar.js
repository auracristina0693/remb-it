import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';
import { AiFillPlusCircle as AddIcon } from 'react-icons/ai';
import { IoArrowBackCircle as BackIcon } from 'react-icons/io5';
import { FcEmptyTrash, FcFullTrash } from 'react-icons/fc';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { BACKGROUND_COLORS } from '../../utils/constants';

const Sidebar = ({ createNote, deletedNotes }) => {
  const [showColors, setShowColors] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidebar">
      <Link to="/">
        <img className="sidebar__logo" src={logo} alt="logo" />
      </Link>

      <div className="sidebar__icons">
        <div>
          {currentPath === '/' && (
            <button type="button" onClick={() => setShowColors(!showColors)} className="icon-btn">
              <AddIcon size={60} />
            </button>
          )}
          {currentPath === '/recycle-bin' && (
            <button type="button" onClick={() => history.push('/')} className="icon-btn">
              <BackIcon size={60} />
            </button>
          )}
        </div>

        {showColors && (
          <div className="sidebar__colors">
            <button
              type="button"
              className="color-btn pink"
              onClick={() => createNote(BACKGROUND_COLORS.pink)}
            >
              +
            </button>
            <button
              type="button"
              className="color-btn orange"
              onClick={() => createNote(BACKGROUND_COLORS.orange)}
            >
              +
            </button>
            <button
              type="button"
              className="color-btn green"
              onClick={() => createNote(BACKGROUND_COLORS.green)}
            >
              +
            </button>
            <button
              type="button"
              className="color-btn purple"
              onClick={() => createNote(BACKGROUND_COLORS.purple)}
            >
              +
            </button>
            <button
              type="button"
              className="color-btn yellow"
              onClick={() => createNote(BACKGROUND_COLORS.yellow)}
            >
              +
            </button>
          </div>
        )}
        <div>
          {deletedNotes.length > 0 ? (
            <Link to="/recycle-bin">
              <FcFullTrash size={70} />
            </Link>
          ) : (
            <Link to="/recycle-bin">
              <FcEmptyTrash size={70} />
            </Link>
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
