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
    <div className="App min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-gray-800 pb-4" style={{ backgroundImage: "url('/background.jpg')" }}>
      <nav className="w-full bg-white bg-opacity-80 border-b-2 border-yellow-500 shadow-md py-4 px-6 flex justify-between items-center mb-8">
        <div className="font-bold text-xl sm:text-3xl text-yellow-500">ZEUS PFP CREATOR</div>
        <button className="text-yellow-500 hover:text-yellow-600 bg-white bg-opacity-80 px-4 py-2 border border-yellow-500 rounded-md transition">
          <a href="https://boysclubzeus.com/" target='_blank' className='block w-full h-full'>
          Project Home
          </a>
        </button>
      </nav>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 bg-white bg-opacity-80 border border-yellow-500 shadow-lg w-full max-w-5xl p-6 rounded-lg">
        <div className="avatar-container w-full max-w-xs md:max-w-md aspect-square border-4 border-yellow-500 shadow-md bg-gray-50 rounded-lg -skew-x-1 -skew-y-1">
          <Avatar accessories={accessories} />
        </div>
        <Controls
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          changeAccessory={changeAccessory}
        />
      </div>
      <button
        onClick={downloadAvatar}
        className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold shadow-md transition-transform transform hover:scale-105 rounded-lg"
      >
        Download Avatar
      </button>
    </div>
  );
};

export default App;
