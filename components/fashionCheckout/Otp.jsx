import React from 'react'

function Otp() {
  return (
    <div className='flex justify-center'>
      <div className="">
        <h1 className='text-black text-center'>An OTP has been sent to you registered number <span className='text-primary-400'>08139781***</span></h1>
        <div className="flex justify-center mt-8">
            <div className="group">
            <label htmlFor="" className='text-primary-400'>Enter OTP</label>
            <input type="text" className='block text-black h-8 w-64 border border-primary-400 rounded-md bg-secondary-50 px-2'/>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="group">
            <button className='mt-12 w-80 md:w-96 py-3 bg-primary-400 text-white rounded-md'>Proceed</button>
            <h1 className='text-primary-400 underline mt-6 text-center'>Resend OTP</h1>
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default Otp
