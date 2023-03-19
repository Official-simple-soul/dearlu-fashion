import React, { useState } from 'react';
import UserNav from './UserNav';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import UserMain from './UserMain';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';


function UserPage() {
  const [activeNav, setActiveNav] = useState('My Account');
const router = useRouter()
  const {data: session} = useSession()



return (
    <div className="">
      {/* <AiOutlineArrowLeft className="cursor-pointer text-xl ml-12 text-primary-400 mt-6" /> */}
      <div className="grid grid-cols-4 py-6">
        <UserNav activeNav={activeNav} setActiveNav={setActiveNav} />
        <UserMain activeNav={activeNav}/>
      </div>
    </div>
  );
}

export default UserPage;


