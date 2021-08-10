import React from 'react'

const Header = () => {
    return(
        <header 
        className="pointer-events-none text-center absolute w-full top-5 z-10
        lg:text-8xl md:text-7xl sm:text-6xl text-5xl
        ">
            <div className="flex justify-center items-end">
                <span className="">ANALOGUE</span>
                <span className="font-serif lg:text-7xl md:text-6xl sm:text-5xl text-4xl">Space</span>
            </div>
        </header>
    )
}

export default Header