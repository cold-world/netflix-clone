import React, { useState, useRef } from 'react';

function useSliderClick() {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  let timeoutId: number | null = null;

  const handleClick = (direction: 'right' | 'left') => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(() => {
      if (listRef.current) {
        const distance = listRef.current.getBoundingClientRect().x - 20;
        if (direction === 'right' && slideNumber < 15) {
          setSlideNumber(slideNumber + 1);
          listRef.current.style.transform = `translateX(${-360 + distance}px)`;
        }
        if (direction === 'left' && slideNumber > 0) {
          setSlideNumber(slideNumber - 1);
          listRef.current.style.transform = `translateX(${360 + distance}px)`;
        }
      }
    }, 300);
  };

  return { handleClick, slideNumber, listRef };
}

export default useSliderClick;
