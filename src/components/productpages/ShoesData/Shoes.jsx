import { ShoesCardData } from '../ViewAllproduct/AllProductCard'
import AllProductsData from '../../../API/AllProductsData.json'
import Carousel from '../brandProducts/Carousel'

const Shoes = () => {
   const images = [
    "/images/ECTH21.jpeg",
    "/images/ECTH22.jpeg",
    "/images/ECTH23.jpeg",
    "/images/ECTH24.jpeg",
    "/images/ECTH25.jpeg"
  ];
  return (
    <>
      <div className="mt-6 px-10 md:px-20">
        <Carousel images={images}/>
        <h1 className="text-2xl font-semibold text-pink-600 dark:text-white my-4">All Products</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
          {
            AllProductsData.shoesData.map((products) => (
              <ShoesCardData key={products.id} products={products} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Shoes
