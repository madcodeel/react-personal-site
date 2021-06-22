import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  const rwdRange = {
    xs: 320,
    sm: 768,
    // md: 1200,
    lg: 1440,
    // xl: 1680,
  };

  const rwd = Object.values(rwdRange).reduce((a, b) => {
    const keys = Object.keys(rwdRange);
    return width >= b ? keys[Object.values(rwdRange).indexOf(b)] : a;
  }, '');

  return {
    width,
    height,
    rwd,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
