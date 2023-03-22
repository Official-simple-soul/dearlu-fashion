import React from 'react'
import Link from 'next/link'

function callbackpage() {
  return (
    <div className='text-white bg-login h-[98vh] w-full flex flex-col items-center justify-center'>
      
      <h1 className='mb-6'>Welcome</h1>
      <div className="text-center space-y-8">
        <Link href={'/authentication'} className='px-5 py-2 border border-white bg-trasnparent font-bold hover:bg-white hover:text-black'>Click to Login</Link>
        {/* <p>or</p> */}
        {/* <Link href={'/user'} className='px-5 py-2 border border-white bg-trasnparent font-bold hover:bg-white hover:text-black'>Click to go Account</Link> */}
      </div>
    </div>
  )
}

export default callbackpage
