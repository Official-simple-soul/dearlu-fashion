import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Data } from '../../data/data';
import Link from 'next/link';

function Brandsfavourite() {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center bg-primary-50 text-primary-500 px-5 py-2">
        <h1 className="">Brands Favourite</h1>
        <Link href={'/products'}><h1 className="">
          See all{' '}
          <span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
        </h1></Link>
      </div>
      <div className="grid md:grid-cols-5 md:gap-10 p-5">
        {Data()
          .slice(6, 11)
          .map((data) => {
            const { img, title, id } = data;

            return (
              <>
                <ul>
                  <li className="bg-secondary-50 pb-4 shadow-lg" key={Data()[7].id}>
                    <div className="h-48 w-64 md:w-full mx-auto relative mb-6">
                      <Link href={`/view/${Data()[7].id}`}>
                        <Image src={Data()[7].img} fill alt={Data()[7].title} />
                      </Link>
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

export default Brandsfavourite;
