import React from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';
import './Task.css';

const Tasks = ({ title, text, onClick }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button>
        <BsBookmarkCheck className="check" onClick={onClick} />
      </button>
      <button>
        <BsTrash className="delete" onClick={onClick} />
      </button>
    </div>
  );
};

export default Tasks;
