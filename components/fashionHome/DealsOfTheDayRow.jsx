import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
function DealsOfTheDayRow({ data, handleAdd }) {
  const [added, setAdded] = useState(false);
  const { img, title, price, id } = data;
  return (
    <li className="bg-secondary-50 pb-4 shadow-lg" key={id}>
      <Link href={`/view/${id}`}>
        <div className="h-48 w-48 md:w-full mx-auto relative mb-6">
          <Image src={img} fill alt={title} className='rounded-md'/>
        </div>
      </Link>
      <div className="px-5">
        <h1 className="text-black">{title}</h1>
        <h1 className="text-primary-300 text-sm my-2">N {price}</h1>
        <button
          className={`${
            added ? 'bg-red-500' : 'bg-primary-400'
          }  text-white py-1 rounded-md w-full`}
          onClick={() => {
            handleAdd(data);
            setAdded(!added);
          }}
        >
          {added?'Remove from cart' : 'Add to cart'} 
        </button>
      </div>
    </li>
  );
}

export default DealsOfTheDayRow;
