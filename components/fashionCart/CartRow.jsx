import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../../context/context';

function CartRow({ title, img, price, id, carts, setTotal }) {
  const { cart, setCart } = useGlobalContext([]);
  const [multiply, setMultiply] = useState(1);


  const handleRemove = (carts) => {
    setCart(cart.filter((item) => item.id !== carts.id));
  };

  useEffect(() => {
    let summing = document.querySelectorAll('.tr');
    let sum = [];
    summing.forEach((item) => {
      sum.push(item.innerHTML);
    });
    const totals = sum.reduce((a, b) => Number(a) + Number(b), 0);
    setTotal(totals);
  });



  return (
    <div
      className="px-5 md:flex items-center text-black justify-between  bg-[#FDFDFD] p-10"
      key={id}
    >
      <div className="left flex items-center space-x-4">
        <AiOutlineClose
          onClick={() => handleRemove(carts)}
          className="cursor-pointer"
        />
        <div className="relative h-40 w-40">
          <Image src={img} alt={title} fill />
        </div>
        <div className="text-black">
          <h1 className="md:text-3xl font-bold">{title}</h1>
          <div className="text-xl flex items-center space-x-4 md:space-x-12 mt-4">
            <div className="left">
              <h1 className="mb-3 text-sm md:text-lg">Quantity</h1>
              <input
                type="number"
                defaultValue={1}
                onChange={(e) => {
                  setMultiply(e.target.value)
                }}
                className="py-1 text-sm pl-2 w-12 md:w-20 bg-white border border-black"
              />
            </div>
            <div>
              <h1 className="mb-3 text-sm md:text-lg">Size</h1>
              <select
                name=""
                id=""
                className="py-1 px-1 text-sm bg-white w-12 md:w-20 border border-black tt"
              >
                <option value={39}>39 (UK)</option>
                <option value={40}>40 (UK)</option>
                <option value={41}>41 (UK)</option>
                <option value={42}>42 (UK)</option>
                <option value={43}>43 (UK)</option>
                <option value={44}>44 (UK)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-4 ml-8">
        <span className="md:text-3xl text-lg border border-r-0 md:border-none pl-2 md:pl-0 text-primary-400 font-bold">#</span>
        <h1 className="md:text-3xl text-lg border border-l-0 md:border-none pr-2 md:pr-0 text-primary-400 font-bold tr">
          {price * multiply}
        </h1>
      </div>
    </div>
  );
}

export default CartRow;
