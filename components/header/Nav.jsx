import Link from 'next/link'
import React, { useState } from 'react'

function Nav({menu, setMenu}) {
    const [active, setActive] = useState(null)
    const Nav = [
        {route: "Home", link: "/"},
        {route: "Products", link: "/products"},
        {route: "About Us", link: "/about"},
        {route: "Contact Us", link: "/contact"},
    ]
  return (
    <div className=''>
      <ul className={`bg-secondary-50 space-y-12 border-t left-0 top-14 md:h-4 md:border-t-0 ${menu?'h py-5 shadow-lg':'h-0 overflow-hidden py-0'} transition-all ease-in-out duration-500 right-0 pl-5  md:py-0 md:space-y-0 md:bg-transparent md:flex md:items-center md:space-x-14 absolute md:static`}>
        {
            Nav.map((nav, idx)=> {
                const {route, link} = nav
                return (
                    <Link href={`${link}`} key={idx}><li className={`${active===route?'text-primary-400':'text-secondary-200'} transition ease-in-out duration-500 hover:border-b border-primary-400  hover:text-primary-400 my-6`} onClick={(e)=>{
                      setActive(e.currentTarget.innerHTML)
                      setMenu(false)
                    }
                    }>{route}</li></Link>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Nav
