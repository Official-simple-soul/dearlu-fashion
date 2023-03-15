import React, { useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import {
  MdAccountCircle,
  MdProductionQuantityLimits,
  MdPayment,
} from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { signOut } from 'next-auth/react';

const userNav = [
  { name: 'My Account' },
  { name: 'Orders' },
  { name: 'Payment methods' },
  { name: 'Saved' },
];
const icons = [
  MdAccountCircle,
  MdProductionQuantityLimits,
  MdPayment,
  AiFillHeart,
];
function UserNav({ activeNav, setActiveNav }) {
  const handleGoogleSignOut = async () => {
    signOut('google', { callbackUrl: 'http://localhost:3000' });
  };

  return (
    <nav>
      <ul className="space-y-6 text-xl pl-12 text-gray-400 pt-10">
        {userNav.map((e, idx) => {
          const Icons = icons[idx];
          return (
            <li
              className={`${
                activeNav === e.name && 'text-primary-400'
              } flex items-center cursor-pointer`}
              key={idx}
              onClick={(e) => setActiveNav(e.currentTarget.innerText)}
            >
              <Icons className="mr-3" />
              {e.name}
            </li>
          );
        })}
        <li
          className="cursor-pointer text-red-500 flex items-center"
          onClick={handleGoogleSignOut}
        >
          <BiLogOut className="mr-3" />
          Logout
        </li>
      </ul>
    </nav>
  );
}

export default UserNav;
