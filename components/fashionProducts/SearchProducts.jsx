import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../../context/context';
import { Data } from '../../data/data';

function SearchProducts() {
  const [optionValue, setOptionValue] = useState('All Categories');
  const [searchValue, setSearchValue] = useState('');
  const { search, setSearch } = useGlobalContext([]);
const {setIsLoading} = useGlobalContext(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    // let newData;
    console.log(optionValue)
    const newData = optionValue === 'All Categories'? Data().filter(item=> 
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    :
    Data().filter(
      (item) =>
        item.category.toLowerCase() === optionValue.toLowerCase() &&
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearch(newData.length > 0 ? newData : 'Search not found');
  setIsLoading(true)
  };
  
  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false)
    }, 3000)
  })
  
  return (
    <div className="bg-primary-400 flex justify-center py-5">
      <form action="" onSubmit={handleSubmit} className=''>
        <div className="flex items-center">
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search for products, brands...."
            className="text-black w-40 md:w-[600px] bg-white h-12 px-3 focus:outline-none rounded-l-md"
          />
          <select
            name=""
            id=""
            onChange={(e) => setOptionValue(e.target.value)}
            className="w-32 md:w-60 bg-white h-12 px-3 focus:outline-none text-black"
          >
            <option value="All Categories">All Categories</option>
            <option value="Shoe">Shoes</option>
            <option value="Clothes">Clothes</option>
            <option value="Sunglasses">Sunglasses</option>
            <option value="Jewelries">Jewelries</option>
            <option value="Clothes">Clothes</option>
            <option value="Wristwatches">Wristwatches</option>
          </select>
          <button className="h-12 bg-primary-200 px-4 rounded-r-md">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchProducts;
