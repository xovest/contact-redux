import { ToastContainer } from 'react-toastify';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      {/* /add /edit/:id */}
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<h1>Contact Book</h1>} />

        <Route path="/add" element={<h1>add component</h1>} />
        
        <Route path="/edit/:id" element={<h1>edit component with id</h1>} />
      </Routes>
    </div>
  );
}

export default App;
