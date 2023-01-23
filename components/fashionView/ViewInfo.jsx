import React, { useState } from 'react';

function ViewInfo() {
  const [active, setActive] = useState('Product information');
  const Nav = [
    { title: 'Product information' },
    { title: 'Specifications' },
    { title: 'Reviews' },
  ];

  return (
    <div className='pt-20'>
      <div className="flex justify-center items-center pb-3">
        {Nav.map((nav) => {
          return (
            <>
              <h1
                className={`border-b-2 cursor-pointer transition-all ease-in-out duration-500 ${
                  active === nav.title
                    ? 'border-primary-500 text-primary-400'
                    : 'border-scondary-100 text-secondary-100'
                } pr-48 pl-4`}
                onClick={(e) => setActive(e.currentTarget.innerHTML)}
              >
                {nav.title}
              </h1>
            </>
          );
        })}
      </div>
      <div className="content pb-8 mt-4">
        {
            active===Nav[0].title?
            <>
                <p className='mb-8 text-primary-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
            </>
            :
            active===Nav[1].title?
            <>
                 <p  className='text-[yellow] mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
                 <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
            </>
            :
            <>
             <p className='text-[red] mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
             <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
            </>

        }
      </div>
    </div>
  );
}

export default ViewInfo;
