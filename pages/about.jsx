import React from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/Images/aboutUs-image/about-1.jpg',
    text: 'Gowns and Inners',
    width: 800,
    height: 600,
  },
  {
    src: '/Images/aboutUs-image/about-2.jpg',
    text: 'Jackets and Jeans',
    width: 600,
    height: 800,
  },
  {
    src: '/Images/aboutUs-image/about-3.jpg',
    text: 'Officials Wears',
    width: 1200,
    height: 800,
  },
  {
    src: '/Images/aboutUs-image/about-4.jpg',
    text: 'Ladies Bags',
    width: 800,
    height: 600,
  },
  {
    src: '/Images/aboutUs-image/about-5.jpg',
    text: 'Men Trousers',
    width: 600,
    height: 800,
  },
  {
    src: '/Images/aboutUs-image/about-6.jpg',
    text: 'Casuals Wears',
    width: 1200,
    height: 800,
  },
];

const about = () => {
  return (
    <div className="bg-white py-[65px] text-black">
      <div className="bg-black w-full">
        <div className="relative w-full md:w-[80%] md:mx-auto h-64 md:h-[600px]">
          <Image
            src={'/Images/aboutUs-image/about-logo-1.jpg'}
            alt={'about-logo'}
            fill
          />
        </div>
      
      <div className="hover:bg-gray-50 cursor-pointer hover:text-black border-4 md:border-8 px-5 py-2 md:py-6 rounded-full absolute bottom-[54%] md:bottom-[14%] font-bold right-6 md:right-[13%] text-white">
        <h1 className="font-bold md:text-[46px] tracking-wider">
          DearLu
        </h1>
      </div>
      </div>

      <div className="who-we-are pt-10 text-center">
        <h1 className="font-bold text-4xl mb-3">WHO WE ARE</h1>
        <p className="text-justify mx-4 md:w-[70%] md:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="text-center text-justify mt-8 mx-4 md:w-[70%] md:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="our-service mt-20">
        <h1 className="font-bold text-4xl text-center mb-4">OUR SERVICE</h1>
        <div className="mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden group relative pb-[75%] cursor-pointer transition-all ease-in-out duration-1000"
            >
              <Image
                src={image.src}
                alt=""
                fill
                className="absolute inset-0 w-full h-full hover:rounded-md"
              />
              <div className=" group-hover:before:h-full before:content-['*'] before:absolute before:h-0 before:w-[50%] before:bg-black before:opacity-50 before:transition-all before:ease-in-out before:duration-1000"></div>
              <div className=" group-hover:after:mt-0 after:content-['*'] after:absolute after:h-full after:mt-[100%] after:w-[50%] after:ml-[50%] after:bg-black after:opacity-50 after:transition-all after:ease-in-out after:duration-1000"></div>
              <h1 className="md:text-3xl group-hover:opacity-100 opacity-0 text-xl text-white absolute bottom-10 left-10 transition-all ease-in-out duration-1000">
                {image.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default about;
