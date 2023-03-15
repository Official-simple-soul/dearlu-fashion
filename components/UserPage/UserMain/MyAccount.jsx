import React, { useEffect, useState } from 'react';
import { BsPenFill } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
function MyAccount() {
  const { data: session } = useSession();
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(session);
  }, [session]);

  return (
    <div className="text-[#2F2F2F]">
      {
        user?.user?
        <div className="wit">
        <h1 className="text-lg">My Account</h1>
        <div className="image mt-4">
          <img
            src={user?.user?.image}
            alt={user?.user?.name}
            className="rounded-full"
          />
        </div>
        <h2 className="text-primary-400 mt-5 mb-3">Account Information</h2>
        <div className="contact bg-[#F5F5F5] p-5">
          <h1 className="mb-4">Contact Information</h1>
          <div className="left space-y-4">
            <h1>
              Name: <span className="ml-3 font-bold">{user?.user?.name}</span>
            </h1>
            <h1>
              Email address:{' '}
              <span className="ml-3 font-bold">{user?.user?.email}</span>
            </h1>
          </div>
          <button className="mt-5 text-[#F5F5F5] text-sm rounded-md bg-primary-400 px-8 py-2">
            Change password
          </button>
        </div>
        <h2 className="text-primary-400 mt-8 mb-3">Address Book</h2>
        <div className="delivery bg-[#F5F5F5] p-5">
          <h1>Delivery Address</h1>
          <div className="flex justify-between my-3">
            <p>{'No address set yet'}</p>
            <button className="flex items-center border border-primary-400 text-sm px-2 py-1 rounded-md">
              <BsPenFill className="mr-1" />
              Edit
            </button>
          </div>
          <button className="mt-5 text-[#F5F5F5] text-sm rounded-md bg-primary-400 px-8 py-2">
            New Address
          </button>
        </div>
      </div>
      :
      <div className="nin text-center mt-20 font-semibold">
        <h1>You are logged out</h1>
        <p>Please sign in to view your account</p>
      </div>
      }
      
    </div>
  );
}

export default MyAccount;
