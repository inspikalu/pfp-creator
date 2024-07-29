import React from 'react';
import { accessoriesOptions, AccessoryOptions, AccessoryOption } from './AccessoryOptions';

interface IInterfaceProps {
  selectedCategory: keyof AccessoryOptions;
  setSelectedCategory: any;
  changeAccessory: any;
}

const Controls: React.FC<IInterfaceProps> = ({ selectedCategory, setSelectedCategory, changeAccessory }) => {
  return (
    <div className="controls mt-8 flex flex-col items-center justify-center">
      <div className="categories flex space-x-4 mb-6">
        {Object.keys(accessoriesOptions).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category as keyof AccessoryOptions)}
            className={`px-5 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
              selectedCategory === category ? 'bg-yellow-400 text-black outline outline-2 outline-black' : 'bg-gray-800 text-gray-300 outline outline-2 outline-black'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className='overflow-scroll w-full max-h-[16rem] p-5 border-4 border-black -skew-x-3'>
      <div className="options grid grid-cols-4 gap-4 items-center justify-center">
        {accessoriesOptions[selectedCategory].map((option: AccessoryOption, index: number) => (
          <button
            key={index}
            onClick={() => changeAccessory(selectedCategory, option.src)}
            className="flex items-center justify-center bg-white text-black hover:bg-slate-500 p-4 rounded-full w-[6rem] shadow-lg transition-transform transform hover:scale-105 outline outline-2 outline-black"
          >
            {/* {option.label} */}
            {option.src && <img src={option.src} alt={option.label} />}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Controls;
