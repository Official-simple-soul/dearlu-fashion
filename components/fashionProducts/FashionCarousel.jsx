import React, { useState } from 'react';
import { Data } from '../../data/data';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import { useGlobalContext } from '../../context/context';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import Link from 'next/link';

function FashionCarousel({switchName}) {
const {search} = useGlobalContext()
const filtered = Data().filter((item) => item.category === switchName);

return (
    <div className="bg-secondary-50 py-5 px-5 text-black transition-all ease-in-out duration-500">
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 3,
          },
          1150: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={30}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {
        search && search.length>0?
        <></>
        :
        filtered.map((data) => {
          return (
            <div className="f" key={data.id}>
             <SwiperSlide>
             <Link href={`/view/${data.id}`}><div
                  className="flex cursor-pointer justify-center items-center py-2 md:py-4 md:px-4 shadow-lg transition-all ease-in-out duration-500"
                  key={data.id}
                >
                  <div className="w-32 h-[125px] md:h-40">
                    <div className="h-20 md:h-28 md:w-28 relative">
                      <Image src={data.img} alt="" fill className="" />
                    </div>
                    <h1 className="mt-3">{data.title}</h1>
                  </div>
                </div></Link> 
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}

export default FashionCarousel;
