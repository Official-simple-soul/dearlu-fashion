import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Data } from '../../data/data';
import { useGlobalContext } from '../../context/context';
import SearchRow from './SearchRow'
export default function Modal({ showModal, setShowModal }) {
  const [searchInput, setSearchInput] = useState();
  const { cart, setCart } = useGlobalContext([]);
  const handleAdd = (data) => {
    if(cart.some(e=>e.id===data.id)){
      setCart(cart.filter(e=>e.id!==data.id))
    }
    else {
      setCart(f=> [...f, data])
    }
  };

  const searchResult = Data().filter((item) =>
    item.title.toLowerCase().includes(searchInput?.toLowerCase())
  );

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col min-w-[400px] bg-white outline-none focus:outline-none max-h-[70vh] overflow-auto">
                {/*header*/}
                <div className="search p-8 fixed bg-white z-50 shadow-lg">
                  <form
                    action=""
                    className="flex items-center justify-between px-3 border border-black bg-white w-auto h-10 rounded-md"
                  >
                    <input
                      type="text"
                      placeholder="Enter a search keyword"
                      className="placeholder:text-sm bg-transparent h-[100%] w-full focus:outline-none text-black text-xl"
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-secondary-100 text-2xl"
                    />
                  </form>
                </div>
                {/* body */}
                <div className="py-[130px]">
                  {searchResult &&
                    searchResult.map((data) => {
                      
                      return (
                        <SearchRow key={data.id} handleAdd={handleAdd} data={data} setShowModal={setShowModal}/>
                      );
                    })}
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
