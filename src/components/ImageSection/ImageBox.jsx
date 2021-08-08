import React from 'react'
import './image.css'

const ImageBox = ({x, y}) => {
    const styleX = {
        backgroundPositionX: (-x * 100)
    };

    const styleY = {
        backgroundPositionY: (-y * 100)
    };

    return(
        <div className="image-box">
            <div className="image" style={{backgroundPosition: (-x * 100) (-y * 100)}}></div>
        </div>
    )
}

export default ImageBox