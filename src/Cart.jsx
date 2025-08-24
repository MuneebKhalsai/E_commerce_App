import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from './config/reducers/cartslice';
import { FaTrash } from 'react-icons/fa';
import Modal from "./component/Modal";


function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsModalOpen(true); // open modal
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl flex flex-col">
                <div className="bg-gray-100 flex justify-center items-center h-56">
                  <img src={item.image} alt={item.title} className="object-contain h-full p-4" />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    <p className="mt-2 text-sm text-gray-700">Price: ${item.price}</p>
                    <p className="text-sm text-gray-700">
                      <strong>Subtotal:</strong> ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <button
                        className="px-3 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded"
                        onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>
                      <span className="text-base font-medium">{item.quantity}</span>
                      <button
                        className="px-3 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded"
                        onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="flex items-center gap-2 text-sm font-semibold py-1.5 px-3 rounded-md bg-red-500 hover:bg-red-600 text-white transition-all"
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <FaTrash className="text-sm" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-end">
            <h2 className="text-2xl font-bold text-gray-800">Total: ${total.toFixed(2)}</h2>
            <button
              onClick={handleCheckout} // open modal
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Thank You!"
        message="Your order has been placed successfully. We appreciate your shopping!"
      />
    </div>
  );
}

export default Cart;
