import styled from "styled-components";
import image from './static/de_kooning.jpeg'

export const Image = styled.div.attrs(({$movedX, $movedY}) => ({
    style: {
        transform: `translate(${$movedX}px, ${$movedY}px)`
    }
}))`
    background-image: url(${image});
    background-size: 500px 500px;
    height: 100px;
    width: 100px;
    position: relative;
    background-position: ${({$initialX, $initialY}) => 
        `-${$initialX * 100}px -${$initialY * 100}px`};
`