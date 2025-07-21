import React from 'react'
import NavbarLinksData from '../../API/NavbarLinksData.json'
import { NavLink } from 'react-router-dom'

const SecondHeader = () => {
  return (
    <>
      <nav className='dark:bg-gray-700 bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-20 shadow-md flex items-center'>
        <h1 className='bg-pink-600 text-white p-3 ms-5 -skew-6 rotate-[6deg]'>Sale</h1>
        <div className="flex ites-center overflow-scroll whitespace-nowrap">
          {
            NavbarLinksData.map((item) => {
              return (
                <div key={item.navlink} className="ms-10">
                  <NavLink to={item.links}>
                  <p className='text-gray-500 dark:text-white cursor-pointer'>{item.navlink}</p>
                  </NavLink>
                </div>
              )
            })
          }
        </div>
      </nav>
    </>
  )
}

export default SecondHeader
