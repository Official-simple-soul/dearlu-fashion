import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TfiMenuAlt } from 'react-icons/tfi';
import { IoIosTimer } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
// import ReactSlider from 'react-slider'

const BRANDS = [
  {
    shoe: [
      { name: 'Nike', quantity: 12 },
      { name: 'Addidas', quantity: 18 },
      { name: 'Balenciaga', quantity: 27 },
      { name: 'McQueens', quantity: 9 },
      { name: 'New Balance', quantity: 11 },
      { name: 'Gucci', quantity: 16 },
      { name: 'Puma', quantity: 4 },
    ],
  },
  {
    category: [
      { name: 'Lifestyle', quantity: 12 },
      { name: 'Running', quantity: 18 },
      { name: 'Basketball', quantity: 27 },
      { name: 'Football', quantity: 9 },
    ],
  },
];
const hh = BRANDS.filter((item) => item === 'shoe');

function ProductFilter({setVal, val}) {


  const handle = ({ target }) => {
    setVal({ ...val, [target.name]: target.value });
  };
  const { min, max } = val;


  return (
    <div className="bg-secondary-50 p-5 hidden md:block max-h-[1000px]">
      <div className="flex justify-between items-center border-b-2 border-secondary-200 pb-2">
        <div className="flex items-center space-x-3 text-primary-400">
          <TfiMenuAlt className="" />
          <h1 className="">Filters</h1>
        </div>
        <div className="flex items-center space-x-3 text-black">
          <IoIosTimer />
          <h1>Reset filters</h1>
        </div>
      </div>
      <div className="mb-12 price-range text-secondary-200">
        <h1 className="my-5">PRICES</h1>
        <div className="flex items-center mb-2">
          <input
            type="range"
            min="1"
            name="min"
            max="100000"
            onChange={handle}
            value={min}
            className="w-full mr-[-2px] rotate-180"
          />
          <input
            type="range"
            min="1"
            name="max"
            max="100000"
            onChange={handle}
            value={max}
            className="w-full ml-[-2px]"
          />
        </div>
        <div className="flex justify-between items-center">
          <input
            type="number"
            name="name"
            className="border py-1 px-2 w-[100px] bg-transparent border-black"
            value={100000 - +min}
          />
          <input
            type="number"
            name="name"
            className="border py-1 px-2 w-[100px] bg-transparent border-black"
            value={+max + 100000}
          />
        </div>
      </div>
      <div className="brands mt-12">
        <h1 className="text-secondary-200 mb-4">SHOP BY BRANDS</h1>
        <div className="flex items-center shadow py-1">
          <AiOutlineSearch className="text2xl text-secondary-200 mr-2" />
          <input
            type="text"
            placeholder="Search brands"
            className="border-none focus:outline-none bg-transparent"
          />
        </div>
        <div className="col space-y-4 mt-8">
          {BRANDS[0].shoe.map((brands, idx) => {
            return (
                <div className="flex items-center justify-between" key={idx}>
                  <div className="flex items-center space-x-5">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-6 h-6 border-2 bg-white border-black checked:bg-primary-400 appearance-none indeterminate:bg-primary-300"
                    />
                    <h1 className="text-black">{brands.name}</h1>
                  </div>
                  <h1 className="text-black">{brands.quantity}</h1>
                </div>
            );
          })}
        </div>
      </div>
      <div className="brands mt-12">
        <h1 className="text-secondary-200 mb-4">SHOP BY CATEGORY</h1>
        <div className="flex items-center shadow py-1">
          <AiOutlineSearch className="text2xl text-secondary-200 mr-2" />
          <input
            type="text"
            placeholder="Search categories"
            className="border-none focus:outline-none bg-transparent"
          />
        </div>
        <div className="col space-y-4 mt-8">
          {BRANDS[1].category.map((brands, idx) => {
            return (
                <div className="flex items-center justify-between" key={idx}>
                  <div className="flex items-center space-x-5">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-6 h-6 border-2 bg-white border-black checked:bg-primary-400 appearance-none indeterminate:bg-primary-300"
                    />
                    <h1 className="text-black">{brands.name}</h1>
                  </div>
                  <h1 className="text-black">{brands.quantity}</h1>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
