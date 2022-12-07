import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Attendence from './pages/Attendence';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <div className=''>
          <Navbar />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="attendence" element={<Attendence />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App;
