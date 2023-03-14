import React, { useState } from 'react';
import { useGlobalContext } from '../../context/context';
import Image from 'next/image';
import Link from 'next/link';

function ViewTop({ img, title, price, id, data }) {
  const { cart, setCart } = useGlobalContext([]);
  const { setCartSingle } = useGlobalContext({});
  const [size, setSize] = useState(0);
  const [added, setAdded] = useState(false);
  const handleAdd = (data) => {
    if (cart.some((e) => e.id === data.id)) {
      setCart(cart.filter((e) => e.id !== data.id));
    } else {
      setCart((f) => [...f, data]);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 py-8" key={id}>
      <div className="relative h-64 md:h-[477px] w-full bg-white">
        <Image src={img} fill alt={title} />
      </div>
      <div className="right md:px-24">
        <h1 className="text-primary-400 text-4xl font-bold">{title}</h1>
        <h1 className="text-2xl my-3 text-primary-400">N {price}</h1>
        <div className="other">
          <div className="col mt-6">
            <h1 className="my-3">Colour</h1>
            <select name="" id="" className="bg-white w-24">
              <option value="">Red</option>
              <option value="">Black</option>
              <option value="">Green</option>
              <option value="">Gray</option>
              <option value="">White</option>
            </select>
          </div>
          <div className="size my-6">
            <h1 className="mb-3">Size</h1>
            <div className="grid grid-cols-3 gap-8">
              {[40, 41, 42, 43, 44, 45].map((item) => {
                return (
                  <>
                    <div
                      className={`${
                        Number(size) === item
                          ? 'bg-primary-400 text-white'
                          : 'bg-white'
                      } px-3 py-3 text-center rounded-3xl cursor-pointer`}
                      onClick={(e) => setSize(e.currentTarget.innerHTML)}
                    >
                      {item}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`${
                added ? 'bg-red-500' : 'bg-primary-400'
              }  text-white py-1 rounded-md px-8`}
              onClick={() => {
                handleAdd(data);
                setAdded(!added);
              }}
            >
              {added ? 'Remove' : 'Add to cart'}
            </button>
            <Link href={'/checkout'}>
              <button
                onClick={() => setCartSingle(data)}
                className="w-40 text-sm md:text-lg bg-primary-400 text-white rounded-md py-1"
              >
                Buy now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTop;
