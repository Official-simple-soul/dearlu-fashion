import React, { useEffect, useState } from 'react';
import { Country, State, City } from 'country-state-city';
import { useGlobalContext } from '../../context/context';

function DeliveryDetails({ setToPayment, checked, setChecked }) {
  const [countryValue, setCountryValue] = useState('NG');
  const [stateCode, setStateCode] = useState('');
  const [cityCode, setCityCode] = useState('');
  const { all, setAll } = useGlobalContext();
  const { allCurrent } = useGlobalContext();
  const getCountry = Country.getAllCountries();
  const getState = State.getStatesOfCountry(countryValue);
  const getCity = City.getCitiesOfState(countryValue, stateCode);
  const { total } = useGlobalContext();
  const { cart } = useGlobalContext([]);
  const { cartSingle } = useGlobalContext({});
  const [che, setChe] = useState('');
 console.log(checked)

  const countryInput = getCountry
    .filter((item) => item.isoCode === countryValue)
    .map((item) => item.name);
  const stateInput = getState
    .filter((item) => item.isoCode === stateCode)
    .map((item) => item.name);
  const cityInput = getCity
    .filter((item) => item.name === cityCode)
    .map((item) => item.name);

  const handleNext = () => {
    setToPayment(true);
    setAll({
      ...val,
      country: countryInput.pop(),
      state: String(stateInput),
      city: cityInput.toString(),
      method: che,
    });
  };

  const [val, setVal] = useState({
    phone: '',
    method: '',
  });
  console.log(allCurrent);
  const handleInput = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="flex justify-center"></div>
      <div className="md:flex justify-between px-5 space-y-12">
        <form action="" className="md:w-[45%]">
          <h1 className="text-primary-400  font-bold mb-3">Delivery Address</h1>
          {allCurrent.countryAdd && (
            <div className="mb-3 prev shadow p-3 text-black rounded-md bg-primary-50 hover:bg-primary-400 hover:text-white cursor-pointer">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className=""
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <h1 className="mb-2">Use your current address</h1>
              </div>
              <p>
                {allCurrent.phoneAdd
                  ? allCurrent.phoneAdd
                  : 'No phone number yet'}
              </p>
              <p>
                {allCurrent.countryAdd
                  ? allCurrent.cityAdd +
                    ', ' +
                    allCurrent.stateAdd +
                    ', ' +
                    allCurrent.countryAdd
                  : 'No Address yet'}
              </p>
            </div>
          )}
          {
            !checked && 
          <div className="gg">
            <div className="left text-black my-6">
              <label htmlFor="" className="">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={val.phone}
                onChange={handleInput}
                required
                className="px-2 w-full h-8 border border-black bg-white rounded mt-1"
              />
            </div>
            <div className="flex items-center space-x-5">
              <div className="text-black">
                <label htmlFor="">Country</label>
                <select
                  name=""
                  id=""
                  required
                  value={countryValue}
                  onChange={(e) => setCountryValue(e.target.value)}
                  className="px-2 w-full h-8 border border-black bg-white rounded mt-1"
                >
                  {getCountry.map((countries) => {
                    return (
                      <>
                        <option
                          value={countries.isoCode}
                          key={countries.phonecode}
                        >
                          {countries.name}
                        </option>
                      </>
                    );
                  })}
                  <option value=""></option>
                </select>
              </div>
              <div className="text-black">
                <label htmlFor="">State</label>
                <select
                  id=""
                  name="stateCode"
                  required
                  value={stateCode}
                  onChange={(e) => setStateCode(e.target.value)}
                  className="px-2 w-full h-8 border border-black bg-white rounded mt-1"
                >
                  {getState.map((states) => {
                    return (
                      <>
                        <option value={states.isoCode} key={states.name}>
                          {states.name}
                        </option>
                      </>
                    );
                  })}
                  <option value=""></option>
                </select>
              </div>
              <div className="text-black">
                <label htmlFor="">City</label>
                <select
                  name=""
                  id=""
                  required
                  value={cityCode}
                  onChange={(e) => setCityCode(e.target.value)}
                  className="px-2 w-full h-8 border border-black bg-white rounded mt-1"
                >
                  {getCity.map((cities) => {
                    return (
                      <>
                        <option value={cities.name} key={cities.name}>
                          {cities.name}
                        </option>
                      </>
                    );
                  })}
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="flex my-8 items-center space-x-4 text-secondary-200">
              <input type="checkbox" className="w-4 h-4" />
              <label htmlFor="">Save this information for next time</label>
            </div>
          </div>
          }
          <div className="method text-black">
            <h1 className="text-primary-400 text-2xl mb-3">
              Method of Delivery
            </h1>
            <div className="radio">
              <div className="flex items-center space-x-5 border border-secondary-200 p-2 rounded-md">
                <input
                  type="radio"
                  name="method"
                  disabled
                  className="w-4 h-4 bg-white"
                />
                <label htmlFor="">Home Delivery</label>
              </div>
              <div className="my-4 flex items-center space-x-5 border border-secondary-200 p-2 rounded-md">
                <input
                  type="radio"
                  name="method"
                  value={'Pickup from outlets'}
                  onChange={(e) => setChe(e.target.value)}
                  className="w-4 h-4 bg-white"
                />
                <label htmlFor="">Pickup from outlets</label>
              </div>
              <div className="flex items-center space-x-5 border border-secondary-200 p-2 rounded-md">
                <input
                  type="radio"
                  name="method"
                  value={'Nearest bus-stop'}
                  onChange={(e) => setChe(e.target.value)}
                  className="w-4 h-4 bg-white"
                />
                <label htmlFor="">Nearest bus-stop</label>
              </div>
            </div>
          </div>
        </form>
        <div className="bg-secondary-50 shadow-xl p-8 h-full">
          <h1 className="text-primary-400 text-2xl text-center">
            Order Summary
          </h1>
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <>
                  <div className="flex items-center justify-between my-5 space-x-12">
                    <h1 className="text-black">
                      {item.title}{' '}
                      <span className="block">x{item.quantity}</span>
                    </h1>
                    <h1 className="text-primary-400 text-lg md:text-xl">
                      {item.price}
                    </h1>
                  </div>
                </>
              );
            })
          ) : (
            <div className="flex items-center justify-between my-5 space-x-12">
              <h1 className=" text-black">
                {cartSingle.title}{' '}
                <span className="block">{cartSingle.quantity}</span>
              </h1>
              <h1 className="text-primary-400 text-xl">{cartSingle.price}</h1>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-b border-black py-2 text-xl font-bold md:text-3xl">
            <h1 className="text-black">Total</h1>
            <h1 className="text-primary-400">
              {cartSingle.price ? cartSingle.price : total}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16" onClick={handleNext}>
        <button className="bg-primary-400 w-80 md:px-20 py-1 rounded-md">
          Proceed to make payment
        </button>
      </div>
    </div>
  );
}

export default DeliveryDetails;
