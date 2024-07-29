import React, { useState } from 'react';
import Avatar from './components/Avatar';
import html2canvas from 'html2canvas';
import './App.css';
import { AccessoryOptions } from './components/AccessoryOptions';
import Controls from './components/Controls';

const App: React.FC = () => {
  const [accessories, setAccessories] = useState<{ [key in keyof AccessoryOptions]: string | null }>({
    hat: null,
    accessory: null,
    hand: null,
    head: "/PFP/head/head4.png",
    outfit: "/PFP/outfit/body.png",
    background: null,
  });

  const [selectedCategory, setSelectedCategory] = useState<keyof AccessoryOptions>('hat');

  const changeAccessory = (type: keyof AccessoryOptions, accessory: string | null) => {
    setAccessories((prev) => ({
      ...prev,
      [type]: accessory,
    }));
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

  return (
    <div className="App w-full bg-blue-500 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-8 text-yellow-400 outline outline-4 outline-black">
        ZEUS PFP CREATOR
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8 space-y-8 md:space-y-0 p-8 bg-white rounded-lg shadow-2xl w-full">
        <div className="avatar-container w-full max-w-[493px] aspect-square -skew-x-3 -skew-y-3 border-8 border-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.5)]">
          <Avatar accessories={accessories} />
        </div>
        <Controls selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} changeAccessory={changeAccessory} />
      </div>
      <button
        onClick={downloadAvatar}
        className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-500 outline outline-2 outline-black"
      >
        Download Avatar
      </button>
    </div>
  );
};

export default App;
