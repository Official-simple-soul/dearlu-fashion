import React, {useState} from 'react'
import {AiFillStar, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

function FashionRow({id, title, img, price, handleAdd, data}) {
  const [heart, setHeart]  = useState(false)
  
  
  return (
    <div className="card text-black my-2 shadow-md p-2" key={id}>
                      <Link href={`/view/${id}`}><div className="relative h-80 w-full mb-4">
                            <Image
                            src={img}
                            alt=''
                            fill
                            className='bg-secondary-50 p-5'
                            />
                        </div></Link>
                        <h1>{title}</h1>
                        <h1 className='my-3 text-primary-300'>N {price}</h1>
                        <div className="mb-4 flex items-center justify-between">
                            <p className='flex items-center'><AiFillStar className='text-[#FF9800] mr-2'/> 4.3 <span className='text-secondary-100 ml-2'>(30 Reviews)</span></p>
                            <div className="div">
                              {
                                heart?
                                <AiFillHeart className={`text-red-400 text-2xl mr-8`} onClick={()=>setHeart(!heart)}/>
                                :
                                <AiOutlineHeart className={`text-2xl mr-8`} onClick={()=>setHeart(!heart)}/>
                              }

                            </div>
                        </div>
                        <button className='bg-primary-400 text-white px-4 py-1 rounded-md' onClick={()=>handleAdd(data)}>Add to cart</button>

                    </div>
  )
}

export default FashionRow
