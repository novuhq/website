import { useState } from 'react';

const useScrollStatus = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);

  const handleScroll = (e) => {
    const isScrollable = e.target.scrollHeight > e.target.clientHeight;
    setHasScroll(isScrollable);

    const bottom = Math.abs(e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight) < 1;
    setIsScrolledToBottom(bottom);
  };

  return {
    isScrolledToBottom,
    hasScroll,
    handleScroll,
  };
};

export default useScrollStatus;
