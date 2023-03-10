import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useGlobalContext } from '../../context/context';


function SearchAccountCart({setShowModal}) {
  const {cart} = useGlobalContext([])

  return (
    <div className="flex items-center space-x-6 md:space-x-14 text-secondary-200">
      <FontAwesomeIcon icon={faSearch} onClick={()=>setShowModal(true)} className='cursor-pointer'/>
      <Link href={'/user'}><FontAwesomeIcon icon={faUser} className='cursor-pointer'/></Link>
      <Link href={'/cart'}>
        <FontAwesomeIcon icon={faCartShopping} />
        <div className="text-[12px] absolute top-2 right-1 text-white bg-primary-400 rounded-full px-2">
          {cart.length}
        </div>
      </Link>
    </div>
  );
}

export default SearchAccountCart;
