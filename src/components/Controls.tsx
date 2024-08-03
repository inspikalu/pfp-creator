import React from 'react';
import { accessoriesOptions, AccessoryOptions, AccessoryOption } from './AccessoryOptions';

interface IInterfaceProps {
  selectedCategory: keyof AccessoryOptions;
  setSelectedCategory: (category: keyof AccessoryOptions) => void;
  changeAccessory: (category: keyof AccessoryOptions, src: string) => void;
}

const Controls: React.FC<IInterfaceProps> = ({ selectedCategory, setSelectedCategory, changeAccessory }) => {
  return (
    <div className="w-full" >
      <div className="min-w-full w-full max-w-full flex gap-8 overflow-x-scroll p-3">
        {Object.keys(accessoriesOptions).map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category as keyof AccessoryOptions)}
            className="flex flex-col items-center justify-center"
            style={{
              transition:"all .001s ease-in"
            }}
          >
            <div className={` bg-[#4DD8FF] p-2 w-[3rem] h-[3rem] text-white rounded-md ${selectedCategory === category ? 'border-4 border-[#1694EC]' : ''
              }`}>
              <img src={`/headers/${category}.png`} alt="" className='w-full max-w-[2rem] h-auto object-contain' />
            </div>
            <span className={`${selectedCategory === category?"text-black font-bold":"text-gray-500"}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          </div>
        ))}
      </div>

      <div className="overflow-y-auto w-full max-h-[9rem] md:max-h-[20rem] p-4 my-3 ">
        <div className="options grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {accessoriesOptions[selectedCategory].map((option: AccessoryOption, index: number) => (
            <button
              key={index}
              onClick={() => {
                if (option.src) {
                  changeAccessory(selectedCategory, option.src);
                }
              }}
              className="flex w-full items-center justify-center text-black bg-[#f3f2f2] rounded-md lg:w-16 shadow-lg transition-transform transform hover:scale-105"
              style={{
                backgroundColor: selectedCategory === 'background' && option.label ? option.label : 'white',
                aspectRatio: '1 / 1',
              }}
            >
              {selectedCategory !== 'background' ? (
                option.src === null || option.label === "None" ? <div className="rounded-full">None</div> : <img src={option.src} alt={option.label} className="w-full h-auto object-cover" />
              ) : (
                <div className="text-center text-white aspect-square h-auto rounded-full flex items-center justify-center">
                  {/* {option.label} */}
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
