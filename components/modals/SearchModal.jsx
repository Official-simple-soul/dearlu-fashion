import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Data } from "../../data/data";
import Image from 'next/image';
import { useGlobalContext } from "../../context/context";

export default function Modal({showModal, setShowModal}) {
  const [searchInput, setSearchInput] = useState()
//   const [searchInput, setSearchInput] = useState()
const { cart, setCart } = useGlobalContext([]);
const handleAdd = (data) => {
  setCart([...cart, data]);
};  



const searchResult = Data().filter(item=> item.title.toLowerCase().includes(searchInput?.toLowerCase()))
  


  return (
    <>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col min-w-[400px] bg-white outline-none focus:outline-none max-h-[70vh] overflow-auto">
                {/*header*/}
                <div className="search p-8 fixed bg-white z-50 shadow-lg">
                    <form action="" className="flex items-center justify-between px-3 border border-black bg-white w-auto h-10 rounded-md">
                        <input type="text" placeholder="Enter a search keyword" className="placeholder:text-sm bg-transparent h-[100%] w-full focus:outline-none text-black text-xl" onChange={(e)=>setSearchInput(e.target.value)}/>
                        <FontAwesomeIcon icon={faSearch} className='text-secondary-100 text-2xl'/>
                    </form>
                </div>
                {/* body */}
                <div className="py-[130px]">

                
                {
                    searchResult && searchResult.map(data=> {
                        const {title, img, id, price} = data
                        return (
                            <>
                            <div
      className="shadow-lg mb-2 px-10 flex items-center text-black justify-between  bg-[#FDFDFD] md:space-x-12 min-w-[400px]"
      key={id}
    >
      <div className="left flex items-center space-x-4">
        
        <div className="relative h-24 md:h-40 w-24 md:w-40">
          <Image src={img} alt={title} fill />
        </div>
        <div className="text-black">
          <h1 className="md:text-3xl font-bold">{title}</h1>
          <h1 className="text-sm font-bold md:text-xl text-primary-400">#{price}</h1>
        </div>
      </div>
      <div className="right">
      <button
                        className="text-sm md:text-lg bg-primary-400 text-white py-1 px-4 rounded-md w-full"
                        onClick={() => handleAdd(data)}
                      >
                        Add to cart
                      </button>
      </div>
    </div>
                            </>
                        )
                    })
                }
                </div>
                {/*footer*/}
                <div className="sticky bg-[red] rounded-t-xl bottom-2 left-2 shadow-xl w-[100px] shadow z-50">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}