import React from 'react';
import { Data } from '../../data/data';
import Link from 'next/link';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../../context/context';
import DealsOfTheDayRow from './DealsOfTheDayRow'
function DealsofTheDay() {
  const { cart, setCart } = useGlobalContext([]);

  const handleAdd = (data) => {
    if(cart.some(e=>e.id===data.id)){
      setCart(cart.filter(e=>e.id!==data.id))
    }
    else {
      setCart(f=> [...f, data])
    }
  };

  return (
    <div className="bg-white py-4 md:w-[80%] md:mx-auto">
      <div className="flex justify-between items-center bg-primary-50 text-primary-500 px-5 py-2">
        <h1 className="">Deals of the day</h1>
        <Link href={'/products'}><h1 className="">
          See all{' '}
          <span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
        </h1></Link>
      </div>
      <ul className="grid md:grid-cols-4 md:gap-10 p-5">
        {Data()
          .slice(6, 10)
          .map((data) => {
            
            return (
                  <DealsOfTheDayRow key={data.id} data={data} handleAdd={handleAdd}/>
            );
          })}
      </ul>
    </div>
  );
}

export default DealsofTheDay;
