import React from 'react'
import ShirtsBrandsGamingTools from '../../../API/ShirtsBrandsGamingTools.json'
import { TshirtCardData } from '../ViewAllproduct/AllProductCard';
import Carousel from './Carousel';

const Brand = () => {
   const images = [
    "/src/assets/brandProducts/ECHT.jpeg",
    "/src/assets/brandProducts/ECTH2.jpeg",
    "/src/assets/brandProducts/ECTH3.jpeg",
    "/src/assets/brandProducts/ECTH4.jpeg",
    "/src/assets/brandProducts/ECTH5.jpeg"
  ];
  return (
     <div className="mt-6 px-10 md:px-20">
      <Carousel images={images}/>
        <h1 className="text-2xl font-semibold text-pink-600 dark:text-white my-4">All Products</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
          {
            ShirtsBrandsGamingTools.brandsData.map((products) => (
              <TshirtCardData key={products.id} products={products} />
            ))
          }
        </div>
      </div>
  )
}

export default Brand;
