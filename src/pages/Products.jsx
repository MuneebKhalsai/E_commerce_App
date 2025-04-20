import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../component/Card'

const Products = () => {
    const [loading, error, data] = useFetch('https://dummyjson.com/products/category/groceries')
    

    if (loading) {
        return <div className=' flex justify-center h-[80vh] items-center text-3xl font-bold'>
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }

    if (error) {
        return <div className=' flex justify-center h-[80vh] items-center text-3xl font-bold'>
            <h1 className='text-red-300'>Error occured</h1>
        </div>
    }
    return (
        <div className='flex justify-center items-center flex-wrap gap-10 my-10'>
            {data.products.map(item => {
                return <Card
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.thumbnail}
                price={item.price} 
              />
              
                            })}
        </div>
    )
}

export default Products
