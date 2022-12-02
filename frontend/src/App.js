import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Attendence from './pages/Attendence';

function App() {
  return (
    <>
      <div className=''>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="attendence" element={<Attendence />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
