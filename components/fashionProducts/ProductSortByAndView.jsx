import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrin, faGrid, faGrinAlt } from '@fortawesome/free-solid-svg-icons'
import { IoGrid } from 'react-icons/io5'
import { TfiMenuAlt } from 'react-icons/tfi'



function ProductSortByAndView({switchName, setGrid, grid}) {
  
  
    return (
    <div className='bg-secondary-50 px-2 md:px-20 text-black py-4 mt-2'>
        <div className="flex justify-between items-center">
            <div className="left">
                <h1 className='text-xl'>{switchName}</h1>
            </div>
            <div className="rigth flex items-center space-x-6">
                <p className='text-sm text-secondary-200'>Sort By</p>
                <p className='text-sm'>Featured</p>
                <div className="view flex items-center space-x-4">
                    <IoGrid className={`${grid?'text-primary-400':'text-black'} cursor-pointer`} onClick={()=>setGrid(true)}/>
                    <TfiMenuAlt className={`${!grid?'text-primary-400':'text-black'} cursor-pointer`} onClick={()=>setGrid(false)}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductSortByAndView