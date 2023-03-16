import React from 'react';
import MyAccount from './UserMain/MyAccount';
import Orders from './UserMain/Orders';
import PaymentMethods from './UserMain/PaymentMethods';
import Saved from './UserMain/Saved';
function UserMain({activeNav}) {

  
  return (
    <div className="text-black px-5 md:pl-12 col-span-3 md:col-span-2">
        {
            activeNav === 'Orders'?
            <Orders />
            :
            activeNav === 'Orders'?
            <Orders />
            :
            activeNav === 'Payment methods'?
            <PaymentMethods />
            :
            <MyAccount />

        }
    </div>
  );
}

export default UserMain;
