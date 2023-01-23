import React from 'react'
import Image from 'next/image'
import ViewOthers from './ViewOthers'
import ViewTop from './ViewTop'
import ViewInfo from './ViewInfo'
import ViewAlsoLike from './ViewAlsoLike'



function View({img, title, price, id, data}) {
  return (
    <div className='pt-[58px] bg-secondary-50 text-black px-12'>
        <ViewTop img={img} title={title} price={price} id={id} data={data}/>
        <ViewOthers img={img} title={title}/>
        <ViewInfo />
        <ViewAlsoLike data={data}/>
    </div>
  )
}

export default View
