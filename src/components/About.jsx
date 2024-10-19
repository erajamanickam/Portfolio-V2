import React, { useEffect, useState } from 'react';
import ImageLoader from './ImageLoader';

const About = ({ data }) => {
    const [aboutItems, setAboutItems] = useState([]);

    useEffect(() => {
        if (data) {
            setAboutItems(data.about)
        }
    }, [data]);

    return (
        <section className="py-12 z-20 relative" id='about'>
            <div className="container mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8">
                <div className="w-11/12 md:w-full mx-auto text-center mb-4 md:mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4 text-center animate__animated animate__jackInTheBox">{aboutItems?.section_data?.title}</h2>
                    <p className='text-gray-300 font-medium text-center md:text-justify text-lg md:text-xl mb-4' dangerouslySetInnerHTML={{ __html: aboutItems?.section_body?.description}}></p>
                    <p className='text-gray-300 font-medium text-center md:text-justify text-lg md:text-xl mb-4'>{aboutItems?.section_body?.quotes}</p>
                </div>
                <div className="w-w-1/3 md:w-full px-4 mb-2 md:mb-8">
                    <ImageLoader
                        imageName={aboutItems?.section_body?.profile_image}
                        altText={aboutItems?.section_body?.profile_alt}
                        className="w-full h-auto shadow-md [clip-path:polygon(22.2%_0%,100%_0%,100%_100%,0%_100%,_0_18.3%)]"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
