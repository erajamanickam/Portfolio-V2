import React, { useEffect, useState } from 'react';
import ImageLoader from './ImageLoader';
import { HiOutlineClock } from "react-icons/hi2";
import { TiLocationOutline } from "react-icons/ti";

const Experience = ({ data }) => {
    const [expItems, setExpItems] = useState([]);
    useEffect(() => {
        if (data) {
            setExpItems(data.experience)
        }
    }, [data]);

    return (
        <section className="py-12 z-20 relative" id='experience'>
            <div className="container mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8">
                {expItems && expItems.section_data && (
                    <h2 className="text-3xl font-bold text-white mb-8 text-center animate__animated animate__jackInTheBox">{expItems?.section_data?.title}</h2>
                )}
                <div className="flex flex-wrap">
                    {expItems?.section_body?.map((experience, index) => (
                        <div key={index} className="hover:border-indigo-400 border-2 rounded-2xl border-slate-700 flex-shrink-0 w-full md:w-11/12 mx-auto mb-4">
                            <div className="bg-sky-950 p-4 rounded-2xl shadow-md mx-auto w-full flex flex-wrap">
                                <div className='sm:w-1/4 md:w-1/4 lg:w-1/4 w-full flex justify-center md:mb-0 mb-3'>
                                    <ImageLoader
                                        imageName={experience.logo}
                                        altText={`${experience.companyName} Logo`}
                                        className='rounded-full'
                                    />
                                </div>
                                <h3 className="text-xl md:text-xl text-white md:text-left text-center font-semibold mb-2 sm:w-1/4 md:w-1/4 lg:w-1/4 w-full justify-center self-center">{experience.position}<span className='block text-slate-400 text-base'>{experience.companyName}</span></h3>
                                <p className="text-white font-semibold mb-2 sm:w-1/4 md:w-1/4 lg:w-1/4 w-full text-lg md:text-lg flex justify-center self-center items-center "><HiOutlineClock size="23" className='text-gray-400 mr-2' /> {experience.duration}</p>
                                <p className="text-lg text-gray-400 sm:w-1/4 md:w-1/4 lg:w-1/4 w-full self-center flex justify-center items-center"><TiLocationOutline size="23" className='text-gray-400 mr-1' /> {experience.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
