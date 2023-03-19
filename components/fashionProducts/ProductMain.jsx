import React, {useState} from 'react'
import ProductFilter from './ProductFilter'
import ProductView from './ProductView'



function ProductMain({switchName, grid}) {

  const [val, setVal] = useState({
    min: '100000',
    max: '100000',
  });

  return (
    <div className='grid md:grid-cols-3 gap-20 py-10 px-5 md:px-20'>
        <ProductFilter setVal={setVal} val={val}/>
        <ProductView switchName={switchName} val={val} grid={grid}/>
    </div>
  )
}

export default ProductMain