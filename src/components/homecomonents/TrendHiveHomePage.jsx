import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Testimonials } from './Testimonials';
import CatagryDataList from '../../API/CatagryDataList.json';
import { NavLink } from 'react-router-dom';

const TrendHiveHomePage = () => {

  return (
    <div>      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 dark:from-gray-800 to-blue-50 dark:to-slate-800 h-screen-80 flex items-center">
        <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Elevate Your <span className='text-pink-600'>Style</span> with TrendHive
            </h1>
            <p className="text-lg text-gray-600 dark:text-white mb-8">
              Shop the latest fashion trends in one place. Affordable, stylish, and made just for you.
            </p>
            <div className="flex gap-3">
              <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-800 transition cursor-pointer">
                Shop Women
              </button>
              <button className="border border-black dark:border-transparent px-8 py-3 rounded-full text-white bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition cursor-pointer">
                Shop Men
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Fashion Model"
              className="rounded-lg shadow-xl max-h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-gradient-to-r from-pink-50 dark:from-gray-800 to-blue-50 dark:to-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center dark:text-white mb-12">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {CatagryDataList.map((product, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 p-2 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover hover:scale-[1.03] rounded-2xl transition"
                />
                <div className="text-gray-900 dark:text-white">
                 <div className="flex flex-col my-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className='font-normal'>{product.qualityDiscription.length > 60 ? product.qualityDiscription.slice(0, 60) + "..." : product.qualityDiscription}</p>
                 </div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-gray-600 shadow-md bg-gray-200 rounded-full px-4 py-1">{product.price}</p>
                    <button className="flex items-center gap-2 bg-pink-600 dark:bg-gray-800 text-white py-1 px-4 rounded-full hover:bg-pink-700 dark:hover:bg-gray-900 transition cursor-pointer">
                      By now <span className='bg-white rounded-full text-black text-[14px] p-0.5 -rotate-45'><FaArrowRight /></span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <NavLink to="man/viewallproduct">
            <button className="text-pink-600 bg-gray-50 dark:text-white px-8 py-3 rounded-full dark:bg-gray-700 dark:hover:bg-gray-600 transition cursor-pointer">
              View All Products
            </button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Summer Sale</h2>
          <p className="text-xl mb-8">Up to 50% off on selected items. Limited time offer!</p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-pink-50 dark:from-gray-800 to-blue-50 dark:to-slate-800">
        <div className="container mx-auto px-6 max-w-4xl text-center text-gray-800 dark:text-white">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="mb-8">Get updates on new arrivals, special offers and fashion tips.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 border outline-none border-gray-300 rounded-full flex-grow max-w-md"
            />
            <button className="bg-pink-600 hover:bg-pink-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-full transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default TrendHiveHomePage;