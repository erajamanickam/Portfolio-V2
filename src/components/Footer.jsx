import React, { useEffect, useState } from 'react';
import { FaRegCopyright } from "react-icons/fa";

const Footer = ({ data }) => {
    const currentYear = new Date().getFullYear();
    const [footerItems, setFooterItems] = useState([]);

    useEffect(() => {
        if (data) {
            setFooterItems(data.footer)
        }
    }, [data]);

    return (
        <footer className="text-white py-4 shadow-[0_0_3px_rgba(255,255,255,0.15)] bg-slate-900 z-20 relative">
            <div className="text-center md:text-left container mx-auto flex flex-col md:flex-row md:justify-between">
                <div className="text-sm mb-2 md:mb-0 flex items-center"><FaRegCopyright className="mr-1" /> {currentYear}. {footerItems?.section_body?.copyright}</div>
                <div className="text-sm">{footerItems?.section_body?.developed}</div>
            </div>
        </footer>
    );
};

export default Footer;
