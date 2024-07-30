import React from 'react';
import { accessoriesOptions, AccessoryOptions, AccessoryOption } from './AccessoryOptions';

interface IInterfaceProps {
  selectedCategory: keyof AccessoryOptions;
  setSelectedCategory: (category: keyof AccessoryOptions) => void;
  changeAccessory: (category: keyof AccessoryOptions, src: string) => void;
}

const Controls: React.FC<IInterfaceProps> = ({ selectedCategory, setSelectedCategory, changeAccessory }) => {
  return (
    <div className="controls mt-8 flex flex-col items-center justify-center max-w-full p-3">
      <div className="categories flex flex-wrap gap-3 justify-center mb-6 w-full">
        {Object.keys(accessoriesOptions).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category as keyof AccessoryOptions)}
            className={`px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
              selectedCategory === category ? 'bg-yellow-400 text-black outline outline-2 outline-black' : 'bg-gray-800 text-gray-300 outline outline-2 outline-black'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="overflow-y-auto w-full max-h-64 sm:max-h-[16rem] p-3 sm:p-5 border-4 border-black -skew-x-3">
        <div className="options grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {accessoriesOptions[selectedCategory].map((option: AccessoryOption, index: number) => (
            <button
              key={index}
              onClick={() => {
                if (option.src) {
                  changeAccessory(selectedCategory, option.src);
                }
              }}
              className="flex items-center justify-center text-black hover:bg-slate-500 p-3 sm:p-4 rounded-full w-20 sm:w-24 md:w-28 lg:w-32 shadow-lg transition-transform transform hover:scale-105 outline outline-2 outline-black"
              style={{
                backgroundColor: selectedCategory === 'background' && option.label ? option.label : 'white',
                aspectRatio: '1 / 1', // Ensures the divs remain a perfect circle
              }}
            >
              {selectedCategory !== 'background' ? (
                option.src && <img src={option.src} alt={option.label} className="rounded-full" />
              ) : (
                <div className="text-center text-white aspect-square h-auto rounded-full flex items-center justify-center">
                  {option.label}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Controls;
