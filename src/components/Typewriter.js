import React, { useState, useEffect } from 'react';

function Typewriter() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = 'I am Mohammed Abdul Hadi, a passionate Software Engineer, Full Stack Developer, and AI/ML Enthusiast.' ;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 25); // Adjust typing speed in milliseconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, fullText]);

  return <div>{text}</div>;
}

export default Typewriter;
