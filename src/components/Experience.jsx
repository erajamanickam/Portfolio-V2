import React, { useEffect, useState } from 'react';
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
                        <div key={index} className="hover:border-indigo-400 border-2 rounded-2xl border-slate-700 flex-shrink-0 w-full sm-plus:w-11/12 mx-auto mb-4">
                            <div className="bg-sky-950 p-3 sm-plus:p-4 rounded-2xl shadow-md mx-auto w-full flex flex-col sm-plus:flex-row sm-plus:flex-wrap">
                                <div className='w-full sm-plus:w-1/4 flex justify-center sm-plus:justify-center mb-3 sm-plus:mb-0'>
                                <img src={experience.logo} className='rounded-full w-16 h-16 sm-plus:w-20 sm-plus:h-20 object-cover' alt={`${experience.companyName} Logo`} />
                                </div>
                                <h3 className="text-lg sm-plus:text-xl text-white text-center sm-plus:text-left font-semibold mb-2 w-full sm-plus:w-1/4 flex flex-col justify-center">{experience.position}<span className='block text-slate-400 text-sm sm-plus:text-base'>{experience.companyName}</span></h3>
                                <p className="text-white font-semibold mb-2 w-full sm-plus:w-1/4 text-base sm-plus:text-lg flex justify-center sm-plus:justify-start items-center"><HiOutlineClock size="20" className='text-gray-400 mr-2' /> {experience.duration}</p>
                                <p className="text-base sm-plus:text-lg text-gray-400 w-full sm-plus:w-1/4 flex justify-center sm-plus:justify-start items-center"><TiLocationOutline size="20" className='text-gray-400 mr-1' /> {experience.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
