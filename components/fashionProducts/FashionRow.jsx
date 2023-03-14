import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

function FashionRow({ grid, id, title, img, price, handleAdd, data }) {
  const [heart, setHeart] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <div className={`${grid?'flex-col':'md:flex items-center md:space-x-12'} card text-black my-2 shadow-md p-2`} key={id}>
      <Link href={`/view/${id}`}>
        <div className={`relative h-64 md:h-48 ${grid?'w-':'md:w-64'} mb-4`}>
          <Image src={img} alt="" fill className="bg-secondary-50 p-5" />
        </div>
      </Link>
      <div className={`${grid?'':'md:space-y-2'}`}>
        <h1>{title}</h1>
        <h1 className="my-3 text-primary-300">N {price}</h1>
        <div className="mb-4 flex-col space-y-4">
          <p className="flex items-center">
            <AiFillStar className="text-[#FF9800] mr-2" /> 4.3{' '}
            <span className="text-secondary-100 ml-2">(30 Reviews)</span>
          </p>
          <div className="div">
            {heart ? (
              <AiFillHeart
                className={`text-red-400 text-2xl mr-8`}
                onClick={() => setHeart(!heart)}
              />
            ) : (
              <AiOutlineHeart
                className={`text-2xl mr-8`}
                onClick={() => setHeart(!heart)}
              />
            )}
          </div>
        </div>
        <button
          className={`${
            added ? 'bg-red-500' : 'bg-primary-400'
          } text-white px-4 py-1 rounded-md`}
          onClick={() => {
            handleAdd(data);
            setAdded(!added);
          }}
        >
          {added ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}

export default FashionRow;
