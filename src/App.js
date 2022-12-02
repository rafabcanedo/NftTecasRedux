import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from './routes';

function App() {
  return (
   <div className='min-h-screen bg-neutral-800'>
   <Navbar />
   <Router>
    <MainRouter />
   </Router>
   </div>
  );
}

export default App;
