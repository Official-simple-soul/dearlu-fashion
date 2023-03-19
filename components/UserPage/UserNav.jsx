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
  const handleGoogleSignOut = () => {
    signOut({ callbackUrl: 'https://dearlu-fashion.vercel.app' });
  };

  return (
    <nav className="group fixed -left-[50%] hover:-left-10 bottom-0 top-10 transition-all ease-in-out duration-500 pr-5 pt-20 md:pt-0 md:pr-0 bg-secondary-100 md:bg-transparent md:block md:static">
      <div className="md:hidden group-hover:hidden text-sm rotate-90 absolute -right-14 text-primary-400 bottom-[50%]">
        hover to see options
      </div>
      <ul className="space-y-12 md:space-y-6 text-xl pl-12 text-gray-400 pt-10">
        {userNav.map((e, idx) => {
          const Icons = icons[idx];
          return (
            <li
              className={`${
                activeNav === e.name && 'text-primary-400'
              } flex items-center cursor-pointer text-sm md:text-md hover:text-primary-400`}
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
