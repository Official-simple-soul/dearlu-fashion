import React, { useState } from 'react'
import View from '../../components/fashionView/View'
import { useRouter } from 'next/router'
import { Data } from '../../data/data'



function ViewData() {
const router = useRouter()
const {id} = router.query

const filtered = Data().filter(item=>item.id===Number(id))

  return (
    <div className="">
      {
        filtered.map(item=> {
          const {img, title, price, id} =item
          return (
            <>
            <View img={img} title={title} price={price} id={id} data={item}/>
            </>
          )
        })
      }
   
  </div>
  )
}

export default ViewData