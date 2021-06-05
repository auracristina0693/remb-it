/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FcEmptyTrash } from 'react-icons/fc';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Sidebar = ({ createNote }) => {
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
            <button type="button" className="color-btn pink" onClick={() => createNote('#ff9aa2')}>
              +
            </button>
            <button
              type="button"
              className="color-btn orange"
              onClick={() => createNote('#ffdac1')}
            >
              +
            </button>
            <button type="button" className="color-btn green" onClick={() => createNote('#b5ead7')}>
              +
            </button>
            <button
              type="button"
              className="color-btn purple"
              onClick={() => createNote('#c7ceea')}
            >
              +
            </button>
            <button
              type="button"
              className="color-btn yellow"
              onClick={() => createNote('#fff87f')}
            >
              +
            </button>
          </div>
        )}
        <div>
          <FcEmptyTrash color="red" size={70} onClick={() => history.push('/recycle-bin')} />
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  createNote: PropTypes.func.isRequired,
};

export default Sidebar;
