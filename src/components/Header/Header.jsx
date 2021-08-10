import React from 'react'

const Header = () => {
    return(
        <header className="pointer-events-none text-8xl text-center absolute w-full top-5 z-10">
            <div className="flex justify-center items-end">
                <span className="">ANALOGUE</span>
                <span className="font-serif text-7xl">Space</span>
            </div>
        </header>
    )
}

export default Header