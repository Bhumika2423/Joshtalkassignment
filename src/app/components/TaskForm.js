"use client";
import { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit, resetEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
    } else {
      resetForm();
    }
  }, [taskToEdit]);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPriority('medium');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      editTask({ ...taskToEdit, title, description, priority });
      resetEdit(); 
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        priority,
        completed: false,
      };
      addTask(newTask);
    }
    resetForm();
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#ffcccc'; // Light red
      case 'medium':
        return '#ffffcc'; // Light yellow
      case 'low':
        return '#e6ccff'; // Light lavender
      default:
        return '#fff'; // Default white
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: getPriorityColor(priority) }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
