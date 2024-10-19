import React from 'react'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
                <h1 className="text-9xl font-bold text-white mb-4">404</h1>
                <p className="text-lg text-gray-300 mb-8">Oops! Page not found.</p>
                <Link to="/" smooth={true} duration={500}>
                    <button className="py-0 px-7 h-[2.6em] transition-all duration-150 ease-in-out shadow-lg focus:outline-none font-size-[18px] inline-block outline-none border-none cursor-pointer will-change-[box-shadow,transform] bg-gradient-to-r from-[#89E5FF] to-[#5468FF] shadow-indigo-500/50 rounded-full hover:transform hover:-translate-y-1 hover:shadow-lg">
                        Go Back
                    </button>
                </Link>
            </section>
        </>
    )
}

export default NotFoundPage
