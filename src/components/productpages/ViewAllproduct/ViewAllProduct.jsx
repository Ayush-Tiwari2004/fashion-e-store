import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios'
import ProductCard from "./ProductCard";
import ProductCrousels from "./ProductCrousels";

export const ViewAllProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    const fetchProductData = async () => {
        try {
            setLoading(true); //show loding before API call
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            setError('Something went worng white fetching the product data, please try again later!');
            console.error("API error is: ", error)
        } finally {
            setLoading(false) //stop loding after fetch the data
        }
    }
    useEffect(() => {
        fetchProductData();
    }, [])
    return (
        <>
            <ProductCrousels />
            <div className="bg-gray-800 mt-6 px-20">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">All Products</h1>
                {loading && <p className="text-blue-600 text-lg font-semibold">Lodong Products...</p>}
                {error && <p className="text-red-600">{error}</p>}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6 mx-5">
                    {
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}