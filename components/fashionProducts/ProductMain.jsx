import React from 'react'
import ProductFilter from './ProductFilter'
import ProductView from './ProductView'



function ProductMain({switchName}) {
  return (
    <div className='grid md:grid-cols-3 gap-40 py-10 px-5 md:px-20'>
        <ProductFilter />
        <ProductView switchName={switchName}/>
    </div>
  )
}

export default ProductMain