import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [view, setView] = useState('list'); // 'list', 'form', 'detail'

  const handleSaveTask = (task) => {
    if (task.id) {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    } else {
      task.id = Date.now();
      setTasks([...tasks, task]);
    }
    setView('list');
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setView('form');
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleViewTask = (task) => {
    setCurrentTask(task);
    setView('detail');
  };

  const handleBack = () => {
    setView('list');
  };

  return (
    <div className="App">
      {view === 'list' && (
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onView={handleViewTask}
        />
      )}
      {view === 'form' && (
        <TaskForm
          task={currentTask}
          onSave={handleSaveTask}
          onCancel={handleBack}
        />
      )}
      {view === 'detail' && (
        <TaskDetail
          task={currentTask}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;
