import React from 'react';
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { useLoaderData } from 'react-router-dom';

const ShoesDetails = () => {
  const product = useLoaderData();

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img
        src={product.images}
        alt={product.name}
        className="w-full md:w-1/5 object-contain rounded-lg"
      />
      <div className="md:w-1/2 text-gray-800 dark:text-white">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="my-2">{product.description}</p>
        <div className="flex gap-2">
          <p>{product.rating}</p>
          <p className='text-pink-600 flex gap-1 text-xl'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarHalf />
            </p>
        </div>
        <p>{`Category: ${product.category}`}</p>
        <p className="text-lg font-semibold text-green-600">{product.price}</p>
      </div>
    </div>
  );
};

export default ShoesDetails;
