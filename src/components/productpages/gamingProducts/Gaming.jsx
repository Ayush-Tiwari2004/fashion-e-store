import React from 'react'
import ShirtsBrandsGamingTools from '../../../API/ShirtsBrandsGamingTools.json'
import { TshirtCardData } from '../ViewAllproduct/AllProductCard';
import Carousel from '../brandProducts/Carousel';

const Gaming = () => {
   const images = [
    "/gamingtools/ECTH6.jpeg",
    "/gamingtools/ECTH7.jpeg",
    "/gamingtools/ECTH8.jpeg",
    "/gamingtools/ECTH9.jpeg",
    "/gamingtools/ECTH10.jpeg"
  ];
  return (
     <div className="mt-6 px-10 md:px-20">
      <Carousel images={images}/>
      <h1 className="text-2xl font-semibold text-pink-600 dark:text-white my-4">All Products</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
          {
            ShirtsBrandsGamingTools.gamingToolsData.map((products) => (
              <TshirtCardData key={products.id} products={products} />
            ))
          }
        </div>
      </div>
  )
}

export default Gaming;
