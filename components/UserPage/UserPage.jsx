import React, { useState } from 'react';
import UserNav from './UserNav';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import UserMain from './UserMain';

function UserPage() {
  const [activeNav, setActiveNav] = useState('My Account');

  return (
    <div className="">
      <AiOutlineArrowLeft className="cursor-pointer text-xl ml-12 text-primary-400 mt-6" />
      <div className="grid grid-cols-3 py-6">
        <UserNav activeNav={activeNav} setActiveNav={setActiveNav} />
        <UserMain activeNav={activeNav}/>
      </div>
    </div>
  );
}

export default UserPage;
