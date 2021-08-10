import React from 'react'

const NextButton = (props) => {
    return (
        <div
            className="px-6 py-2 border bg-gray-100 text-gray-800 rounded absolute top-20 right-16 z-10 transform transition hover:-translate-x-1 hover:translate-y-1"
            onClick={props.next}
            >
            Next
        </div>
    )
}

export default NextButton