import React from 'react';
import { useDispatch } from 'react-redux';

import { selectCountry } from '../redux/features/selectedCountry';
// Temporary imports till data if fetched from api
// import { Countries } from '../data/countries';

// Api imports

const ElementSelector = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-fit h-40 bg-gray-900 flex flex-col items-center justify-start  overflow-auto">
      <div className="flex flex-wrap gap-4 w-full justify-center">
        {data.map((item, i) => (
          <button
            type="button"
            className="h-10 w-25 px-4 mt-2 flex justify-center items-center hover:uppercase
          text-gray-300 hover:text-red-500 hover:scale-125 text-lg hover:animate-pulse
            transition-all transform duration ease-in-out active:scale-[.98]"
            key={i}
            id={i}
            onClick={() => dispatch(selectCountry(item.listid))}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ElementSelector;
