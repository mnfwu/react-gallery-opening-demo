import React, { useState } from 'react'
import './ControlPanel.css'
import Arrow from './Arrow'

const ButtonContainer = (props) => {
    const [hideContainer, setHideContainer] = useState(false)
    const [containerPosition, setContainerPosition] = useState('left-0 top-10')
    const [arrowDirection, setArrowDirection] = useState('left')
    
    const handleClick = () => {
        setHideContainer(!hideContainer);
        hideContainer ? setContainerPosition('left-0 top-10 container-unhide') : setContainerPosition('container-hide top-10')
        hideContainer ? setArrowDirection('left') : setArrowDirection('right')
    }

    let containerStyles = containerPosition + 'transition-settings bg-transparent border border-gray-800 shadow-xl w-48 h-20 absolute left-0 top-32 z-10'

    return (
        <div className={containerStyles}>
            <div className="flex justify-between items-center px-2 h-full">
                <div className="flex justify-center items-center">
                    {props.children}
                </div>
                <div>
                    <button onClick={handleClick}>
                        <Arrow className="" direction={arrowDirection} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ButtonContainer
