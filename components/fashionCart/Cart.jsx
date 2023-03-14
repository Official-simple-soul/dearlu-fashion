import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useGlobalContext } from '../../context/context';
import CartRow from './CartRow';

function Cart() {
  const { cart, setCart } = useGlobalContext([]);
  const { total, setTotal } = useGlobalContext();


  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="py-[58px] bg-secondary-50">
      <div className="flex justify-between items-center">
        <Link href={'/products'}>
          <div className="p-5 flex items-center space-x-4 text-primary-500">
            <FontAwesomeIcon icon={faArrowLeft} />
            <h1>Back to shopping</h1>
          </div>
        </Link>
        <div className="right pr-5 cursor-pointer" onClick={handleClearCart}>
          <h1 className="text-[red]">Clear cart</h1>
        </div>
      </div>

      {cart.length > 0 ? (
        cart.map((carts) => {
          const { title, img, price, id } = carts;

          return (
            <>
              <CartRow
                title={title}
                img={img}
                price={price}
                id={id}
                carts={carts}
                cart={cart}
                setTotal={setTotal}
              />
            </>
          );
        })
      ) : (
        <div className="py-8">
          <h1 className="text-2xl md:text-3xl text-center font-bold text-primary-400">
            Cart is Empty
          </h1>
          <p className="md:text-xl text-center text-black mt-4">
            Please go to{' '}
            <Link href={'/products'}>
              <span className="font-bold text-primary-400">shopping</span>
            </Link>{' '}
            to add items to cart
          </p>
        </div>
      )}

      <div className="md:grid md:justify-items-stretch px-5 py-20">
        <div className="md:justify-self-end bg-[#FDFDFD] p-5 md:p-10">
          <div className="flex items-center text-primary-400 justify-between text-xl md:text-3xl font-bold">
            <h1>TOTAL</h1>
            <h1 className="border-t border-b border-secondary-200 py-2 px-3">
              {`${cart.length < 1 ? 0 : '# ' + total}`}
            </h1>
          </div>
          <p className="text-sm text-secondary-100 my-4">
            Shipping fee will be calculated at checkout
          </p>
          <div className="flex justify-center">
            <Link href={'/checkout'}>
              <button
                disabled={cart < 1}
                className="text-white bg-primary-400 w-80 md:px-36 py-3 rounded-md"
              >
                checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
