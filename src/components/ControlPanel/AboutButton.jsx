import React from 'react';

const AboutButton = (props) => {
  return (
    <div
      className='ml-4 px-6 py-2 border border-gray-200 bg-transparent text-gray-200 shadow-md
        z-10 cursor-pointer
        transform transition hover:scale-105'
      onClick={props.action}
    >
      About
    </div>
  );
};

export default AboutButton;
