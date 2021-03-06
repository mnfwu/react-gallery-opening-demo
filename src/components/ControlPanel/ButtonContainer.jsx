import React, { useState } from 'react';
import './ControlPanel.css';
import Arrow from './Arrow';

const ButtonContainer = (props) => {
  const [hideContainer, setHideContainer] = useState(false);
  const [containerPosition, setContainerPosition] = useState('left-0 top-10');
  const [arrowDirection, setArrowDirection] = useState('left');

  const handleClick = () => {
    setHideContainer(!hideContainer);
    hideContainer
      ? setContainerPosition('left-0 top-10')
      : setContainerPosition('container-hide top-10');
    hideContainer ? setArrowDirection('left') : setArrowDirection('right');
  };

  let containerStyles =
    containerPosition +
    'transition duration-500 ease-in-out bg-gray-800 shadow-xl w-52 py-4 absolute left-0 top-32 z-10 opacity-80 hover:opacity-100';

  return (
    <div className={containerStyles}>
      <div className='flex justify-between items-center px-3 h-full'>
        <div className='flex flex-col justify-center gap-4'>{props.children}</div>
        <div>
          <button onClick={handleClick}>
            <Arrow direction={arrowDirection} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;
