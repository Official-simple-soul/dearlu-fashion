import React, { useEffect, useState } from 'react'

function AddToCart({w,h,c, setShowModal, data}) {

  return (
    <div>
        <button className={`w-${w} h-${h} bg-${c} text-white py-1 rounded-md`}>
                        Add to cart
                      </button>
    </div>
  )
}

export default AddToCart