import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import Myslider from './components/Myslider';
import Mylogin from './components/Mylogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Custom from './components/pages/Custom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='' element={<Mylogin/>}></Route>
        <Route path='dashboard' element={<Myslider/>}/>
        <Route path='custom' element={<Custom/>}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

