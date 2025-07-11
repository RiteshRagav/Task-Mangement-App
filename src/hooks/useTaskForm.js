import { useState } from 'react';

export const useTaskForm = (initial = { title: '', description: '' }) => {
  const [task, setTask] = useState(initial);
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  return { task, setTask, handleChange };
};
