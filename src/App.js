import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
   <div className='min-h-screen bg-neutral-800'>
   <Navbar />
   <ToastContainer />
   <Router>
    <MainRouter />
   </Router>
   </div>
  );
}

export default App;
