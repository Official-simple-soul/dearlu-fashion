import React, { useState } from 'react';
import { BsFillPenFill } from 'react-icons/bs';
import { useGlobalContext } from '../../context/context';


const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const Days = (month) => {
  let days = 0;
  switch (month) {
    case Months[0]:
    case Months[2]:
    case Months[4]:
    case Months[6]:
    case Months[7]:
    case Months[9]:
    case Months[11]:
      days = 31;
      break;
    case Months[3]:
    case Months[5]:
    case Months[8]:
    case Months[10]:
      days = 30;
      break;
    default:
      days = 29;
  }
  return days;
};

function Payment({ setOtp, setToPayment }) {
  const [monthValue, setMonthValue] = useState('Month');
  const { all } = useGlobalContext();
  const { cart } = useGlobalContext([]);
  const { total } = useGlobalContext();

  function getDays() {
    let dayLenght = [];
    for (let i = 1; i <= Days(monthValue); i++) {
      dayLenght.push(i);
    }
    return dayLenght;
  }

  function handleNext() {
    setOtp(true);
    setToPayment(false);
  }

  return (
    <div className="px-5">
      <div className="md:flex justify-between space-y-12 md:px-5">
        <div className="group md:w-[60%]">
          <div className="shadow-lg p-5 rounded-md bg-secondary-50  flex items-center justify-between">
            <div className="">
              <h1 className="text-xl mb-3 text-primary-400">
                Delivery Address
              </h1>
              <div className="text-black">
                <h1>
                  To: {(all.firstName + ' ' + all.lastName).toUpperCase()}
                </h1>
                <h1 className="my-2">Mobile: {all.phone}</h1>
                <h1>Email: {all.email}</h1>
                <h1 className="mt-2">
                  Location: {all.city}, {all.state}, {all.country}
                </h1>
              </div>
            </div>
            <button className="border border-primary-400 rounded-md px-4 py-2 text-primary-400">
              <span>
                <BsFillPenFill className="inline mr-3" />
              </span>
              Edit
            </button>
          </div>
          <div className="my-8 shadow-lg p-5 rounded-md bg-secondary-50 flex items-center justify-between">
            <div className="w-[150px]">
              <h1 className="text-xl mb-3 text-primary-400">
                Method of Delivery
              </h1>
              <p className="text-black">{all.method}</p>
            </div>
            <button className="border border-primary-400 rounded-md px-4 py-2 text-primary-400">
              <span>
                <BsFillPenFill className="inline mr-3" />
              </span>
              Edit
            </button>
          </div>
          <div className="paymentOptions">
            <h1 className="text-xl mb-3 text-primary-400">Payment Options</h1>
            <div className="flex items-center space-x-20 text-primary-400">
              <div className="flex items-center space-x-4">
                <input type="radio" name="payment" className="h-4 w-4" />
                <label htmlFor="">Card Payment</label>
              </div>
              <div className="flex items-center space-x-4">
                <input type="radio" name="payment" className="h-4 w-4" />
                <label htmlFor="">Pay on delivery</label>
              </div>
            </div>
          </div>
          <div className="cardDetails w-full text-black mt-6">
            <label htmlFor="">Card Holder Name</label>
            <input
              type="text"
              className="px-3 border border-secondary-200 w-full bg-white h-8 rounded-md mb-4 mt-2"
            />
            <label htmlFor="">Card Number</label>
            <input
              type="text"
              className="px-3 border border-secondary-200 w-full bg-white h-8 rounded-md mb-4 mt-2"
            />
            <div className="flex items-center justify-between">
              <div className="left">
                <label htmlFor="">Expiry date</label>
                <div className="mt-2 flex justify-between items-center space-x-6">
                  <select
                    name=""
                    id=""
                    value={monthValue}
                    onChange={(e) => setMonthValue(e.target.value)}
                    className="bg-white h-8 border border-secondary-200 w-full px-3 rounded-md"
                  >
                    {Months.map((month) => {
                      return (
                        <option value={month} key={month}>
                          {month}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    name=""
                    id=""
                    className="bg-white h-8 border border-secondary-200 w-full px-3 rounded-md"
                  >
                    {getDays().map((days) => {
                      return (
                        <option value={days} key={days}>
                          {days}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="right flex justify-end">
                <div className="">
                  <label htmlFor="">cvv</label>
                  <input
                    type="text"
                    className="px-2 mt-2 block h-8 w-24 rounded-md bg-white border border-secondary-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary-50 shadow-xl p-8 h-80">
          <h1 className="text-primary-400 text-2xl text-center">
            Order Summary
          </h1>
          {cart.map((item) => {
            return (
              <>
                <div className="flex items-center justify-between my-5 space-x-12">
                  <h1 className="text-lg md:text-xl text-black">
                    {item.title}<span className="block"></span>
                  </h1>
                  <h1 className="text-primary-400 text-lg md:text-2xl"># {item.price}</h1>
                </div>
              </>
            );
          })}
          <div className="flex items-center justify-between my-5 space-x-12">
            <h1 className="text-lg md:text-xl text-black">Delivery fee</h1>
            <h1 className="text-primary-400 text-lg md:text-2xl"># 2 500</h1>
          </div>
          <div className="flex items-center justify-between border-t border-b border-black py-2 font-bold text-xl md:text-3xl">
            <h1 className="text-black">Total</h1>
            <h1 className="text-primary-400"># {total + 2500}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16" onClick={handleNext}>
        <button className="bg-primary-400 w-80 md:px-20 py-1 rounded-md">
          Make payment # {total + 2500}
        </button>
      </div>
    </div>
  );
}

export default Payment;
