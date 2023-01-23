import React from 'react';
import Image from 'next/image';
import { Jewelry } from '../../data/data';
import Link from 'next/link';

function Jewelries() {
  return (
    <div className="py-16 bg-white">
      <div className="top h-40 md:h-80 relative">
        <Image
          src={'/images/header/jeweryheader.png'}
          fill
          alt="jewelry header"
        />
        <div className="absolute top-[40%] left-6">
          <h1 className="text-2xl md:text-4xl font-bold">
            20% OFF YOUR FAVOURITE JEWELLERY
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 px-5 py-12">
        {Jewelry().map((data) => {
          return (
            <>
              <ul>
                <li className=" pb-4 shadow-lg" key={data.id}>
                  <div className="md:h-64 h-40 relative">
                  <Link href={`/view/${data.id}`}><Image src={data.img} fill alt={data.title} className="" /></Link>
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

export default Jewelries;
