import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { signIn } from 'next-auth/react';
import { useGlobalContext } from '../../context/context';

function generatePassword(passwordLength) {
  let numberChars = '0123456789';
  let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  let specialChars = '/@#$%&*()_+=-?';
  let allChars = numberChars + upperChars + lowerChars + specialChars;
  let randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray[3] = specialChars;
  randPasswordArray = randPasswordArray.fill(allChars, 4);
  return shuffleArray(
    randPasswordArray.map(function (x) {
      return x[Math.floor(Math.random() * x.length)];
    })
  ).join('');
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const [inputVal, setInputVal] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });


  const handleChange = ({ target }) => {
    setInputVal({ ...inputVal, [target.name]: target.value });
  };

  const { password } = inputVal;

  const handleFocus = () => {
    password === '' ? setShowSuggestion(true) : setShowSuggestion(false);
  };

  const handleSuggested = (e) => {
    setShowSuggestion(false);
    setInputVal({ ...inputVal, password: e.currentTarget.innerText });
  };

  useEffect(() => {
    password !== '' && setShowSuggestion(false);
  }, [password]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

 async function handleGoogleLogin () {
  signIn('google', {callbackUrl: "http://localhost:3000"})
 }


  return (
    <div className="flex justify-center items-center py-14 ">
      <div className="shadow-xl shadow-primary-400 bg-white py-3 px-3 md:px-8 text-black rounded-md">
        <form action="" onSubmit={handleFormSubmit} className="">
          <div className="text mb-4">
            <h1 className="mb-2 text-primary-500 font-bold">Hello there</h1>
            <h5 className="text-secondary-200">
              Create an account to order an item from us
            </h5>
          </div>
          <div className="name">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
              className="text-sm w-80 h-8 bg-white border border-secondary-100 px-2 rounded block mb-5 placeholder:text-[8px]"
            />
          </div>
          <div className="email">
            <label htmlFor="email" className="mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              onChange={handleChange}
              required
              className="text-sm w-80 h-8 bg-white border border-secondary-100 px-2 rounded block mb-5 placeholder:text-[8px]"
            />
          </div>
          <div className="phone-number">
            <label htmlFor="phone" className="mb-2">
              Phone Number
            </label>
            <input
              type="phone"
              name="phone"
              placeholder="Enter your phone number"
              onChange={handleChange}
              required
              className="text-sm w-80 h-8 bg-white border border-secondary-100 px-2 rounded block mb-5 placeholder:text-[8px]"
            />
          </div>
          <div className="password relative">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <div className="flex justify-between items-center w-80 h-8 bg-white border border-secondary-100 px-2 rounded">
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                value={password}
                placeholder="choose a strong password"
                onChange={handleChange}
                required
                onFocus={handleFocus}
                className="bg-transparent focus:outline-none w-full block placeholder:text-[8px]"
              />
              <div
                className="show cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
              {showSuggestion && (
                <div className="absolute top-0 right-24 shadow bg-secondary-50 border px-2 text-[12px] text-secondary-200 rounded-md">
                  <p className="text-[10px]">click to use suggestion</p>
                  <div className="" onClick={handleSuggested}>
                    <h5>{generatePassword(12)}</h5>
                  </div>
                </div>
              )}
            </div>
            <p className="text-[10px] text-secondary-100">
              Password must contain atleast 8 characters
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-400 h-8 rounded-md text-white mt-8"
          >
            Create an account
          </button>
        </form>
        <div className="text-white text-sm py-1 mt-4 mx-auto bg-red-500 rounded-md shadow-md text-center">
          <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
