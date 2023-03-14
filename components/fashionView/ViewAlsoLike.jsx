import React from 'react';
import Image from 'next/image';
import { Data } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

function ViewAlsoLike({ data }) {
  const alsoLike = Data().filter((item) => item.category === data.category);

  return (
    <div className="pt-12 pb-40">
      <div className="font-bold flex justify-between items-center py-4">
        <h1 className="text-primary-500">You may also like</h1>
        <Link href={'/products'}>
          <h1 className="text-primary-500 border-b border-primary-500">
            show more
          </h1>
        </Link>
      </div>
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 4,
          },
          1150: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {alsoLike?.map((data) => {
          return (
            <div className="f" key={data.id}>
              <SwiperSlide>
                <Link href={`/view/${data.id}`}>
                  <div
                    className="flex cursor-pointer justify-center items-center py-4 shadow-lg transition-all ease-in-out duration-500"
                    key={data.id}
                  >
                    <div className="px-3">
                      <div className="h-40 md:h- w-32 md:w-48 relative">
                        <Image src={data.img} alt="" fill className="" />
                      </div>
                      <h1 className="mt-3">{data.title}</h1>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      {/* <div className="grid grid-cols-3 gap-6">
        {alsoLike.slice(-3).map((item) => {
          return (
            <>
              <div className="relative h-80 w-full">
                <Image src={item.img} fill alt="" />
              </div>
            </>
          );
        })}
      </div> */}
    </div>
  );
}

export default ViewAlsoLike;
