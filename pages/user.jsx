import { getSession } from 'next-auth/react';
import React from 'react';
import UserPage from '../components/UserPage/UserPage';

function User() {
  return (
    <div className="pt-[57px] bg-[#FAFAFA]">
      <UserPage />
    </div>
  );
}

export default User;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/authentication',
      },
    };
  }
  return {
    props: { session },
  };
};
