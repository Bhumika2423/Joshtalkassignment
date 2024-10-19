"use client";
const TaskItem = ({ task, editTask, deleteTask, toggleCompletion }) => {
  
  const priorityColors = {
    high: '#ffcccc', 
    medium: '#ffffcc',
    low: '#E6E6FA', 
  };

  const backgroundColor = task.completed ? '#d4edda' : priorityColors[task.priority]; // Green if completed

  return (
    <div style={{ backgroundColor, padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
      <h3>{task.title} (Priority: {task.priority})</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleCompletion(task.id)}>
        {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
