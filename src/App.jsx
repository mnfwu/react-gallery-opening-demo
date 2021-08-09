import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ImageBox from './components/ImageSection/ImageBox'
import NextButton from './components/NextButton/NextButton'
import { Wrapper, ImageContainer} from './components/ImageSection/styles'

import './App.css'

const matrix = [
  [0,0], [1,0], [2,0], [3,0], [4,0],
  [0,1], [1,1], [2,1], [3,1], [4,1],
  [0,2], [1,2], [2,2], [3,2], [4,2],
  [0,3], [1,3], [2,3], [3,3], [4,3],
  [0,4], [1,4], [2,4], [3,4], [4,4]
]

// const matrix = [
//   [0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0], [8,0],
//   [0,1], [1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1],
//   [0,2], [1,2], [2,2], [3,2], [4,2], [5,2], [6,2], [7,2], [8,2],
//   [0,3], [1,3], [2,3], [3,3], [4,3], [5,3], [6,3], [7,3], [8,3],
//   [0,4], [1,4], [2,4], [3,4], [4,4], [5,4], [6,4], [7,4], [8,4],
//   [0,5], [1,5], [2,5], [3,5], [4,5], [5,5], [6,5], [7,5], [8,5],
//   [0,6], [1,6], [2,6], [3,6], [4,6], [5,6], [6,6], [7,6], [8,6],
//   [0,7], [1,7], [2,7], [3,7], [4,7], [5,7], [6,7], [7,7], [8,7]
// ]

function App() {
  const [distance, setDistance] = useState(1);
  const [bgColor, setBgColor] = useState(240)

  const easing = (num) => Math.pow(num, 3);

  const calculateDistance = ([x, y]) => {
    const center = [window.innerWidth / 2, window.innerHeight / 2];
    const maxHypot = Math.hypot(center[0], center[1]);
    const hypot = Math.hypot(center[0] - x, center[1] - y);
    const distance = hypot / maxHypot;
    const easeDistance = easing(distance);
    setDistance(easeDistance);
  }

  const handleMove = ({clientX, clientY}) => {
    calculateDistance([clientX, clientY])
  }

  const handleTouchMove = ({touches}) => {
    calculateDistance([touches[0].clientX, touches[0].clientY])
  }

  const handleClick = () => {
    console.log('click')
    setBgColor(Math.floor(Math.random()) * 240)
  }

  // onClick={()=> toggleActive(active === 'inactive' ? active = 'active' : active = 'inactive')

  return (
    <main>
      <Header />
      {/* <NextButton onClick={setBgColor} /> */}
      <Footer />
      <Wrapper
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
        // $color={Math.round(240 - distance * 40)}
        $color={bgColor}
      >
        <ImageContainer $isTogether={distance < 0.001}>
          {matrix.map(([x,y], index) => (
            <ImageBox key={index} x={x} y={y} percent={distance} />
          ))}
        </ImageContainer>
      </Wrapper>
    </main>
  )
}

export default App
