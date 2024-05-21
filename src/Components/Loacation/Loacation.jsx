/* eslint-disable react/prop-types */
import { useState } from 'react';
import linkIcon from '../../../public/link.svg';

const Loacation = ({ locationData, setLocation }) => {

  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const { country, name, localtime, tz_id } = locationData;


  const formatLocalTime = (localtime) => {
    const date = new Date(localtime);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const timeString = date.toLocaleString('en-US', options);
    const dayOptions = { weekday: 'long' };
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dayString = date.toLocaleDateString('en-US', dayOptions);
    const dateString = date.toLocaleDateString('en-US', dateOptions);

    return `${timeString} ${dayString}, ${dateString}`;
  };

  const formattedLocalTime = formatLocalTime(localtime);


  const handleOpenSearchBar = () => {
    setOpenSearchBar(prevState => !prevState);
  }

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleGoButtonClick = () => {
    setLocation(searchInput);
  };

  return (

    <div className="col-span-12 flex flex-col  justify-end lg:col-span-8 2xl:col-span-9">

      <div>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {tz_id}
          </h2>
          <div className="relative">
            <button onClick={handleOpenSearchBar}>
              <img className="size-9" src={linkIcon} alt="link icon" />
            </button>
          </div>

          <div className={`transition-all duration-500 ease-in-out ${openSearchBar ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden mt-2 hidden lg:flex xl:flex`}>
            <div className="flex space-x-4">
              <div className="flex rounded-3xl h-12 overflow-hidden w-full">
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="w-full rounded-md rounded-r-none px-5" />
                <button
                  onClick={handleGoButtonClick}
                  className="bg-[#153448] text-white text-sm px-3 lg:px-6 lg:text-lg font-semibold py-4 rounded-r-md flex justify-center items-center">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {country} | {name}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          {formattedLocalTime}
        </div>

        <div className={`transition-all duration-500 ease-in-out ${openSearchBar ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden mt-2 lg:hidden xl:hidden`}>
          <div className="flex space-x-4">
            <div className="flex rounded-3xl h-12 overflow-hidden w-full">
              <input
                onChange={handleInputChange}
                type="text"
                className="w-full rounded-md rounded-r-none px-5" />
              <button
                onClick={handleGoButtonClick}
                className="bg-[#153448] text-white text-sm px-3 lg:px-6 lg:text-lg font-semibold py-4 rounded-r-md flex justify-center items-center">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loacation;