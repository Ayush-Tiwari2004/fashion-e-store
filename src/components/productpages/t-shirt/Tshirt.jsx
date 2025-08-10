import React from 'react'
import AllProductsData from '../../../API/AllProductsData.json'
import { TshirtCardData } from '../ViewAllproduct/AllProductCard';
import Carousel from '../brandProducts/Carousel';
import tshirtImg from "/src/assets/tshirtimg/ECTH16.jpeg"
// import ProductSearch from './ProductSerch';

const Tshirt = () => {
   const images = [
    {tshirtImg},
    "/src/assets/tshirtimg/ECTH17.jpeg",
    "/src/assets/tshirtimg/ECTH18.jpeg",
    "/src/assets/tshirtimg/ECTH19.jpeg",
    "/src/assets/tshirtimg/ECTH20.jpeg"
  ];
  return (
     <div className="mt-6 px-10 md:px-20">
      {/* <ProductSearch /> */}
      <Carousel images={images}/>
      <h1 className="text-2xl font-semibold text-pink-600 dark:text-white my-4">All Products</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
          {
            AllProductsData.tshirtData.map((products) => (
              <TshirtCardData key={products.description} products={products} />
            ))
          }
        </div>
      </div>
  )
}

export default Tshirt;
