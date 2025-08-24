import React from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

const Modal = ({ isOpen, onClose, title, message }) => {
  const navigate = useNavigate(); // hook initialize

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();          // Modal close state update
    navigate('');      // Navigate to Home page
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96 text-center relative">
        <h2 className="text-3xl font-bold mb-4 text-green-700">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={handleClose}
          className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
