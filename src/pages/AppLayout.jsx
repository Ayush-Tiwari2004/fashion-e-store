import React from 'react'
import Header from '../components/homecomonents/Header'
import { Footer } from '../components/homecomonents/Footer'
import { Outlet } from 'react-router-dom'
import SecondHeader from '../components/homecomonents/SecondHeader'

const AppLayout = () => {
  return (
    <>
    <div className='sticky top-0 z-50'>
      <Header />
      <SecondHeader /> 
    </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
