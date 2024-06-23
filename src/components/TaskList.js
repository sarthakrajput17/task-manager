import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete, onView }) => {
  return (
    <div className="container">
      <h1 className="my-4">Task Manager</h1>
      <button className="btn btn-primary mb-4" onClick={() => onEdit(null)}>Add Task</button>
      <ul className="list-group">
        {tasks.map(task => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={task.id}>
            <div>
              <h5>{task.title}</h5>
              <p>{task.description}</p>
            </div>
            <div>
              <button className="btn btn-info mx-2" onClick={() => onView(task)}>View</button>
              <button className="btn btn-warning mx-2" onClick={() => onEdit(task)}>Edit</button>
              <button className="btn btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
