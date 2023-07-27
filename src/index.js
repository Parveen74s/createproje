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
import Myerrorpage from './Myerrorpage';
import Mychart from './components/Mychart';
import { Auth0Provider } from '@auth0/auth0-react';
import Myauth0 from './components/Myauth0';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-mbmvtg85og4plmm7.us.auth0.com"
    clientId="1GYEiJqIvd4iiJitSMOCFp4Snm79TDBr"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path='' element={<Mylogin />}></Route> */}
        <Route path='' element={<Myauth0/>}></Route>
        <Route path='dashboard' element={<Myslider />}/>
        <Route path='custom' element={<Custom />}/>
        <Route path='myform' element={<Myformlayout/>}>
          <Route path='formdesign1' element={<Formdesign1/>}/>
          <Route path='formdesign2' element={<Formdesign2/>}/>
          <Route path='mychart' element={<Mychart/>}/>
        </Route>
        <Route path='fetchapi' element={<Myfetchapi/>}/>
        <Route path='fetchapi/:id' element={<Mydetailspage/>}/>
        <Route path='*' element={<Myerrorpage/>}/>
        </Routes>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

