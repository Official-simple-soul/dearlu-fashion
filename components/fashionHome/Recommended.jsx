import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Data } from '../../data/data';
import Link from 'next/link';
import { useGlobalContext } from '../../context/context';
import RecommendedRow from './RecommendedRow';
function Recommended() {
  const { cart, setCart } = useGlobalContext([]);

  const handleAdd = (data) => {
    if (cart.some((e) => e.id === data.id)) {
      setCart(cart.filter((e) => e.id !== data.id));
    } else {
      setCart((f) => [...f, data]);
    }
  };

  return (
    <div className="bg-white md:w-[80%] md:mx-auto">
      <div className="flex justify-between items-center bg-primary-50 text-primary-500 px-5 py-2">
        <h1 className="">Recommended for you</h1>
        <Link href={'/products'}>
          <h1 className="">
            See all{' '}
            <span>
              <FontAwesomeIcon icon={faAnglesRight} />
            </span>
          </h1>
        </Link>
      </div>
      <ul className="grid md:grid-cols-4 md:gap-10 p-5">
        {Data()
          .slice(11, 15)
          .map((data) => {
            return <RecommendedRow data={data} key={data.id} handleAdd={handleAdd}/>;
          })}
      </ul>
    </div>
  );
}

export default Recommended;
