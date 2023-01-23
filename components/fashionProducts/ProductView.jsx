import React, { useState } from 'react';
import { Data } from '../../data/data';
import Image from 'next/image';
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import FashionRow from './FashionRow';
import Modal from '../Modal';
import Link from 'next/link';
import { useGlobalContext } from '../../context/context';

function ProductView({ switchName }) {
  const [showModal, setShowModal] = React.useState(false);
  const { cart, setCart } = useGlobalContext([]);
  const { search } = useGlobalContext();
  const { isLoading } = useGlobalContext();

  const filtered = Data().filter((item) => item.category === switchName);

  const handleAdd = (data) => {
    setCart([...cart, data]);
  };
  if (isLoading) {
    return (
      <>
        <div className="w-[250%] h-[300px] flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      </>
    );
  }
  return (
    <div className="col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
        {search === 'Search not found' ? (
          <div className="h-98 flex justify-center items-center w-full">
            <div className="block">
              <h1 className="text-3xl text-black">Search Not found</h1>
              <h1 className="text-sm mt-4 text-black">
                please try a new search or refresh the page
              </h1>
            </div>
          </div>
        ) : search && search.length > 0 ? (
          search.map((data) => {
            const { price, img, title, id } = data;
            return (
              <>
                {/* <div className="card text-black" key={data.id}>
                  <Link href={`/view`}>
                    <div className="relative h-80 w-full mb-4">
                      <Image
                        src={data.img}
                        alt=""
                        fill
                        className="bg-secondary-50 p-5"
                      />
                    </div>
                  </Link>
                  <h1>{data.title}</h1>
                  <h1 className="my-3 text-primary-300">N {data.price}</h1>
                  <div className="mb-4 flex items-center justify-between">
                    <p className="flex items-center">
                      <AiFillStar className="text-[#FF9800] mr-2" /> 4.3{' '}
                      <span className="text-secondary-100 ml-2">
                        (30 Reviews)
                      </span>
                    </p>
                    <AiOutlineHeart className="text-2xl mr-8" />
                  </div>
                  <button
                    className="bg-primary-400 text-white px-4 py-1 rounded-md"
                    onClick={() => handleAdd(data)}
                  >
                    Add to cart
                  </button>
                </div> */}
                <FashionRow title={title} price={price} img={img} id={id} handleAdd={handleAdd} data={data}/>
              </>
            );
          })
        ) : (
          filtered.slice(-8).map((data) => {
            const { price, img, title, id } = data;
            return (
              <>
                <FashionRow title={title} price={price} img={img} id={id} handleAdd={handleAdd} data={data}/>
              </>
            );
          })
        )}
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
}

export default ProductView;
