import React from 'react';
import { accessoriesOptions, AccessoryOptions, AccessoryOption } from './AccessoryOptions';

interface IInterfaceProps {
  selectedCategory: keyof AccessoryOptions;
  setSelectedCategory: (category: keyof AccessoryOptions) => void;
  changeAccessory: (category: keyof AccessoryOptions, src: string) => void;
}

const Controls: React.FC<IInterfaceProps> = ({ selectedCategory, setSelectedCategory, changeAccessory }) => {
  return (
    <div className="controls mt-8 flex flex-col items-center justify-center w-full p-4" style={{ fontFamily: "Shantell sans cursive" }}>
      <div className="categories flex flex-wrap gap-3 justify-center mb-6 w-full">
        {Object.keys(accessoriesOptions).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category as keyof AccessoryOptions)}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
              selectedCategory === category ? 'bg-yellow-400 text-black outline outline-2 outline-black' : 'bg-gray-800 text-gray-300 outline outline-2 outline-black'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="overflow-y-auto w-full max-h-64 sm:max-h-[16rem] md:max-h-[20rem] p-3 sm:p-4 border-4 border-black rounded-lg">
        <div className="options grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {accessoriesOptions[selectedCategory].map((option: AccessoryOption, index: number) => (
            <button
              key={index}
              onClick={() => {
                if (option.src) {
                  changeAccessory(selectedCategory, option.src);
                }
              }}
              className="flex items-center justify-center text-black hover:bg-slate-500 p-2 sm:p-3 md:p-4 rounded-full w-16 sm:w-20 lg:w-16 shadow-lg transition-transform transform hover:scale-105 outline outline-2 outline-black"
              style={{
                backgroundColor: selectedCategory === 'background' && option.label ? option.label : 'white',
                aspectRatio: '1 / 1',
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
