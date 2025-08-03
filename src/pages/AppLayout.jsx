import React, { useState } from 'react'
import Header from '../components/homecomonents/Header'
import { Footer } from '../components/homecomonents/Footer'
import { Outlet } from 'react-router-dom'
import SecondHeader from '../components/homecomonents/SecondHeader'

const AppLayout = () => {
   const [activeCategory, setActiveCategory] = useState("man");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    localStorage.setItem("activeCategory", category);
  };
  return (
    <>
    <div className='sticky top-0 z-50'>
      <Header
        activeCategory={activeCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <SecondHeader man={activeCategory === "man"} />
    </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout;
