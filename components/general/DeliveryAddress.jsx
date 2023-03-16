import React from 'react'
import { Country, State, City } from 'country-state-city';

function DeliveryAddress() {
    const [countryValue, setCountryValue] = useState('NG');
    const [stateCode, setStateCode] = useState('');
    const [cityCode, setCityCode] = useState('');
    const { all, setAll } = useGlobalContext();
    const getCountry = Country.getAllCountries();
    const getState = State.getStatesOfCountry(countryValue);
    const getCity = City.getCitiesOfState(countryValue, stateCode);

    const countryInput = getCountry
    .filter((item) => item.isoCode === countryValue)
    .map((item) => item.name);
  const stateInput = getState
    .filter((item) => item.isoCode === stateCode)
    .map((item) => item.name);
  const cityInput = getCity
    .filter((item) => item.name === cityCode)
    .map((item) => item.name);

  return (
    <div>
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
    </div>
  )
}

export default DeliveryAddress
