import React from 'react';
import Image from 'next/image';
import { KidsData } from '../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function KidsCollection() {
  return (
    <div className="pb-16 bg-white">
      <div className="top h-40 md:h-80 relative">
        <Image
          src={'/Images/header/kiddiescollectionheader.png'}
          fill
          alt="jewelry header"
        />
        <div className="top-0 bottom-0 right-0 left-0 bg-primary-400 absolute opacity-40"></div>
        <div className="absolute top-[40%] left-[30%]">
          <h1 className="text-2xl md:text-5xl font-bold">
            Kiddies Collections 2022
          </h1>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-8 px-5 py-12">
        {KidsData().map((data) => {
          return (
                <li className="shadow-lg" key={data.id}>
                  <div className="md:h-48 h-40 relative">
                    <Image src={data.img} fill alt={data.title} className="rounded-md" />
                  </div>
                </li>
          );
        })}
      </ul>
      <div className="top h-40 md:h-[450px] relative">
        <Image
          src={'/Images/header/backtoschool.png'}
          fill
          alt="jewelry header"
        />
        <div className="absolute bottom-0 right-0">
          <h1 className="text-2xl md:text-4xl font-bold bg-primary-400 px-5 py-2">
            Shop Now
            <span className="text-2xl ml-4">
              <FontAwesomeIcon icon={faAnglesRight} />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default KidsCollection;
