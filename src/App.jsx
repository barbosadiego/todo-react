import './App.css';
import FormFild from './Components/FormFild';
import React from 'react';
import Tasks from './Components/Tasks';

function App() {
  const [taskTitle, setTaskTitle] = React.useState('');
  const [taskDuration, setTaskDuration] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const task_db = {taskTitle, taskDuration};

    localStorage.setItem('@todo-list', JSON.stringify(task_db))

    console.log(task_db)
  }

  return (
    <div className="todo-app">
      <h1>React Todo</h1>
      <p className='description'>Insira a sua próxima tarefa:</p>
      <form className='form'>
        <FormFild
          name="title"
          type="text"
          label="O que você vai fazer?"
          placeholder="Título da tarefa"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <FormFild
          name="duration"
          type="number"
          label="Duração"
          placeholder="Tempo estimado (em horas)"
          onChange={(e) => setTaskDuration(e.target.value)}
        />
        <input type="submit" value="Criar tarefa" onClick={handleSubmit} />
      </form>
        <hr />
      <div>
        <h2>Lista de Tarefas</h2>
        <Tasks title='Título da tarefa' text='teste' />
      </div>
    </div>
  );
}

export default App;
