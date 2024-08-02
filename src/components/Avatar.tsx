import React from 'react';
import { AccessoryOptions } from './AccessoryOptions';

interface IAvatarProps {
  accessories: { [key in keyof AccessoryOptions]: string | null };
}

const Avatar: React.FC<IAvatarProps> = ({ accessories }) => {
  const backgroundColor = accessories.background || "#1398FD"; // default background color

  return (
    <div className="avatar w-full h-full flex items-center justify-center relative" style={{ backgroundColor }}>
      {/* Head */}
      {accessories.head && <img src={accessories.head} alt="Head" className="max-w-full max-h-full absolute inset-0 m-auto z-10" />}
      {/* Outfit */}
      {accessories.outfit && <img src={accessories.outfit} alt="Outfit" className="max-w-full max-h-full absolute inset-0 m-auto z-15" />}
      {/* Hand */}
      {accessories.hand && <img src={accessories.hand} alt="Hand" className="max-w-full max-h-full absolute inset-0 m-auto z-20" />}
      {/* Hat */}
      {accessories.hat && <img src={accessories.hat} alt="Hat" className="max-w-full max-h-full absolute inset-0 m-auto z-50" />}
      {/* Accessory */}
      {accessories.accessory && <img src={accessories.accessory} alt="Accessory" className="max-w-full max-h-full absolute inset-0 m-auto z-30" />}
    </div>
  );
};

export default Avatar;
