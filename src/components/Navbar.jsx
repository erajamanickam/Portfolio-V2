import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';


const Navbar = ({ data }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        if (data) {
            setMenuItems(data.menu)
        }
    }, [data]);


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="z-30 w-4/5 sticky top-0 mx-auto block rounded-b-3xl p-4 backdrop-blur-md border-solid border-2 border-slate-600">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl cursor-pointer">
                        <Link to="home" smooth={true} duration={500} className='cursor-pointer'> Portfolio</Link>
                    </div>
                    <div className="hidden md:flex test space-x-6">
                        {menuItems.map((item, index) => (
                            <Link to={item.link} key={index} smooth={true} duration={500} className='text-white hover:text-gray-300 focus-visible:outline-none cursor-pointer'>
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button className="text-white" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 transition-transform transform"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 transition-transform transform rotate-180"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden mt-2">
                        {menuItems.map((item, index) => (
                            <Link to={item.link} key={item.index} onClick={closeMobileMenu} smooth={true} duration={500} className='block text-white py-2 cursor-pointer'>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
