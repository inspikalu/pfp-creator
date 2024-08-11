import React, { useState, useEffect } from 'react';
import Avatar from './components/Avatar';
import html2canvas from 'html2canvas';
import { AccessoryOptions } from './components/AccessoryOptions';
import Controls from './components/Controls';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS JS

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Animation only happens once
    });
  }, []);

  const [accessories, setAccessories] = useState<{ [key in keyof AccessoryOptions]: string | null }>({
    hat: null,
    accessory: null,
    hand: null,
    head: "/PFP-webp/head/head8.webp",
    outfit: "/PFP-webp/outfit/body.webp",
    background: "#1398FD",
  });
  const [creatingAvatar, setCreatingAvatar] = useState<Boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<keyof AccessoryOptions>('hat');

  const toggleCreatingAvatar = () => {
    setCreatingAvatar(prev => !prev);
  };

  const changeAccessory = (type: keyof AccessoryOptions, accessory: string | null) => {
    setAccessories((prev) => {
      const defaultHead = "/PFP-webp/head/head8.webp";
      const defaultOutfit = "/PFP-webp/outfit/body.webp";

      let newValue: string | null = accessory;

      if (prev[type] === accessory) {
        newValue = null;
      }

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
    const randomHat = Math.floor(Math.random() * 21) + 1;
    const randomAccessory = Math.floor(Math.random() * 12) + 1;
    const randomHand = Math.floor(Math.random() * 20) + 1;
    const randomHead = Math.floor(Math.random() * 16) + 1;
    const randomOutfit = Math.floor(Math.random() * 21) + 1;
    const newValue = {
      hat: `/PFP-webp/hat/hat${randomHat}.webp`,
      accessory: `/PFP-webp/accessory/accessory${randomAccessory}.webp`,
      hand: `/PFP-webp/hand/hand${randomHand}.webp`,
      head: `/PFP-webp/head/head${randomHead}.webp`,
      outfit: `/PFP-webp/outfit/outfit${randomOutfit}.webp`,
      background: "#1398FD",
    };
    setAccessories(newValue);
  };

  return (
    <div className={`w-full h-screen flex flex-col md:flex-row ${!creatingAvatar &&  "md:justify-center"} md:gap-0 md:p-0 items-center justify-between`}
      style={{ backgroundColor: accessories.background || "#3b82f6" }}>

      {/* Header and Toggle Button */}
      {!creatingAvatar && (
        <div className="flex flex-col items-center justify-center mb-4">
          <img src="/Zeus Logo.png" alt="Zeus Logo.webp" />
          <h2 className='text-center text-4xl font-bold text-white mb-auto'>
            ZEUS PFP <br /> CREATOR
          </h2>
          <button className='bg-white px-3 py-2 rounded-3xl text-blue-500 text-lg my-2 mt-5' onClick={toggleCreatingAvatar}>
            Create Avatar
          </button>
        </div>
      )}

      {/* Avatar Container */}
      <div className={`w-full max-w-xs md:max-w-md aspect-square  rounded-lg relative `}>
        <Avatar accessories={accessories} />
      </div>

      {/* Controls and Action Buttons */}
      {creatingAvatar && (
        <div className='flex flex-col bg-white rounded-t-xl md:rounded-none p-2 h-[55%] md:h-full overflow-scroll w-full'
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="20"
        >
          <div className='flex items-end justify-end pt-3'>
            <span className='bg-blue-500 text-white p-3 flex items-center justify-center rounded-full w-[2rem] h-[2rem]' onClick={toggleCreatingAvatar}>x</span>
          </div>

          <div className='mb-1'>
            <Controls changeAccessory={changeAccessory} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </div>

          <div className="w-full h-auto flex items-center justify-between gap-3 mt-auto">
            <button
              onClick={downloadAvatar}
              className="px-8 py-3 bg-blue-500 text-white font-semibold shadow-md transition-transform transform hover:scale-105 rounded-full relative z-10 text-sm"
            >
              Download Avatar
            </button>
            <button
              onClick={randomize}
              className="px-8 py-3 bg-blue-500 text-white font-semibold shadow-md transition-transform transform hover:scale-105 rounded-full relative z-10"
            >
              Randomize
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
