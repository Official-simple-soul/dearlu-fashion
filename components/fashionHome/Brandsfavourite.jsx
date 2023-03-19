import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Data } from '../../data/data';
import Link from 'next/link';

function Brandsfavourite() {
  return (
    <div className="bg-white md:w-[80%] md:mx-auto">
      <div className="flex justify-between items-center bg-primary-50 text-primary-500 px-5 py-2">
        <h1 className="">Brands Favourite</h1>
        <Link href={'/products'}>
          <h1 className="">
            See all{' '}
            <span>
              <FontAwesomeIcon icon={faAnglesRight} />
            </span>
          </h1>
        </Link>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-3 p-5">
        {Data()
          .slice(6, 10)
          .map((data) => {
            return (
              <li
                className="bg-secondary-50 pb-4 shadow-lg h-40 w-40 md:h-48 md:w-full mx-auto relative mb-6"
                key={data.id}
              >
                <Link href={`/view/${data.id}`}>
                  <Image src={data.img} fill alt={data.title} className='rounded-md'/>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Brandsfavourite;
