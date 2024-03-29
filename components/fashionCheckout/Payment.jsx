import React, { useEffect, useState } from 'react';
import { BsFillPenFill } from 'react-icons/bs';
import { useGlobalContext } from '../../context/context';
import { useSession } from 'next-auth/react';
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

function Payment({ setOtp, setToPayment, checked }) {
  const [monthValue, setMonthValue] = useState('Month');
  const { all } = useGlobalContext();
  const { cart } = useGlobalContext([]);
  const { total } = useGlobalContext();
  const { allCurrent } = useGlobalContext();
  const [shippingFee, setShippingFee] = useState(2500);
  const { data: session } = useSession();
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
  useEffect(() => {
    allCurrent.countryAdd !== 'Nigeria' || all.country !== 'Nigeria'
      ? setShippingFee(6500)
      : allCurrent.countryAdd === 'Nigeria' ||
        (all.country === 'Nigeria' && allCurrent.stateAdd !== 'Lagos') ||
        all.state !== 'Lagos'
      ? setShippingFee(3500)
      : setShippingFee(2500);
  }, [allCurrent.stateAdd, all.state, allCurrent.countryAdd, all.country]);

  return (
    <div className="px-5">
      <div className="md:flex justify-between space-y-12 md:px-5">
        <div className="group md:w-[60%]">
          <div className="shadow-lg p-5 rounded-md bg-secondary-50  flex items-center justify-between">
            <div className="">
              <h1 className="text-xl mb-3 text-primary-400">
                Delivery Address
              </h1>
              {checked ? (
                <div className="text-black">
                  <h1>To: {(session?.user?.name).toUpperCase()}</h1>
                  <h1 className="my-2">Mobile: {allCurrent.phoneAdd}</h1>
                  <h1>Email: {session?.user?.email}</h1>
                  <h1 className="mt-2">
                    Location: {allCurrent.cityAdd}, {allCurrent.stateAdd},{' '}
                    {allCurrent.countryAdd}
                  </h1>
                </div>
              ) : (
                <div className="text-black">
                  <h1>To: {(session?.user?.name).toUpperCase()}</h1>
                  <h1 className="my-2">Mobile: {all.phone}</h1>
                  <h1>Email: {session?.user?.email}</h1>
                  <h1 className="mt-2">
                    Location: {all.city}, {all.state}, {all.country}
                  </h1>
                </div>
              )}
            </div>
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
        <div className="bg-secondary-50 shadow-xl p-8 h-full">
          <h1 className="text-primary-400 text-2xl text-center">
            Order Summary
          </h1>
          {cart.map((item) => {
            return (
              <>
                <div className="flex items-center justify-between my-5 space-x-12">
                  <h1 className="text-lg md:text-xl text-black">
                    {item.title}
                    <span className="block">x{item.quantity}</span>
                  </h1>
                  <h1 className="text-primary-400 text-lg md:text-2xl">
                    # {item.price * item.quantity}
                  </h1>
                </div>
              </>
            );
          })}
          <div className="flex items-center justify-between my-5 space-x-12">
            <h1 className="text-lg md:text-xl text-black">Delivery fee</h1>
            <h1 className="text-primary-400 text-lg md:text-2xl">
              {shippingFee * cart.length}
            </h1>
          </div>
          <div className="flex items-center justify-between border-t border-b border-black py-2 font-bold text-xl md:text-3xl">
            <h1 className="text-black">Total</h1>
            <h1 className="text-primary-400"># {total + (shippingFee * cart.length)}</h1>
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
