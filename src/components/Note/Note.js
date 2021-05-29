import React from 'react';
import { IoTrash } from 'react-icons/io5';
import { IoIosColorPalette } from 'react-icons/io';
import './Note.css';

const Note = () => (
  <div className="note">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor corrupti quae nesciunt,
      qui natus doloremque itaque aspernatur a, ex cupiditate laborum beatae, ullam esse adipisci
      molestias quisquam omnis modi.
    </p>
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

export default Note;
