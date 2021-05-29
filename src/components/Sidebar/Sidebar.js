import React from 'react';
import './Sidebar.css';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FcEmptyTrash } from 'react-icons/fc';
import logo from '../../assets/images/logo.png';

const Sidebar = () => (
  <div className="sidebar">
    <img className="sidebar__logo" src={logo} alt="logo" />
    <div className="sidebar__icons">
      <AiFillPlusCircle size={60} />
      <FcEmptyTrash color="red" size={70} />
    </div>
  </div>
);

export default Sidebar;
