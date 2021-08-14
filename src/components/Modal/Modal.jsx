import React from 'react'
import { ModalS, BG, Close } from './styles'

const Modal = ({toggleModal}) => {
    return (
        <>
            <ModalS>
                <Close onClick={toggleModal} />
            </ModalS>
            <BG onClick={toggleModal} />
        </>
    )
}

export default Modal
