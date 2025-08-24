import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../component/Card'

const Products = () => {
    const [loading, error, data] = useFetch('https://dummyjson.com/products/category/kitchen-accessories')
    
    if (loading) {
        return (
            <div className='flex justify-center h-[80vh] items-center text-3xl font-bold'>
                <span className="loading loading-spinner text-primary"></span>
            </div>
        )
    }

    if (error) {
        return (
            <div className='flex justify-center h-[80vh] items-center text-3xl font-bold'>
                <h1 className='text-red-300'>Error occured</h1>
            </div>
        )
    }

    return (
        <div className="w-full">
            {/* 🔹 Page Banner */}
            <div className="relative w-full h-[80vh] mb-16">
                <img
                    src="https://img.freepik.com/free-vector/cooking-tools-background-composition-with-realistic-images-kitchenware-items-made-steel-plastic-wood_1284-32276.jpg"
                    alt="Products Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-white text-6xl font-extrabold drop-shadow-lg mb-4">
                        Our Products
                    </h1>
                    <p className="text-white text-lg max-w-2xl opacity-90">
                        Explore our premium kitchen accessories collection. Designed for
                        style, durability, and making your cooking joyful.
                    </p>
                </div>
            </div>

            {/* 🔹 Products Grid */}
            <div className='flex justify-center items-center flex-wrap gap-10 my-10'>
                {data.products.map(item => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.thumbnail}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products
