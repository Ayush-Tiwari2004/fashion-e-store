import { ShoesCardData } from './ProductCard'
import ShoesData from '../../../API/ShoesData.json'

const Shoes = () => {
  return (
    <>
      <div className="bg-gray-800 mt-6 px-20">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">All Products</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-30 lg:grid-cols-4 gap-4">
          {
            ShoesData.map((products) => (
              <ShoesCardData key={products.id} products={products} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Shoes
