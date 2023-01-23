import React, { useState } from "react";

export default function Modal({showModal, setShowModal, cartAdded}) {
 

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg text-center">
                    {cartAdded} has been added successfully</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 space-x-12">
                  <button
                    className="bg-primary-400 text-white font-bold text-sm px-6 py-1 rounded mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Continue shopping
                  </button>
                  <button
                    className="bg-primary-400 text-white font-bold text-sm px-6 py-1 rounded mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Go to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
