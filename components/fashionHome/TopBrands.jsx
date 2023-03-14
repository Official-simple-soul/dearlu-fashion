import React from 'react';
import { Brands } from '../../data/data';
import Image from 'next/image';

function TopBrands() {
  return (
    <div className="bg-white py-16">
      <div className="flex justify-center items-center bg-primary-50 text-primary-500 px-5 py-4 mb-3">
        <h1 className="text-2xl d:text-4xl font-bold">Top Brands</h1>
      </div>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10 p-5">
        {Brands().map((data) => {
          const { img, id, title } = data;
          return (
                <li className="pb-4 shadow-lg my-2" key={id}>
                  <div className="h-24 flex justify-center items-center">
                    <Image
                      src={img}
                      width={170}
                      height={100}
                      alt={title}
                      className=""
                    />
                  </div>
                </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TopBrands;
