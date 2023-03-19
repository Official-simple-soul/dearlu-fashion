import React, {useState} from 'react';
import SignUp from './SignUp';
import Login from './Login';

const Authentication = () => {
  const [login, setLogIn] = useState(true);
  return (
    <div className="bg-secondary-50">
      {login ? <Login setLogIn={setLogIn} /> : <SignUp setLogIn={setLogIn} />}
    </div>
  );
};

export default Authentication;
