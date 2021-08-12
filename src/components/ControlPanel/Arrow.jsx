import React from 'react'

const Arrow = (props) => {
    let classes = ""
    if (props.direction === 'left') {
        classes = "transform"
    } else {
        classes = "transform rotate-180"
    }

    return (
        <div className={classes}>
            <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65685 15.0711L0.292891 8.7071C-0.0976334 8.31657 -0.0976334 7.68341 0.292891 7.29288L6.65685 0.928924C7.04738 0.538399 7.68054 0.538399 8.07107 0.928924C8.46159 1.31945 8.46159 1.95261 8.07107 2.34314L3.41421 6.99999L31 6.99999V8.99999L3.41421 8.99999L8.07107 13.6568C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711Z" fill="black"/>
            </svg>
        </div>
    )
}

export default Arrow
