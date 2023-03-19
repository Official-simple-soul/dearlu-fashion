import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { signIn } from 'next-auth/react';
import { useGlobalContext } from '../../context/context';
import { FcGoogle } from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import { useFormik } from 'formik';
import { registerValidate } from '../../lib/validate';
import { useRouter } from 'next/router';

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

function SignUp({setLogIn}) {
  const [showPass, setShowPass] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
const router = useRouter()
  const {inputVal, setInputVal} = useGlobalContext();
const formik = useFormik({
 initialValues: {
  name: '',
  email: '',
  password: '',
  phone: ''
 },
 validate: registerValidate,
 onSubmit
})

async function onSubmit (values)  {
  // e.preventDefault();
  // setLogIn(true)
  const option = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(values)
  }

  // fetch("http://localhost:3000/api/auth/signup", option)
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));


  await fetch('http://localhost:3000/api/auth/signup', option)
  .then(res=>res.json())
  .then((data)=> {
    if(data){
      router.push('http://localhost:3000/authentication')
    }
  })
};

  // const handleChange = ({ target }) => {
  //   setInputVal({ ...inputVal, [target.name]: target.value });
  // };

  // const { password } = inputVal;

  const handleFocus = () => {
    password === '' ? setShowSuggestion(true) : setShowSuggestion(false);
  };

  // const handleSuggested = (e) => {
  //   setShowSuggestion(false);
  //   setInputVal({ ...inputVal, password: e.currentTarget.innerText });
  // };

  // useEffect(() => {
  //   password !== '' && setShowSuggestion(false);
  // }, [password]);

  

  async function handleGoogleLogin() {
    signIn('google', {
      callbackUrl: 'https://dearlu-fashion.vercel.app',
    });
  }

  return (
    <div className="flex justify-center items-center py-14 bg-login">
      <div className="shadow bg-white py-3 px-3 md:px-8 text-black rounded-md">
        <form action="" onSubmit={formik.handleSubmit} className="">
          <div className="text mb-4">
            <h1 className="mb-2 text-primary-500 font-bold">Hello there</h1>
            <h5 className="text-secondary-200">
              Create an account to order an item from us
            </h5>
          </div>
          {
            formik.errors && formik.touched.name && <p className='text-red-500 text-[10px]'>{formik.errors.name}</p>
          }
          <div className="name">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              // onChange={handleChange}
              {...formik.getFieldProps('name')}
              className={`text-sm w-80 h-8 bg-white border border-secondary-100 px-2 rounded block mb-5 placeholder:text-[8px]`}
            />
          </div>
          {
            formik.errors && formik.touched.email && <p className='text-red-500 text-[10px]'>{formik.errors.email}</p>
          }
          <div className="email">
            <label htmlFor="email" className="mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              // onChange={handleChange}
              {...formik.getFieldProps('email')}
              className="text-sm w-80 h-8 bg-white border border-secondary-100 px-2 rounded block mb-5 placeholder:text-[8px]"
            />
          </div>
          {
            formik.errors && formik.touched.phone && <p className='text-red-500 text-[10px]'>{formik.errors.phone}</p>
          }
          <div className="phone-number">
            <label htmlFor="phone" className="mb-2">
              Phone Number
            </label>
            <input
              type="phone"
              name="phone"
              placeholder="Enter your phone number"
              // onChange={handleChange}
              {...formik.getFieldProps('phone')}
              className="text-sm w-80 h-8 bg-white border border-secondary-100 px-2 rounded block mb-5 placeholder:text-[8px]"
            />
          </div>
          {
            formik.errors && formik.touched.password && <p className='text-red-500 text-[10px]'>{formik.errors.password}</p>
          }
          <div className="password relative">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <div className="flex justify-between items-center w-80 h-8 bg-white border border-secondary-100 px-2 rounded">
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                value=''
                placeholder="choose a strong password"
                // onChange={handleChange}
                {...formik.getFieldProps('password')}
                // onFocus={handleFocus}
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
            className="w-full bg-primary-400 h-8 rounded-md text-white mt-8 hover:bg-primary-300"
          >
            Create an account
          </button>
        </form>
        <p className='text-center mt-2'>or</p>
        <div className="flex items-center justify-center  space-x-6 text-black  py-2 mt-4 mx-auto rounded-md shadow-md text-center hover:bg-gray-100 hover:border-none">
          <BsFacebook className='cursor-pointer'/>
          <FcGoogle onClick={handleGoogleLogin} className='cursor-pointer'/>
          <BsTwitter className='cursor-pointer'/>
        </div>
        <p className='text-center mt-4 text-sm'>Already have an account? <span className="underline text-blue-500 cursor-pointer" onClick={()=>setLogIn(true)}>Login</span></p>
      </div>
    </div>
  );
}

export default SignUp;
