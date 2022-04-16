import './App.css';
import React from 'react';
import Tasks from './Components/Tasks';
import FormFild from './Components/FormFild';

function App() {
  function getLocalStorage(){
    let list = JSON.parse(localStorage.getItem('@todo-list'))
    if(!list) return []
    return list
  }

  const [taskTitle, setTaskTitle] = React.useState('');
  const [taskDuration, setTaskDuration] = React.useState('');
  const [taskList, setTaskList] = React.useState(getLocalStorage());
  const [msg, setMsg] = React.useState('');

  React.useEffect(() => {
    localStorage.setItem('@todo-list', JSON.stringify(taskList));
  }, [taskList]);

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!taskTitle || !taskDuration) {
      alert('Preencha os campos abaixo');
      return;
    }
    
    const taskItem={
      id: new Date().getTime().toString(),
      taskTitle,
      taskDuration,
      done: false,
    };

    setTaskList([...taskList, taskItem]);
    setTaskTitle('');
    setTaskDuration('');
  }

  function handleTask(e) {
    if (e.currentTarget.classList.contains('delete')) {
      deleteTask(e.currentTarget.dataset.id);
    } else {
      console.log('done');
    }
  }

  function deleteTask(id) {
    const newTasks = JSON.parse(localStorage.getItem('@todo-list'));
   setTaskList(newTasks.filter((task) => task.id !== id))
    setMsg('Item deletado.');
    alert(msg);
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
        {taskList.length === 0 && <p>Não há tarefas</p>}
        {taskList.map((task) => (
          <Tasks
            key={task.id}
            id={task.id}
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
