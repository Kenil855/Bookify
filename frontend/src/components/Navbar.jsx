import React, { useState } from 'react';
import { TbToolsKitchen3 } from 'react-icons/tb';
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="box bg-gray-500 w-full p-5 flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white font-bold mr-4"
        >
          ☰
        </button>
        <div className="logo px-3"><TbToolsKitchen3 size={30} /></div>
        <h2 className='font-semibold text-2xl'>CafeTour</h2>
        
        <div className="relative w-64">
     
      <div className=" ml-195 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <IoSearch className="text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className=" ml-195 pl-10 pr-2 py-1 border w-full bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
        <div className="navitem flex ml-auto" style={{ fontFamily: "'Winky Sans', sans-serif" }}>
          <div className="flex items-center gap-0 font-bold">
            <h2 className="m-0 p-0">C</h2>
            <p className="m-0 p-0">afe</p>
            <h2 className="m-0 p-0">4</h2>
            <p className="m-0 p-0">me</p>
          </div>
        </div>
      </div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-700 text-white shadow-lg transition-transform duration-300 z-50 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5">
          <h3 className="text-lg font-bold ">Cafe DashBoard</h3>
          <p className='border-b-2 p-2 max-w-full'></p>
          <ul className="space-y-2">
            
            <li><Link to="/home" className="text-white ">Home</Link></li>
            <p className='border-b-2 max-w-full'></p>
            <li><Link to="/login"  className="text-white">Login</Link></li>
            <p className='border-b-2  max-w-full'></p>
            <li><Link to="/reservation"  className="text-white">Reservation</Link></li>
            <p className='border-b-2  max-w-full'></p>
            <li><Link to="/payment"  className="text-white">Payment</Link></li>
            <p className='border-b-2  max-w-full'></p>
            <li><Link to="/feedback"  className="text-white">Feedback</Link></li> 
          </ul>
        </div>
      </div>
    </div>
  );
}

