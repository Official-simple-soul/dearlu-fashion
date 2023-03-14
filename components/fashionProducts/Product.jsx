import React, {useState} from 'react'
import SearchProducts from './SearchProducts'
import SwitchProducts from './SwitchProducts'
import FashionCarousel from './FashionCarousel'
import ProductSortByAndView from './ProductSortByAndView'
import ProductMain from './ProductMain'




function Product() {
  const [switchName, setSwitchName] = useState('Shoe')
const [grid, setGrid] = useState(true)
  
return (
    <div className='pt-[58px] bg-white'>
        <div className="bg-primary-400">
            <SearchProducts />
            <SwitchProducts setSwitchName={setSwitchName}/>
        </div>
        <FashionCarousel switchName={switchName}/>
        <ProductSortByAndView switchName={switchName} grid={grid} setGrid={setGrid}/>
        <ProductMain switchName={switchName} grid={grid}/>
    </div>
  )
}

export default Product