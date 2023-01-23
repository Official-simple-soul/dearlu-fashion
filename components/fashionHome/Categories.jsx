import React from 'react';
import { Data } from '../../data/data';
import Image from 'next/image';

function Categories() {
  return (
    <div className="p-5 bg-secondary-50 text-primary-500">
      <h1>Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-6 md:gap-4 py-4 md:space-y-3 md:space-y-0">
        {Data()
          .slice(0, 6)
          .map((data) => {
            return (
              <>
                <div
                  className="flex items-center space-x-4 bg-white shadow-md px-2 m-2 py-1"
                  key={data.id}
                >
                  <Image
                    src={data.img}
                    alt={data.title}
                    width={30}
                    height={30}
                  />
                  <h1 className="">{data.category}</h1>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Categories;
