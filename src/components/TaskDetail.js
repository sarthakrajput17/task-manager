import React from 'react';

const TaskDetail = ({ task, onBack }) => {
  return (
    <div className="container">
      <h2>Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <button className="btn btn-secondary" onClick={onBack}>Back</button>
    </div>
  );
};

export default TaskDetail;
