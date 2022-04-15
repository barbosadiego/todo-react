import React from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'
import './Task.css'

const Tasks = ({title, text}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button>
        <BsBookmarkCheck />
      </button>
      <button>
        <BsTrash />
      </button>
    </div>
  )
}

export default Tasks
