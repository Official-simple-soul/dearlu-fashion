import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Data } from '../../data/data';
import Link from 'next/link';
import { useGlobalContext } from '../../context/context';

function Recommended() {
  const { cart, setCart } = useGlobalContext([]);
  const handleAdd = (data) => {
    setCart([...cart, data]);
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center bg-primary-50 text-primary-500 px-5 py-2">
        <h1 className="">Recommended for you</h1>
        <Link href={'/products'}><h1 className="">
          See all{' '}
          <span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
        </h1></Link>
      </div>
      <div className="grid md:grid-cols-5 md:gap-10 p-5">
        {Data()
          .slice(11, 16)
          .map((data) => {
            const { img, title, price, id } = data;
            return (
              <>
                <ul>
                  <li className="bg-secondary-50 pb-4 shadow-lg" key={id}>
                    <Link href={`/view/${id}`}>
                      <div className="h-48 w-64 md:w-full mx-auto relative mb-6">
                        <Image src={img} fill alt={title} />
                      </div>
                    </Link>
                    <div className="px-5">
                      <h1 className="text-black">{title}</h1>
                      <h1 className="text-primary-300 text-sm my-2">
                        N {price}
                      </h1>
                      <button
                        className="bg-primary-400 text-white py-1 rounded-md w-full"
                        onClick={() => handleAdd(data)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </li>
                </ul>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Recommended;
