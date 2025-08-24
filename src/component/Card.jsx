import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/config/reducers/cartslice';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Card = ({ title, description, image, id, price }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleAddToCart = () => {
    dispatch(addToCart({ title, description, image, id, price }));
    toast.success(`${title} has been added to your cart!`);
  };

  return (
    <div className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
      {/* Centered Image */}
      <div className="flex justify-center items-center h-64 bg-gray-100">
        <img
          src={image}
          alt="Product"
          className="max-h-full object-contain transition-transform duration-300 transform hover:scale-110"
        />
      </div>

      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>

        <div className="card-actions mt-6 flex justify-between gap-0">
          <button
            className="btn btn-primary px-6 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 transition-all duration-200"
            onClick={() => navigate(`/product/${id}`)}
          >
            See More
          </button>
          <button
            onClick={handleAddToCart}
            className="btn btn-secondary px-6 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 transition-all duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
