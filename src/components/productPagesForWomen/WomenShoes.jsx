import React from 'react'
import WomenAllProductData from '../../API/WomenAllProductData.json'
import { TshirtCardData } from '../productpages/ViewAllproduct/AllProductCard';
import Carousel from '../productpages/brandProducts/Carousel';

const WomenShoes = () => {
   const images = [
    "/carouselimgs/new12.jpeg",
    "/carouselimgs/new13.jpeg",
    "/carouselimgs/new14.jpeg",
    "/carouselimgs/new15.jpeg",
    "/carouselimgs/new16.jpeg"
  ];
  return (
     <div className="mt-6 px-10 md:px-20">
      <Carousel images={images}/>
      <h1 className="text-2xl font-semibold text-pink-600 dark:text-white my-4">All Products</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
          {
            WomenAllProductData.womenShoesData.map((products) => (
              <TshirtCardData key={products.id} products={products} />
            ))
          }
        </div>
      </div>
  )
}

export default WomenShoes;
