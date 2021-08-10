import React, { useState, useEffect } from 'react'
import './image.css'
import { Image } from './styles'

const ImageBox = ({x, y, percent, url}) => {
    const [position, setPosition] = useState([0,0]);

    useEffect(() => {
        setPosition([Math.random() * 500 - x * 100 - 50, Math.random() * 500 - y * 100 - 50])
    }, [x, y])

    return(
        <Image $url={url} $initialX={x} $initialY={y} $movedX={position[0] * percent} $movedY={position[1] * percent} />
    )
}

export default ImageBox