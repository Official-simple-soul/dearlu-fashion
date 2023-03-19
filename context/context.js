import React, { useContext, useState } from 'react';

const RestContext = React.createContext();

const RestProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cartSingle, setCartSingle] = useState({});
  const [all, setAll] = useState({});
  const [allCurrent, setAllCurrent] = useState({});
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    img: '',
  });
  const [inputVal, setInputVal] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  return (
    <RestContext.Provider
      value={{
        cart,
        setCart,
        total,
        setTotal,
        search,
        setSearch,
        isLoading,
        setIsLoading,
        cartSingle,
        setCartSingle,
        all,
        setAll,
        userDetails,
        setUserDetails,
        allCurrent,
        setAllCurrent,
        inputVal,
        setInputVal,
      }}
    >
      {children}
    </RestContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(RestContext);
};

export { useGlobalContext, RestProvider };
