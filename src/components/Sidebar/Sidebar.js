import React, { useState } from 'react';
import './Sidebar.css';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FcEmptyTrash } from 'react-icons/fc';
import logo from '../../assets/images/logo.png';

const Sidebar = () => {
  const [showColors, setShowColors] = useState(false);
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="logo" />
      <div className="sidebar__icons">
        <div>
          <AiFillPlusCircle onClick={() => setShowColors(!showColors)} size={60} />
        </div>
        {showColors && (
          <div className="sidebar__colors">
            <button type="button" className="color-btn pink">
              +
            </button>
            <button type="button" className="color-btn orange">
              +
            </button>
            <button type="button" className="color-btn green">
              +
            </button>
            <button type="button" className="color-btn purple">
              +
            </button>
          </div>
        )}
        <div>
          <FcEmptyTrash color="red" size={70} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
