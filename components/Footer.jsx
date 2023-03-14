import React, { useState, useRef } from 'react';
import emailJs from '@emailjs/browser';
import Link from 'next/link';
import MailReportModal from '../components/modals/MailReportModal';
function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
          setEmail('');
          setShowModal(true)
        },
        (error) => {
          console.log(error.text);
          setShowModal(true)
          setLoading(false)
        }
      );
  };

  setTimeout(() => {
    setShowModal(false);
  }, 5000);

  return (
    <>
      <div className="bg-primary-500 px-8 py-10 space-y-12 md:space-y-0  md:flex justify-between">
        <div className="left border-b md:border-0 md:pb-0 pb-4">
          <h1 className="font-bold text-2xl">NEWSLETTER</h1>
          <p className="my-4 w-[70%] text-secondary-100">
            Subscribe now be first to know about exclusive offers, product
            updates, exciting news and announcements
          </p>
          <form action="" onSubmit={handleSubmit} ref={form}>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter e-mail address"
              className="bg-white text-black block w-64 md:w-96 h-10 mb-4 px-3"
            />
            {loading ? (
              <button
                type="submit"
                className="animate-pulse rounded-md px-8 py-2 text-white bg-primary-300"
              >
                Sending ...
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-md px-8 py-2 text-white bg-primary-300"
              >
                Subscribe
              </button>
            )}
          </form>
        </div>
        <div className="right flex space-x-8 mr-10">
          <div className="left font-bold">DISCOVER</div>
          <div className="right">
            <h1 className="mb-4 font-bold">CONTACT</h1>
            <ul className="space-y-2 text-secondary-100">
              <Link href={'/contact'}>
                <li>Contact Us</li>
              </Link>
              <Link href={'/help'}>
                <li>Customer Care</li>
              </Link>
            </ul>
          </div>
          <div className="right">
            <h1 className="mb-4 font-bold">HELP</h1>
            <ul className="space-y-2 text-secondary-100">
              <Link href={'/help'}>
                <li>FAQs</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      { showModal &&
      success ? (
        <MailReportModal
          success={success}
          email={email}
          report={`Message sent successfully 👍🏽`}
          showModal={showModal}
        />
      ) : (
        <MailReportModal
          success={success}
          email={email}
          report={'Message sending failed!!! 😩'}
          showModal={showModal}
        />
      )}
    </>
  );
}

export default Footer;
