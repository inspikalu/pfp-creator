import React, { useState } from 'react';
import Avatar from './components/Avatar';
import html2canvas from 'html2canvas';
import { AccessoryOptions } from './components/AccessoryOptions';
import Controls from './components/Controls';

const App: React.FC = () => {
  const [accessories, setAccessories] = useState<{ [key in keyof AccessoryOptions]: string | null }>({
    hat: null,
    accessory: null,
    hand: null,
    head: "/PFP/head/head8.png",
    outfit: "/PFP/outfit/body.png",
    background: null,
  });

  const [selectedCategory, setSelectedCategory] = useState<keyof AccessoryOptions>('hat');

  const changeAccessory = (type: keyof AccessoryOptions, accessory: string | null) => {
    setAccessories((prev) => {
      const defaultHead = "/PFP/head/head8.png";
      const defaultOutfit = "/PFP/outfit/body.png";

      let newValue: string | null = accessory;

      // If the accessory is the same as the current one, toggle it off
      if (prev[type] === accessory) {
        newValue = null;
      }

      // Special handling for 'head' and 'outfit' to ensure defaults
      if (type === 'head' && newValue === null) {
        newValue = defaultHead;
      } else if (type === 'outfit' && newValue === null) {
        newValue = defaultOutfit;
      }

      return {
        ...prev,
        [type]: newValue,
      };
    });
  };


  const downloadAvatar = () => {
    const avatar = document.querySelector('.avatar') as HTMLElement | null;
    if (avatar) {
      html2canvas(avatar).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'avatar.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  const randomize = () => {
    const randomHat = Math.floor(Math.random() * 16) + 1;
    const randomAccessory = Math.floor(Math.random() * 10) + 1;
    const randomHand = Math.floor(Math.random() * 16) + 1;
    const randomHead = Math.floor(Math.random() * 16) + 1;
    const randomOutfit = Math.floor(Math.random() * 16) + 1;
    const newValue = {
      hat: `/PFP/hat/hat${randomHat}.png`,
      accessory: `/PFP/accessory/accessory${randomAccessory}.png`,
      hand: `/PFP/hand/hand${randomHand}.png`,
      head: `/PFP/head/head${randomHead}.png`,
      outfit: `/PFP/outfit/outfit${randomOutfit}.png`,
      background: null,
    }
    setAccessories(newValue)
  }

  return (
    <div className="App min-h-screen flex flex-col items-center justify-center text-gray-800 pb-4 relative bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <nav className="w-full bg-white bg-opacity-80 border-b-2 border-yellow-500 shadow-md py-4 px-6 flex justify-between items-center mb-8 relative z-10">
        <div className="font-bold text-xl sm:text-3xl text-yellow-500">ZEUS PFP CREATOR</div>
        <button className="text-yellow-500 hover:text-yellow-600 bg-white bg-opacity-80 px-4 py-2 border border-yellow-500 rounded-md transition">
          <a href="https://boysclubzeus.com/" target='_blank' className='block w-full h-full'>
            Project Home
          </a>
        </button>
      </nav>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 bg-white bg-opacity-80 border border-yellow-500 shadow-lg w-full max-w-5xl p-6 rounded-lg relative z-10">
        <div className="avatar-container w-full max-w-xs md:max-w-md aspect-square border-4 border-yellow-500 shadow-md bg-gray-50 rounded-lg -skew-x-1 -skew-y-1">
          <Avatar accessories={accessories} />
        </div>
        <button
          onClick={randomize}
          className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold shadow-md transition-transform transform hover:scale-105 rounded-lg relative z-10"
        >
          Randomize
        </button>
        <Controls
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          changeAccessory={changeAccessory}
        />
      </div>
      <button
        onClick={downloadAvatar}
        className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold shadow-md transition-transform transform hover:scale-105 rounded-lg relative z-10"
      >
        Download Avatar
      </button>
    </div>
  );
};

export default App;
