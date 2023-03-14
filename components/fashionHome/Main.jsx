import React, { useState } from 'react';
import Image from 'next/image';
import Categories from './Categories';
import DealsofTheDay from './DealsofTheDay';
import Recomended from './Recommended';
import TopBrands from './TopBrands';
import Brandsfavourite from './Brandsfavourite';
import Jewelries from './Jewelries';
import KidsCollection from './KidsCollection';
import MainNav from './MainNav';
import Modal from '../Modal';
import SearchModal from '../modals/SearchModal';
import Link from 'next/link';

function Main() {
  const [showModal, setShowModal] = useState();

  return (
    <>
      <MainNav />
      <div className="pb-20 pt-[110px] bg-white">
        <div className="relative h-80 md:h-[630px]">
          <Image src="/Images/header/topheader.png" alt="top header" fill className=''/>
          <div className="z-20 text absolute bottom-10 left-2 md:bottom-40 md:left-10">
            <h1 className="text-4xl md:text-6xl font-bold">New</h1>
            <h1 className="text-4xl md:text-6xl font-bold md:my-5">Collections</h1>
            <h1 className="text-4xl md:text-6xl font-bold">2023</h1>
            <Link href={'/products'}>
              <button className="px-12 bg-primary-400 text-white mt-8 py-1 rounded-md text-lg">
                Start shopping
              </button>
            </Link>
            
          </div>
          <div className="bg-black absolute top-0 right-0 left-0 bottom-0 opacity-40 md:bg-transparent"></div>
        </div>
        <Categories />
        <DealsofTheDay setShowModal={setShowModal} />
        <Recomended setShowModal={setShowModal} />
        <TopBrands />
        <Brandsfavourite />
        <Jewelries />
        <KidsCollection />
        <Recomended setShowModal={setShowModal} />
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default Main;
