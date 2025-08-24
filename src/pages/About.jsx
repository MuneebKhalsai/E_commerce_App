import React from "react"
import { Users, Award, Target, ShoppingBag } from "lucide-react"

const About = () => {
  return (
    <div className="w-full">
      {/* 🔹 Banner Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">About Us</h1>
          <p className="text-white text-base md:text-lg max-w-2xl">
            Learn more about our journey, mission, and commitment to quality.
          </p>
        </div>
      </div>

      {/* 🔹 Who We Are */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
              alt="Our Team"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are a dedicated team providing premium kitchen accessories and home solutions. 
              Our mission is to bring innovation, style, and durability to every household. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              With years of experience and thousands of satisfied customers, 
              we focus on delivering products that combine functionality with modern design.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Our Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600 text-sm">We prioritize customer satisfaction above all else.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <Award className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600 text-sm">Only the best and most durable products make it to you.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <Target className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm">To deliver stylish, affordable, and reliable solutions.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <ShoppingBag className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Trusted Brand</h3>
              <p className="text-gray-600 text-sm">Thousands of happy customers shop with us regularly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 CTA Section */}
   {/* 🔹 Join Our Journey Section */}
<div className="py-16 px-6 bg-gray-50 text-center">   {/* <-- white ki jagah bg-gray-50 */}
  <h2 className="text-3xl font-bold mb-4 text-gray-800">Join Our Journey</h2>
  <p className="mb-6 max-w-2xl mx-auto text-gray-600">
    Be part of our growing family and explore the best kitchen solutions crafted for you.
  </p>
  <a
    href="/contact"
    className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-primary/90 transition"
  >
    Contact Us
  </a>
</div>

    </div>
  )
}

export default About