import { Link } from 'react-router-dom';

function Home({ tasks, setTasks }) {
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-700">Task Manager</h1>
          <Link to="/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            + New Task
          </Link>
        </div>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks available. Create your first task.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-blue-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Title</th>
                  <th className="px-4 py-3 font-semibold">Description</th>
                  <th className="px-4 py-3 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(task => (
                  <tr key={task.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{task.title}</td>
                    <td className="px-4 py-3">{task.description}</td>
                    <td className="px-4 py-3 flex justify-center gap-3">
                      <Link
                        to={`/edit/${task.id}`}
                        className="text-sm bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                      >
                        ✏️ Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
