import React from 'react'

const NextButton = (props) => {
    return (
        <div className="px-6 py-2 border bg-gray-200 text-gray-800 
        z-10 
        transform transition hover:scale-105"
            onClick={props.next}
            >
            Next
        </div>
    )
}

export default NextButton