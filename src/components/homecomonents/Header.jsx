import React, { useState } from 'react'
import { IoBagOutline, IoSearchSharp } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { Theme } from '../../commonComponents/Theme';
import { Popups } from '../../pages/Popups';
import { NavLink } from 'react-router-dom'

const Header = ({ activeCategory, handleCategoryClick }) => {
  // const [activeCategory, setActiveCategory] = useState(() => {
  //   return localStorage.getItem("activeCategory") || "man";
  // });

  // const handleCategoryClick = (category) => {
  //   if (activeCategory !== category) {
  //     setActiveCategory(category);
  //     localStorage.setItem("activeCategory", category);
  //   }
  // };

  return (
    <header>
      <div className="flex justify-between items-center bg-white dark:bg-[#2C2C2C] h-14 px-4 sm:px-6 md:px-8 lg:px-20">
        {/* Logo & Nav */}
        <div className="flex gap-8 items-center">
          <NavLink to="/" className='text-2xl font-semibold text-gray-800 dark:text-pink-600'>
            Trend<span className='text-pink-600'>Hive</span>
          </NavLink>
          <div className="hidden lg:flex text-gray-800 dark:text-white font-semibold">
            {/* Man */}
            <div
              onClick={() => handleCategoryClick("man")}
              className={`flex items-center gap-6 cursor-pointer transition
                ${activeCategory === "man"
                  ? "bg-gray-100 dark:bg-gray-700"
                  : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
            >
              <span className='border-r border-gray-300 h-14'></span>
              <p className='px-5'>Man</p>
              <span className='border-r border-gray-300 h-14'></span>
            </div>

            {/* Women */}
            <div
              onClick={() => handleCategoryClick("women")}
              className={`flex items-center gap-6 cursor-pointer transition
                ${activeCategory === "women"
                  ? "bg-gray-100 dark:bg-gray-700"
                  : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
            >
              <p className='ps-10'>Women</p>
              <span className='border-r border-gray-300 h-14'></span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex rounded-2xl max-w-[650px] w-full border border-gray-200 text-gray-500 bg-white px-4 py-1 mx-4">
          <input
            type="text"
            className='w-full bg-transparent outline-none'
            placeholder='Search for products, brands and more' />
          <IoSearchSharp className='text-2xl ms-2' />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl dark:text-white">
          <div className="hidden md:flex gap-6 items-center">
            <div className="group relative inline-block">
              <FiUsers className='cursor-pointer' />
              <div className="absolute top-[36px] -right-30 w-64 opacity-0 -translate-y-2 pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                transition-all duration-300 ease-in-out z-40">
                <Popups />
              </div>
            </div>
            <FaRegHeart className='cursor-pointer' />
            <IoBagOutline className='cursor-pointer' />
          </div>
          <Theme />
        </div>
      </div>
    </header>
  );
};

export default Header;
