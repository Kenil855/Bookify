
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Succesfull from './components/Succesfull';
import Login from './components/Login';
import Reservation from './components/Reservation';
import Payment from './components/Payment';
import Item from './components/Item';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Succesfull />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/item" element={<Item/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
