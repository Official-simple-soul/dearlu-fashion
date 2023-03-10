import React, { useEffect, useState } from 'react';
import { Data } from '../../data/data';
import Image from 'next/image';
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import FashionRow from './FashionRow';
import Modal from '../Modal';
import Link from 'next/link';
import { useGlobalContext } from '../../context/context';

function ProductView({ switchName, val, grid }) {
  const [showModal, setShowModal] = React.useState(false);
  const { cart, setCart } = useGlobalContext([]);
  const { search } = useGlobalContext();
  const { isLoading } = useGlobalContext();
  const {min, max} = val
  const [filtered, setFiltered] = useState([])


  const handleAdd = (data) => {
    if(cart.some(e=>e.id===data.id)){
      setCart(cart.filter(e=>e.id!==data.id))
    }
    else {
      setCart(f=> [...f, data])
    }
  };

  useEffect(()=> {
    setFiltered(Data().filter((item) => item.category === switchName && item.price > (10000 - (+min)) && item.price < (+max + 10000) ))
  },[switchName, min, max])



  if (isLoading) {
    return (
      <>
        <div className="w-full md:w-[250%] h-[300px] flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      </>
    );
  }
  return (
    <div className="col-span-2">
      <div className={`${grid?'md:grid-cols-3':'md:grid-cols-1'} grid grid-cols-1  md:gap-8`}>
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
              <FashionRow
                title={title}
                price={price}
                img={img}
                id={id}
                handleAdd={handleAdd}
                data={data}
                key={id}
                grid={grid}
              />
            );
          })
        ) : (
          filtered.slice(-8).map((data) => {
            const { price, img, title, id } = data;
            return (
              <FashionRow
                title={title}
                price={price}
                img={img}
                id={id}
                handleAdd={handleAdd}
                data={data}
                key={id}
                grid={grid}
              />
            );
          })
        )}
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
}

export default ProductView;
