import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(false);
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleCloseBanner = () => {
    setIsHidden(true);
  };

  return (
    <div>
      {!isHidden && (
        <div className='bannerBox'>
          <p>반품 및 환불 지연 안내</p>
          <button type='button' onClick={handleCloseBanner}>
            x
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;