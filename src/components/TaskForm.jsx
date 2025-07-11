import React from 'react';

const TaskForm = ({ task, setTask, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        placeholder="Task Title"
        className="border p-2 w-full"
        required
      />
      <textarea
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        placeholder="Task Description"
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
};

export default TaskForm;
