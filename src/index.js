import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';
import Courses from './pages/Courses';
import Tutorial from './pages/Tutorial';
import Practice from'./pages/Practice';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
// import 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<App/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/Tutorial' element={<Tutorial/>}/>
      <Route path='/Practice' element={<Practice/>}/>
      <Route path='/Jobs' element={<Jobs/>}/>
      <Route path='/Profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
