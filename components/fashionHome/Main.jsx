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
        <div className="relative h-[630px]">
          <Image src="/Images/header/topheader.png" alt="top header" fill />
          <div className="text absolute bottom-40 left-10">
            <h1 className="text-6xl font-bold">New</h1>
            <h1 className="text-6xl font-bold my-5">Collections</h1>
            <h1 className="text-6xl font-bold">2022</h1>
            <Link href={'/products'}>
              <button className="px-12 bg-primary-400 text-white mt-8 py-1 rounded-md text-lg">
                Start shopping
              </button>
            </Link>
          </div>
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
