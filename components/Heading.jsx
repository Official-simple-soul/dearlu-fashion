import React, { useState } from 'react';
import Image from 'next/image';
import Nav from './header/Nav';
import SearchAccountCart from './header/SearchAccountCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import SearchModal from '../components/modals/SearchModal';
import Link from 'next/link';

function Heading() {
  const [showModal, setShowModal] = React.useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div className="p-4 bg-secondary-50 flex items-center justify-between shadow fixed z-50 right-0 left-0">
      <div className="logo flex items-center space-x-2">
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={menu ? faTimes : faBars}
            className="text-primary-500 cursor-pointer"
            onClick={() => setMenu(!menu)}
          />
        </div>
        <Link href={'/'}>
          <Image
            src={'/Images/logo/DearLu.png'}
            width={100}
            height={100}
            alt="dearl logo"
          />
        </Link>
      </div>
      <Nav menu={menu} setMenu={setMenu} />
      <SearchAccountCart setShowModal={setShowModal} />
      <SearchModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Heading;
