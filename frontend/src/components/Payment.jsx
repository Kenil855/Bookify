import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaGooglePay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const total = location.state?.total || 0;

  const handlePayment = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-blue-200">
      <form
        onSubmit={handlePayment}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Payment</h3>

        <div className="mb-6">
          <label className="block text-gray-600 text-xl mb-1 ">Total Amount:</label>
          <div className="text-xl font-semibold text-gray-800">${total}</div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200 font-semibold"
        >
          Pay Now
        </button>

        <div className="flex items-center justify-center mt-6 space-x-8">
          <button type="button" onClick={handlePayment}>
            <FaGooglePay size={40} className="text-green-600 hover:scale-110 transition-transform" />
          </button>
          <button type="button" onClick={handlePayment}>
            <SiPaytm size={35} className="text-blue-700 hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center justify-center text-blue-500 hover:underline"
          >
            <FaArrowLeft className="mr-2" /> Back to Cart
          </button>
        </div>
      </form>
    </div>
  );
}

