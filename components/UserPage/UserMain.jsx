import React from 'react';
import MyAccount from './UserMain/MyAccount';
import Orders from './UserMain/Orders';
import PaymentMethods from './UserMain/PaymentMethods';
import Saved from './UserMain/Saved';
function UserMain({activeNav}) {

  
  return (
    <div className="text-black pl-12">
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
