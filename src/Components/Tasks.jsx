import React from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';
import './Task.css';

const Tasks = ({ title, text, onClick, id }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button>
        <BsTrash data-id={id} onClick={onClick} />
      </button>
    </div>
  );
};

export default Tasks;
