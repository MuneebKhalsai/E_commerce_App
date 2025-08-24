import React from "react"
import { Wrench, Truck, Shield, Headphones, Star, Award, ThumbsUp } from "lucide-react"

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Product Customization",
      desc: "We provide kitchen accessories tailored to your needs with premium finishing and designs.",
      icon: <Wrench className="w-10 h-10 text-primary" />,
    },
    {
      id: 2,
      title: "Fast Delivery",
      desc: "Get your products delivered to your doorstep quickly with our trusted delivery service.",
      icon: <Truck className="w-10 h-10 text-primary" />,
    },
    {
      id: 3,
      title: "Secure Shopping",
      desc: "Your online shopping is fully safe and protected with our secure payment system.",
      icon: <Shield className="w-10 h-10 text-primary" />,
    },
    {
      id: 4,
      title: "24/7 Support",
      desc: "Our dedicated support team is available anytime to help you with your queries.",
      icon: <Headphones className="w-10 h-10 text-primary" />,
    },
  ]

  const whyChooseUs = [
    {
      id: 1,
      title: "Top Quality Products",
      desc: "We never compromise on the quality of our products.",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
    },
    {
      id: 2,
      title: "Trusted by Customers",
      desc: "Thousands of happy customers shop with us regularly.",
      icon: <ThumbsUp className="w-8 h-8 text-blue-500" />,
    },
    {
      id: 3,
      title: "Certified & Reliable",
      desc: "We are certified suppliers with years of experience.",
      icon: <Award className="w-8 h-8 text-green-500" />,
    },
  ]

  return (
    <div className="w-full">
      {/* 🔹 Banner Section */}
     {/* 🔹 Banner Section */}
<div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
  <img
    src="https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg"
    alt="Services Banner"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">Our Services</h1>
    <p className="text-white text-base md:text-lg max-w-2xl">
      Premium services to make your shopping experience smooth and reliable.
    </p>
  </div>
</div>


      {/* 🔹 Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Why Choose Us */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyChooseUs.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center mb-5">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Call to Action */}
     {/* 🔹 Call to Action */}
<div className="py-20 px-6 bg-gradient-to-r from-gray-50 to-white text-center">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold mb-4 text-gray-800">
      Ready to Upgrade Your Kitchen?
    </h2>
    <p className="mb-8 text-lg text-gray-600">
      Discover premium, durable, and stylish kitchen accessories made for your lifestyle.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="/products"
        className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-primary/90 transition"
      >
        Shop Now
      </a>
      <a
        href="/contact"
        className="bg-white border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Contact Us
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Services