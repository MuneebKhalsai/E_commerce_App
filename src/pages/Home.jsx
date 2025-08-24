import React from "react"
import useFetch from "../hooks/useFetch"
import Card from "../component/Card"

const Home = ({ onAddToCart }) => {
  const [loading, error, data] = useFetch("https://dummyjson.com/products/category/kitchen-accessories")

  if (loading) {
    return (
      <div className="flex justify-center h-[80vh] items-center text-3xl font-bold">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center h-[80vh] items-center text-3xl font-bold">
        <h1 className="text-red-500">Error occurred</h1>
      </div>
    )
  }

  // 👇 Products page ka hi data use kar rahe hain, bas Home me limited show karenge
  const featured = data.products.slice(0, 8)

  return (
    <div className="w-full">

      {/* 🔹 Hero Banner */}
      <div className="relative w-full h-[90vh]">
        <img
          src="https://img.freepik.com/free-photo/kitchen-utensils-background_23-2148519225.jpg"
          alt="Kitchen Accessories Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
            Upgrade Your Kitchen Today
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mb-6">
            Discover premium kitchen accessories designed to make your cooking experience easier and more stylish.
          </p>
          <a
            href="#products"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* 🔹 Featured Products (using same Card as Products page) */}
      <div id="products" className="max-w-8xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Featured Kitchen Accessories
        </h2>

        <div className="flex justify-center items-center flex-wrap gap-10">
          {featured.map(item => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.thumbnail}
              price={item.price}
              onAddToCart={onAddToCart} // 👈 Add to Cart bhi same tarah chalega
            />
          ))}
        </div>
      </div>

      {/* 🔹 Services / Reviews / Newsletter / Footer (same as tumne likha hai) */}
      {/* ... baaki code same rehne do */}
    </div>
  )
}

export default Home
