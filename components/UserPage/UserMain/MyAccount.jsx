import React, { useEffect, useState } from 'react';
import { BsPenFill } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
import { Country, State, City } from 'country-state-city';
import { useGlobalContext } from '../../../context/context';
import Image from 'next/image';


const MyAccount = () => {
  const [newAddress, setNewAddress] = useState(false);
  const { data: session } = useSession();
  const [user, setUser] = useState({});
  const [countryValue, setCountryValue] = useState('NG');
  const [stateCode, setStateCode] = useState('');
  const [cityCode, setCityCode] = useState('');
  const { allCurrent, setAllCurrent } = useGlobalContext({});
  const getCountry = Country.getAllCountries();
  const getState = State.getStatesOfCountry(countryValue);
  const getCity = City.getCitiesOfState(countryValue, stateCode);
  const { loginInput } = useGlobalContext();
  
  const countryInput = getCountry
    .filter((item) => item.isoCode === countryValue)
    .map((item) => item.name);
  const stateInput = getState
    .filter((item) => item.isoCode === stateCode)
    .map((item) => item.name);
  const cityInput = getCity
    .filter((item) => item.name === cityCode)
    .map((item) => item.name);

  const [val, setVal] = useState({
    phone: '',
    method: '',
  });

  const handleInput = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const handleNewAddress = () => {
    setAllCurrent({
      countryAdd: countryInput.toString(),
      stateAdd: stateInput.toString(),
      cityAdd: cityInput.toString(),
      phoneAdd: val.phone,
    });
    setNewAddress(false);
  };

  useEffect(() => {
    setUser(session);
  }, [session]);
console.log(loginInput)
  return (
    <div className="text-[#2F2F2F] text-center md:text-left">
      {user?.user ?  (
        <div className="wit">
          <h1 className="text-lg">My Account</h1>
          <div className="image mt-4">
            <Image
              src={user?.user?.image}
              alt={user?.user?.name}
              className="rounded-full mx-auto md:ml-0"
            />
          </div>
          <h2 className="text-primary-400 mt-5 mb-3">Account Information</h2>
          <div className="contact bg-[#F5F5F5] p-5 w-full">
            <h1 className="mb-4">Contact Information</h1>
            <div className="left space-y-4">
              <h1>
                Name: <br className="md:hidden"></br>
                <span className="ml-3 font-bold">{user?.user?.name}</span>
              </h1>
              <h1>
                Email address:{' '}
                <span className="ml-3 font-bold">{user?.user?.email}</span>
              </h1>
            </div>
            <button className="mt-5 text-[#F5F5F5] text-sm rounded-md bg-primary-400 px-8 py-2">
              Change password
            </button>
          </div>
          <h2 className="text-primary-400 mt-8 mb-3">Address Book</h2>
          <div className="delivery bg-[#F5F5F5] p-5">
            <h1>Delivery Address</h1>
            <div className="flex-col md:flex justify-between my-3">
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
              <button
                className="mt-2 mx-auto flex items-center border border-primary-400 text-sm px-2 py-1 rounded-md"
                onClick={() => setNewAddress(true)}
              >
                <BsPenFill className="mr-1" />
                Edit
              </button>
            </div>
            {newAddress && (
              <div className="add">
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
                    className="px-2 w-full md:w-80 md:block h-8 border border-black bg-white rounded mt-1"
                  />
                </div>
                <div className="md:flex items-center md:space-x-5">
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
                <button
                  className="border border-primary-400 px-2 rounded-md mt-3 hover:bg-grey-100 hover:text-primary-400"
                  onClick={handleNewAddress}
                >
                  Save Address
                </button>
              </div>
            )}

            <button
              className={`${
                allCurrent.countryAdd && 'hidden'
              } mt-5 text-[#F5F5F5] text-sm rounded-md bg-primary-400 px-8 py-2`}
              onClick={() => setNewAddress(!newAddress)}
            >
              {newAddress ? 'Cancel edit' : 'New Address'}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 font-semibold h-[60vh] w-96">
          <h1>You are logged out</h1>
          <p>Please sign in to view your account</p>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
