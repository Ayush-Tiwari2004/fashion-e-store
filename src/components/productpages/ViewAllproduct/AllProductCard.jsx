import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { MdOutlineCurrencyRupee } from "react-icons/md";

const ProductCard = ({ product }) => {
    return (
        <>
            <div>
                <div className="bg-white dark:bg-slate-700 p-2 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-40 object-contain mx-auto hover:scale-[1.03] transition"
                    />
                    <div className="text-gray-900 dark:text-white">
                        <div className="flex flex-col my-4">
                            {/* <h3 className="text-lg font-semibold">{product.title}</h3> */}
                            <p className='font-normal'>{product.title.length > 60 ? product.title.slice(0, 60) + "..." : product.title}</p>
                        </div>
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-gray-600 shadow-md bg-gray-200 rounded-full px-4 py-1">{product.price}</p>
                            <button className="flex items-center gap-2 bg-pink-600 dark:bg-gray-800 text-white py-1 px-4 rounded-full hover:bg-pink-700 dark:hover:bg-gray-900 transition cursor-pointer">
                                By now <span className='bg-white rounded-full text-black text-[14px] p-0.5 -rotate-45'><FaArrowRight /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;


export const ShoesCardData = ({ products }) => {
    return (
        <>
            <NavLink to={products.id}>
                <div>
                    <div className="bg-white dark:bg-slate-700 p-2 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                        <img
                            src={products.images}
                            alt={products.name}
                            className="h-40 object-contain mx-auto hover:scale-[1.03] transition"
                        />
                        <div className="text-gray-900 dark:text-white">
                            <div className="flex flex-col my-4">
                                <p className='font-semibold'>{products.name.length > 30 ? products.name.slice(0, 30) + "..." : products.name}</p>
                                <h3 className="text-sm">{products.description.length > 30 ? products.description.slice(0, 30) + "..." : products.description}</h3>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-gray-600 shadow-md bg-gray-200 rounded-full px-4 py-1">{products.price}</p>
                                <button className="flex items-center gap-2 bg-pink-600 dark:bg-gray-800 text-white py-1 px-4 rounded-full hover:bg-pink-700 dark:hover:bg-gray-900 transition cursor-pointer">
                                    By now <span className='bg-white rounded-full text-black text-[14px] p-0.5 -rotate-45'><FaArrowRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export const TshirtCardData = ({ products }) => {
    return (
        <>
            <NavLink to={products.id}>
                <div>
                    <div className="bg-white dark:bg-slate-700 p-2 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                        <img
                            src={products.images}

                            alt={products.name}
                            className="h-40 object-contain mx-auto hover:scale-[1.03] transition"
                        />
                        <div className="text-gray-900 dark:text-white">
                            <div className="flex flex-col my-4">
                                <h3 className="text-sm">{products.description.length > 30 ? products.description.slice(0, 30) + "..." : products.description}</h3>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <div className="flex items-center text-gray-700 shadow-md bg-gray-200 rounded-full px-4 py-1">
                                    <MdOutlineCurrencyRupee />
                                    <p className="text-gray-600">{products.price}</p>
                                </div>
                                <button className="flex items-center gap-2 bg-pink-600 dark:bg-gray-800 text-white py-1 px-4 rounded-full hover:bg-pink-700 dark:hover:bg-gray-900 transition cursor-pointer">
                                    By now <span className='bg-white rounded-full text-black text-[14px] p-0.5 -rotate-45'><FaArrowRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}


export const ShirtCardData = ({ products }) => {
    return (
        <>

            <NavLink to={products.id}>
                <div>
                    <div className="bg-white dark:bg-slate-700 p-2 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                        <img
                            src={products.images}
                            alt={products.name}
                            className="h-40 object-contain mx-auto hover:scale-[1.03] transition"
                        />
                        <div className="text-gray-900 dark:text-white">
                            <div className="flex flex-col my-4">
                                {/* <p className='font-semibold'>{products.name.length > 30 ? products.name.slice(0, 30) + "..." : products.name}</p> */}
                                <h3 className="text-sm">{products.description.length > 30 ? products.description.slice(0, 30) + "..." : products.description}</h3>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <div className="flex items-center text-gray-700 shadow-md bg-gray-200 rounded-full px-4 py-1">
                                    <MdOutlineCurrencyRupee />
                                    <p className="text-gray-600">{products.price}</p>
                                </div>
                                <button className="flex items-center gap-2 bg-pink-600 dark:bg-gray-800 text-white py-1 px-4 rounded-full hover:bg-pink-700 dark:hover:bg-gray-900 transition cursor-pointer">
                                    By now <span className='bg-white rounded-full text-black text-[14px] p-0.5 -rotate-45'><FaArrowRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

