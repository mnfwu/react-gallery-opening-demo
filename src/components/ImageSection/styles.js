import styled from "styled-components";
import image from './static/de_kooning.jpeg'

export const Wrapper = styled.section.attrs(({$color}) => ({
    style: {
        backgroundColor: `hsl(${$color}, 79%, 53%)`,
    },
}))`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`

export const ImageContainer = styled.div.attrs(({$isTogether}) => ({
    style: {
        animation: $isTogether ? 'glow 3s infinite alternate' : 'none',
    },
}))`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    height: 500px;
    width: 500px;
`

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