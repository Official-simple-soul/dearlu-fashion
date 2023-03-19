import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { signIn } from 'next-auth/react';
import { useGlobalContext } from '../../context/context';
import Link from 'next/link';
import { useFormik } from 'formik';
import login_validate from '../../lib/validate';
import { useRouter } from 'next/router';


function Login({ setLogIn }) {
  const [view, setView] = useState(false);
  const [loginInput, setLoginInput] = useState('');
  const { inputVal } = useGlobalContext();
  const [success, setSucces] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showError, setShowError] = useState(false);
 const router = useRouter()

  // async function handleGoogleLogin() {
  //   signIn('google', {
  //     callbackUrl: 'http://localhost:3000/api/auth/callback/google',
  //   });
  // }

  const formik = useFormik({
    initialValues: {
     email: '',
     password: '',
    },
    onSubmit,
    validate: login_validate
   })
   
 
   async function onSubmit (values)  {
     // e.preventDefault();
     // setLogIn(true)
     const status = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: '/'
     })
     if(status.ok){
        router.push(status.url)
     }
   };

//   const handleLoginInput = ({ target }) => {
//     setLoginInput({ ...loginInput, [target.name]: target.value });
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = loginInput;

//     if (email !== inputVal.email && password !== inputVal.password) {
//       setSucces(false);
//       setLoader(true);
//       setTimeout(() => setLoader(false), 2000);
//       setShowError(true);
//     } else {
//       setSucces(true);
//       setLoader(true);
//       setTimeout(() => setLoader(false), 6000);
//       window.location.href = '/user';
//     }
//   };

//   setTimeout(() => setShowError(false), 8000);
//   setTimeout(() => setLoader(false), 5000);

//   console.log(loginInput.email === inputVal.email);
//   console.log(inputVal.email);
  return (
    <div className="flex justify-center items-center h-[90vh] px-3 bg-login">
      <h1 className='text-xl md:text-3xl text-white move-text absolute top-20 '>Boss 😎 try login abeg 🫡</h1>
      <div className="login text-black p-5 shadow bg-white rounded-md w-[98%] md:w-96 mx-auto">
        <form action="" className="" onSubmit={formik.handleSubmit}>
          <h1 className="text-primary-500 text-xl font-bold">WELCOME BACK</h1>
          <p className="mb-3 text-[12px] mb-5">Sign in to get started</p>
          {!loader && showError && (
            <p className="text-[10px] text-red-500">Email or password error</p>
          )}
          <div className="email ">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
            //   required
              //   value={email}
            //   onChange={handleLoginInput}
            {...formik.getFieldProps('email')}
              className="block placeholder:text-[8px] focus:outline-none w-full mt-2 py-2 px-2 bg-transparent border rounded-md"
            />
          </div>
          {
            formik.errors && formik.touched.email && <p className='text-red-500 text-[10px]'>{formik.errors.email}</p>
          }
          <div className="password my-4">
            <label htmlFor="password" className="">
              Password
            </label>
            <div className="flex justify-between items-center rounded-md mt-2 px-2 border py-2 w-full">
              <input
                type={view ? 'text' : 'password'}
                name="password"
                // value={password}
                // onChange={handleLoginInput}
                // required
                {...formik.getFieldProps('password')}
                placeholder="Enter your password"
                className="block placeholder:text-[8px] focus:outline-none w-full bg-transparent"
              />
              <div
                className="div cursor-pointer"
                onClick={() => setView(!view)}
              >
                {view ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
          </div>
          {
            formik.errors && formik.touched.password && <p className='text-red-500 text-[10px]'>{formik.errors.email}</p>
          }
          <div className="flex justify-between items-center text-sm mb-6">
            <div className="flex justify-between items-center">
              <input type="checkbox" />
              <p className="text-gray-400 ml-2">Remember me</p>
            </div>
            <p className="text-primary-400">Forgot password</p>
          </div>
          {/* {loader && (
            <div className="flex flex-col justify-center items-center loader absolute top-0 right-0 bottom-0 left-0 bg-black opacity-60">
              <p className="text-white z-50 mb-4 text-sm">please wait..</p>
              <div className="text-white z-50 flex items-center space-x-6">
                <div className="one w-4 h-4 rounded-full bg-white animate-ping"></div>
                <div className="one w-4 h-4 rounded-full bg-white animate-ping"></div>
                <div className="one w-4 h-4 rounded-full bg-white animate-ping"></div>
              </div>
            </div>
          )} */}
          {/* {!loader && showError && (
            <p className="text-red-500 text-[11px] mb-2">
              Seems you dont have an account. Click sign up to create one
            </p>
          )} */}
          <button
            type="submit"
            // onClick={handleLoginSubmit}
            className="w-full py-2 text-sm bg-primary-400 rounded-md text-white"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-2">or</p>
        <div className="flex items-center justify-center  space-x-6 text-black  py-2 mt-4 mx-auto rounded-md shadow-md text-center hover:bg-gray-100 hover:border-none">
          <BsFacebook className="cursor-pointer" />
          <FcGoogle onClick={()=>signIn('google', { callbackUrl: 'https://dearlu-fashion.vercel.app/callbackpage' })} className="cursor-pointer" />
          <BsTwitter className="cursor-pointer" />
        </div>
        <p className="text-center mt-4 text-sm">
          Dont have an account?{' '}
          <span
            className="underline text-blue-500 cursor-pointer"
            onClick={() => setLogIn(false)}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
