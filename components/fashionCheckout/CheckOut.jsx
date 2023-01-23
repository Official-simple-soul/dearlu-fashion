import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import DeliveryDetails from './DeliveryDetails';
import Payment from './Payment';
import Otp from './Otp';
import Link from 'next/link';

function CheckOut() {
  
  const [toPayment, setToPayment] = useState(false);
  const [otp, setOtp] = useState(false);


  return (
    <div className="py-[58px] bg-[#FAFAFA]">
      <div className="p-5 flex items-center space-x-4 text-primary-500">
        <FontAwesomeIcon icon={faArrowLeft} />
        <Link href={'/cart'}><h1>Back to shopping</h1></Link>
      </div>
      <div className="flex items-center justify-center my-8 transition-all ease-in-out duration-500">
        <div className="rounded-full bg-primary-400 border border-secondary-200 px-2">
          1
        </div>
        <div
          className={`w-20 md:w-40 border transition-all ease-in-out duration-500 ${
            toPayment ? 'border-primary-400' : 'border-secondary-200'
          }`}
        ></div>
        <div
          className={`${
            toPayment || otp ? 'text-white bg-primary-400' : 'text-black'
          } transition-all ease-in-out duration-500 rounded-full border border-secondary-200 px-2`}
        >
          2
        </div>
        <div
          className={`w-20 md:w-40 border transition-all ease-in-out duration-500 ${
            otp ? 'border-primary-400' : 'border-secondary-200'
          }`}
        ></div>
        <div
          className={`${
            otp ? 'text-white bg-primary-400' : 'text-black'
          } transition-all ease-in-out duration-500 rounded-full border border-secondary-200 px-2`}
        >
          3
        </div>
      </div>
      {otp? <Otp />: toPayment ? <Payment setOtp={setOtp} setToPayment={setToPayment}/> : <DeliveryDetails setToPayment={setToPayment}/>}
      
    </div>
  );
}

export default CheckOut;
