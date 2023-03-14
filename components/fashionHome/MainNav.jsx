import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { faPlantWilt, faVestPatches } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function MainNav() {
  
    const Nav = [
        {route: 'Agro', link: '/agro', img: <FontAwesomeIcon icon={faPlantWilt} />},
        {route: 'Fashion', link: '/', img: <FontAwesomeIcon icon={faVestPatches} />}
    ]
    const [active, setActive] = useState(Nav[1].route)
  return (
    <div className='left-0 right-0 pt-20 fixed z-30 flex justify-center py-4 bg-white shadow-md text-primary-400'>
      <ul className='flex items-center space-x-6'>
        {
            Nav.map((nav, idx)=> {
                return (
                    <Link href={`${nav.link}`} key={idx}>
                        <li className={`flex space-x-3 items-center ${active===nav.route?'text-primary-400': 'text-secondary-100'}`} onClick={(e)=> setActive(e.currentTarget.innerHTML)}>
                        {nav.img}
                        <h1>{nav.route}</h1>
                    </li>
                    </Link>
                )
            })
        }
      </ul>
    </div>
  )
}
