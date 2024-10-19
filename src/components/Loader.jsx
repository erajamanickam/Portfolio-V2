import React from 'react'
import loderImg from '../assets/images/vite.svg'

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={loderImg} alt="Loading..." className="w-16 h-16" />
        </div>
    )
}

export default Loader
