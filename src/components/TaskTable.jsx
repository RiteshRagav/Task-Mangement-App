import React from 'react';

const TaskTable = ({ tasks, onEdit, onDelete }) => {
  return (
    <table className="table-auto w-full border">
      <thead>
        <tr>
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Description</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{task.title}</td>
            <td className="border px-4 py-2">{task.description}</td>
            <td className="border px-4 py-2">
              <button onClick={() => onEdit(task.id)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => onDelete(task.id)} className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
