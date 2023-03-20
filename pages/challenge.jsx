import React, { useEffect, useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import Image from 'next/image';

const data = [
  {
    id: 1,
    name: 'One Dance',
    rating: 5,
    title: 'Software Engineer',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
    img: '/Images/challenge/1.jpg',
  },
  {
    id: 2,
    name: 'Two Dance',
    rating: 5,
    title: 'Software Engineer',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
    img: '/Images/challenge/2.jpg',
  },
  {
    id: 3,
    name: 'Three Dance',
    rating: 3,
    title: 'Software Engineer',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
    img: '/Images/challenge/3.jpg',
  },
  {
    id: 4,
    name: 'Four Dance',
    rating: 4,
    title: 'Software Engineer',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
    img: '/Images/challenge/4.jpg',
  },
  {
    id: 5,
    name: 'Five Dance',
    rating: 5,
    title: 'Software Engineer',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
    img: '/Images/challenge/5.jpg',
  },
  {
    id: 6,
    name: 'Six Dance',
    rating: 3,
    title: 'Software Engineer',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
    img: '/Images/challenge/6.jpg',
  },
  {
    id: 7,
    name: 'Seven Dance',
    rating: 3,
    title: 'Software Engineer',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
    img: '/Images/challenge/7.jpg',
  },
  {
    id: 8,
    name: 'Eigth Dance',
    rating: 3,
    title: 'Software Engineer',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
    img: '/Images/challenge/8.jpg',
  },
];

function Challenge() {
  const [num, setNum] = useState(3);
  let [numMain, setNumMain] = useState(1);
  const [flag, setFlag] = useState(false);

  const handleNext = () => {
    num === data.length ? setNum(1) : setNum(num + 1);
    if (numMain < 6) {
      setNumMain(numMain + 1);
    }
  };

  const handlePrev = () => {
    num === 1 ? setNum(data.length) : setNum(num - 1);
    setNumMain(numMain - 1);
    if (numMain < 1) {
      setNumMain(4);
    }
  };

  useEffect(() => {
    if (numMain === 6) {
      setFlag(true);
    }

    if (flag) {
      const invalid = setInterval(() => {
        setNumMain((e) => e - 1);
      }, 200);
      if (numMain < 1) {
        setNumMain(1);
        setFlag(false);
      }
      return () => clearInterval(invalid);
    }
  }, [numMain, flag]);

  return (
    <div className="pt-[130px] pb-[1000px] md:pb-0 h-[98vh] bg-white relative">
      <div className={`pt-[220px] md:pt-[120px] flex flex-col-reverse md:flex md:flex-row md:items-end text-black`}>
        <div className="md:block text-center md:text-left relative h-[450px] w-full md:w-[40%] px-5 md:px-10">
          {data.map((e) => {
            return (
              <div
                key={e.name}
                className={`${
                  num === e.id ? 'scale-100' : 'scale-[92%] opacity-0'
                } absolute top-5 transition-all ease-in-out duration-1000 pr-3 md:pr-0`}
              >
                <h1 className="text-[#4FAF57] text-4xl font-bold">
                  {e.rating}.0
                </h1>
                <h1 className="text-[#4FAF57] text-4xl mb-4 font-bold">
                  {'x x x x x'}
                </h1>
                <h1 className="text-2xl font-bold">{e.name}</h1>
                <h1 className="text-xl mt-3 mb-6 ">{e.title}</h1>
                <h1 className="text-sm mb-10 text-center md:text-justify">{e.text}</h1>
                <button className="px-10 py-2 text-lg text-white mt-12 bg-[#4FAF57] shad">
                  Book a session
                </button>
              </div>
            );
          })}
        </div>
        <div className="right md:w-[60%] px-12">
          <div className="flex justify-between items-center">
            <BsArrowDown
              className={`z-50 cursor-pointer text-3xl md:text-[48px] px-2 py-1 rounded-full bg-[#4FAF57] text-white`}
              onClick={handlePrev}
            />
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 md:h-[250px] md:w-[260px] mb-8">
                {data.map((e) => (
                  <Image
                    src={e.img}
                    alt={e.name}
                    fill
                    key={e.id}
                    className={`${
                      numMain + 2 === e.id
                        ? 'scale-100 rotate-0 opacity-100'
                        : 'scale-[10%] opacity-0 rotate-45'
                    } rounded-full z-40 transition-all ease-in-out duration-1000`}
                  />
                ))}
              </div>
              <div className="relative w-[150px] md:w-64 h-14 overflow-hidden">
                {data.map((e) => (
                  <button
                    key={e.id}
                    className={`${
                      num === e.id ? 'right-4' : '-right-96'
                    } absolute bg-green-200 text-lg md:text-3xl px-2 md:px-8 py-2 text-black round-lg transition-all ease-in-out duration-1000`}
                  >
                    {e.name}
                  </button>
                ))}
              </div>
            </div>
            <BsArrowDown
              className={`cursor-pointer z-50 text-3xl md:text-[48px] px-2 py-1 rounded-full bg-[#4FAF57] text-white`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
      <div
        className={`cursor-pointer absolute w-[500px] md:w-[1000px] overflow-hidden -right-14 md:-right-[110px] top-14 md:top-0 h-[250px] md:h-[500px] ${
          num % 2 === 0
            ? 'bg-gradient-to-b from-green-500 to-green-200'
            : 'bg-gradient-to-b from-green-200 to-green-500'
        } rounded-b-full transition-all ease-in-out duration-1000`}
      >
        <div className="border-4 border-gray-400 border-dashed w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] absolute top-[30%] z-40 rounded-full">
          <div className="relative w-full h-full top-[60px]">
            {data.map((e) => (
              <div
                className={`absolute h-20 md:h-32 w-20 md:w-32 transition-all ease-in-out ${
                  flag && 'duration-200'
                } duration-1000 ${
                  numMain === e.id
                    ? 'right-0 md:right-10 top-[80px] md:top-[60px]'
                    : numMain + 1 === e.id
                    ? 'right-[30px] md:right-[200px] top-[-20px] md:top-[-70px]'
                    : numMain + 2 === e.id
                    ? 'right-[210px] md:right-[440px] top-[-100px] md:top-[-120px]'
                    : numMain + 3 === e.id
                    ? 'right-[390px] md:right-[650px] top-[-20px] md:top-[-80px]'
                    : numMain + 4 === e.id
                    ? 'right-[800px] top-[40px]'
                    : numMain + 5 === e.id
                    ? 'left-[0px] top-[190px]'
                    : numMain + 6 === e.id
                    ? 'left-[0px] top-[190px]'
                    : 'left-[0px] top-[190px]'
                }`}
                key={e.id}
              >
                <Image src={e.img} fill alt="" className={`rounded-full`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
