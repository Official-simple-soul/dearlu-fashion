import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
function SearchRow({ data, handleAdd, setShowModal }) {
  const { title, img, id, price } = data;
  const [added, setAdded] = useState(false);
  return (
    <div
      className="shadow-lg mb-2 px-10 flex items-center text-black justify-between  bg-[#FDFDFD] md:space-x-12 min-w-[400px]"
      key={id}
    >
      <div className="left flex items-center space-x-4">
        <Link href={`/view/${id}`}>
          <div className="relative h-24 md:h-40 w-24 md:w-40" onClick={()=>setShowModal(false)}>
            <Image src={img} alt={title} fill />
          </div>
        </Link>
        <div className="text-black">
          <h1 className="md:text-3xl font-bold">{title}</h1>
          <h1 className="text-sm font-bold md:text-xl text-primary-400">
            #{price}
          </h1>
        </div>
      </div>
      <div className="right">
        <button
          className={`${
            added ? 'bg-red-500' : 'bg-primary-400'
          }  text-white py-1 rounded-md px-2`}
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

export default SearchRow;
