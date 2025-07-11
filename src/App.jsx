// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask'; // ✅ Added EditTask import

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/create" element={<CreateTask tasks={tasks} setTasks={setTasks} />} />
        <Route path="/edit/:id" element={<EditTask tasks={tasks} setTasks={setTasks} />} /> {/* ✅ Added route */}
      </Routes>
    </Router>
  );
}

export default App;
