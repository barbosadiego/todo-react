import './App.css';
import FormFild from './Components/FormFild';
import React from 'react';
import Tasks from './Components/Tasks';

function App() {
  const [taskTitle, setTaskTitle] = React.useState('');
  const [taskDuration, setTaskDuration] = React.useState('');
  const timeStamp = new Date();
  const todoArray = JSON.parse(localStorage.getItem('@todo-list')) || [];

  function createTask(task) {
    todoArray.push(task);
    localStorage.setItem('@todo-list', JSON.stringify(todoArray));

    setTaskTitle('');
    setTaskDuration('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    const todo = {
      id: timeStamp.getTime(),
      taskTitle,
      taskDuration,
      done: false,
    };

    createTask(todo);
  }

  function handleTask(e){
    if(e.currentTarget.classList.contains('delete')){
      console.log('delete')
    } else {
      console.log('done')
    }
  }

  return (
    <div className="todo-app">
      <h1>React Todo</h1>
      <p className="description">Insira a sua próxima tarefa:</p>
      <form className="form">
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
          value={taskDuration}
          onChange={(e) => setTaskDuration(e.target.value)}
        />
        <input type="submit" value="Criar tarefa" onClick={handleSubmit} />
      </form>
      <hr />
      <div>
        <h2>Lista de Tarefas</h2>
        {todoArray.length > 0 &&
          todoArray.map((task) => (
            <Tasks
              key={task.id}
              title={task.taskTitle}
              text={`duração ${task.taskDuration} hr`}
              onClick={handleTask}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
