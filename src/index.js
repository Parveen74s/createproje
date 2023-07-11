import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import Myslider from './components/Myslider';
import Mylogin from './components/Mylogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Custom from './components/pages/Custom';
import Myformlayout from './components/Myformlayout';
import Formdesign1 from './components/Formdesign1';
import Formdesign2 from './components/Formdesign2';
import Myfetchapi from './components/Myfetchapi';
import Mydetailspage from './components/Mydetailspage';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<Mylogin />}></Route>
        <Route path='dashboard' element={<Myslider />}/>
        <Route path='custom' element={<Custom />}/>
        <Route path='myform' element={<Myformlayout/>}>
          <Route path='formdesign1' element={<Formdesign1/>}/>
          <Route path='formdesign2' element={<Formdesign2/>}/>
        </Route>
        <Route path='fetchapi' element={<Myfetchapi/>}/>
        <Route path='fetchapi/:id' element={<Mydetailspage/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

