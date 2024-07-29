import React from 'react';
import { AccessoryOptions } from './AccessoryOptions';

interface IAvatarProps {
  accessories: { [key in keyof AccessoryOptions]: string | null };
}

const Avatar: React.FC<IAvatarProps> = ({ accessories }) => {
  const backgroundColor = accessories.background || "#1398FD"; // default background color

  return (
      <div className="avatar w-full relative aspect-square" style={{ backgroundColor }}>

        {/* Head */}
        {accessories.head && <img src={accessories.head} alt="Head" className="w-auto max-w-full h-auto absolute z-10" />}

        {/* Outfit */}
        {accessories.outfit && <img src={accessories.outfit} alt="Outfit" className="w-auto max-w-full h-auto absolute z-15" />}


        {/* Hand */}
        {accessories.hand && <img src={accessories.hand} alt="Hand" className="w-auto max-w-full h-auto absolute z-20" />}

        {/* Hat */}
        {accessories.hat && <img src={accessories.hat} alt="Hat" className="w-auto max-w-full h-auto absolute z-50" />}

        {/* Accessory */}
        {accessories.accessory && <img src={accessories.accessory} alt="Accessory" className="w-auto max-w-full h-auto absolute z-30" />}
      </div>
  );
};

export default Avatar;
