import React, { useState } from 'react';

function SwitchProducts({setSwitchName}) {
  const [active, setActive] = useState('Shoes');
  
  
  const Switch = [
    { route: 'Shoe', id: 1 },
    { route: 'Jewelries', id: 2 },
    { route: 'Clothes', id: 3 },
    { route: 'Sunglasses', id: 4 },
    { route: 'Wristwatches', id: 5 },
  ];

  return (
    <div className="flex justify-center bg-primary-400 pb-5">
      <ul className="flex flex-wrap justify-center items-center rounded-md">
        {Switch.map((switches, idx) => {
          return (
            <>
              <li key={idx}
                className={`my-1 mx-1 px-4 md:px-10 py-1 md:py-4 cursor-pointer ${
                  active === switches.route
                    ? 'text-primary-400 bg-secondary-50'
                    : 'text-secondary-200 bg-white'
                } ${idx + 1 === Switch[0].id && 'rounded-l-md'} ${
                  idx + 1 === Switch[Switch.length - 1].id && 'rounded-r-md'
                }`}
                onClick={(e) => {
                  setActive(e.currentTarget.innerHTML)
                  setSwitchName(switches.route)
                }}
              >
                {switches.route}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default SwitchProducts;
