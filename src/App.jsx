import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ImageBox from './components/ImageSection/ImageBox';
import ButtonContainer from './components/ControlPanel/ButtonContainer';
import NextButton from './components/ControlPanel/NextButton';
import AboutButton from './components/ControlPanel/AboutButton';
import Modal from './components/Modal/Modal';
import { Wrapper, ImageContainer } from './components/ImageSection/styles';
import { Button } from './components/UI/button.js';

import './App.css';

const matrix = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [3, 2],
  [4, 2],
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 3],
  [4, 3],
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [4, 4],
];

function App() {
  const [distance, setDistance] = useState(1);
  const [bgColor, setBgColor] = useState(240);
  const [paintingNum, setPaintingNum] = useState(1);
  const [paintingUrl, setPaintingUrl] = useState(
    'src/components/ImageSection/static/de_kooning1.jpeg'
  );
  const [showModal, setShowModal] = useState(false);

  const easing = (num) => Math.pow(num, 3);

  const calculateDistance = ([x, y]) => {
    const center = [window.innerWidth / 2, window.innerHeight / 2];
    const maxHypot = Math.hypot(center[0], center[1]);
    const hypot = Math.hypot(center[0] - x, center[1] - y);
    const distance = hypot / maxHypot;
    const easeDistance = easing(distance);
    setDistance(easeDistance);
  };

  const handleMove = ({ clientX, clientY }) => {
    calculateDistance([clientX, clientY]);
  };

  const handleTouchMove = ({ touches }) => {
    calculateDistance([touches[0].clientX, touches[0].clientY]);
  };

  const handleRandomBgClick = () => {
    setBgColor(Math.floor(Math.random() * 240));
  };

  const handlePaintingUrlClick = () => {
    if (paintingNum === 6) {
      setPaintingNum(1);
    } else {
      setPaintingNum(paintingNum + 1);
    }
    switch (paintingNum) {
      case 1:
        // orange hue painting
        setBgColor(240);
        break;
      case 2:
        // black painting
        setBgColor(330);
        break;
      case 3:
        // yellow painting
        setBgColor(285);
        break;
      case 4:
        // greenish-teal painting
        setBgColor(15);
        break;
      case 5:
        // red-yellow-green painting
        setBgColor(262);
        break;
      case 6:
        // reddish-gray painting
        setBgColor(200);
        break;
      default:
        setBgColor(240);
    }
    const Url = `src/components/ImageSection/static/de_kooning${paintingNum}.jpeg`;
    setPaintingUrl(Url);
  };

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <main>
      {showModal && <Modal toggleModal={toggleModal} />}
      <Header />
      <ButtonContainer>
        <NextButton next={handlePaintingUrlClick} />
        <AboutButton action={toggleModal} />
      </ButtonContainer>
      <Footer />
      <Wrapper onMouseMove={handleMove} onTouchMove={handleTouchMove} $color={bgColor}>
        <ImageContainer $isTogether={distance < 0.001}>
          {matrix.map(([x, y], index) => (
            <ImageBox key={index} x={x} y={y} percent={distance} url={paintingUrl} />
          ))}
        </ImageContainer>
      </Wrapper>
    </main>
  );
}

export default App;
