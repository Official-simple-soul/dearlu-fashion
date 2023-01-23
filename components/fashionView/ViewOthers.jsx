import React from 'react'
import Image from 'next/image'

const arr = [1,1,1,1,1]
function ViewOthers({img, title}) {
  return (
    <div className="md:w-[50%] px-3 others flex items-center pb-8 justify-between space-x-2">
            {
                arr.map(ar=> {
                    
                    return (
                        <>
                        <div className="relative h-16 md:h-24 w-16 md:w-24">
                <Image
                src={img}
                fill
                alt={title}
                />
            </div>
                        </>
                    )
                })
            }
            
        </div>
  )
}

export default ViewOthers
