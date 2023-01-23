import React, { useState, useRef } from 'react';
import emailJs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';


function Contact() {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await emailJs
      .sendForm(
        'service_k98a6fk',
        'template_0nfc3ck',
        form.current,
        'l1SMwkup0_5uqyGfU'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setFailed(true);
        }
      );
  };

  setTimeout(() => {
    setSuccess(false);
    setFailed(false);
  }, 5000);

  return (
    <div className="relative pt-[60px] bg-secondary-50 text-black">
      <div className="md:w-[80%] m-auto md:space-y-0 space-y-12 grid md:grid-cols-2 md:p-10">
        <div className="left md:w-96 pt-10 mx-6">
          <h1 className="text-xl mb-3 font-bold">
            Have any issue with our products?
          </h1>
          <h1 className="text-xl">
            Reach out to us today and we will get back to u as soon as possible
          </h1>
          <h1 className="mt-20 font-bold">
            You can also reach out to use on our social media handle
          </h1>
          <div className="flex items-center space-x-12 mt-5 text-3xl ">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faSnapchat} />
          </div>
        </div>
        <div className="right">
          <form
            action=""
            ref={form}
            className="flex flex-col space-y-6 py-5"
            onSubmit={handleSubmit}
          >
            <label htmlFor="" className="text-primary-400 mx-auto">
              Name{' '}
              <input
                type="text" 
                name="user_name"
                className="bg-white text-black border-secondary-100 mt-2 block w-80 md:w-96 h-10 p-3"
                required
              />
            </label>
            <label htmlFor="" className="text-primary-400 mx-auto">
              Subject{' '}
              <input
                type="text"
                name="subject"
                className="bg-white text-black border-secondary-100 mt-2 block w-80 md:w-96 h-10 p-3"
                required
              />
            </label>
            <label htmlFor="" className="text-primary-400 mx-auto">
              Message{' '}
              <textarea
                name="message"
                id=""
                cols="30"
                rows="6"
                className="text-black bg-white border-secondary-100 mt-2 block w-80 md:w-96 p-3"
                required
              ></textarea>
            </label>
            {loading ? (
              <button
                type="submit"
                disable
                className="bg-primary-400 text-white w-40 mx-auto md:w-96 py-1 rounded-md flex justify-center items-center"
              >
                <div className="w-6 h-6 mr-5 rounded-full animate-spin border-dotted  border-2  border-white inline-flex">
                  .
                </div>
                Sending ...
              </button>
            ) : (
              <button
                type="submit"
                className="bg-primary-400 text-white w-40 mx-auto md:w-96 py-1 rounded-md"
              >
                Send
              </button>
            )}
          </form>
        </div>
      </div>
      <div
        className={`text-black absolute ${
          success
            ? 'top-20 border-primary-400 text-primary-400'
            : failed
            ? 'border-[red] text-[red]'
            : 'top-0'
        } transition-all ease-in-out duration-500 left-[40%] border-b px-8 py-1 bg-white rounded-lg `}
      >
        <h1>
          {success ? 'Message sent successfully!!!' : 'Message sending error'}
        </h1>
      </div>
    </div>
  );
}

export default Contact;
