import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Projects = ({ data }) => {

    const [projectItems, setProjectItems] = useState([]);

    useEffect(() => {
        if (data) {
            setProjectItems(data.project)
        }
    }, [data]);

    const isActive = projectItems?.section_body ? projectItems.section_body.filter(p => p.isActive) : [];

    useEffect(() => {
        if (isActive.length > 0) {
            // console.log(isActive);
        }
    }, [isActive]);

    return (
        <section className="py-12 z-20 relative" id='projects'>
            <div className="container mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8">
                {projectItems && projectItems.section_data && (
                    <>
                        <h2 className="text-3xl font-bold text-white text-center mb-4 animate__animated animate__jackInTheBox">{projectItems?.section_data?.title }</h2>
                        <p className="text-lg text-gray-300 mb-8 text-center" dangerouslySetInnerHTML={{ __html: projectItems?.section_data?.description  }}></p>
                    </>
                )}
                <div className="flex flex-wrap -mx-4">
                    {isActive.map((project) => (
                        <div key={project.id} className="w-full md:w-1/2 px-4 mb-8 mx-auto">
                            <div className="bg-[#ffffff0d] p-6 border-solid border border-slate-600 rounded-lg shadow-md flex items-center flex-col md:flex-row">
                                <div className="md:mr-6 mr-0 w-2/5 md:w-2/5">
                                    <img src={project.icon} alt={`Icon for ${project.title}`} className='w-full h-full' />
                                </div>
                                <div className='w-3/2 md:w-3/2 md:text-left text-center'>
                                    <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                                    <p className="text-slate-300">{project.description}</p>
                                    <a href={project.link} className="text-[#61DAFB] hover:text-white flex mt-1 md:justify-start justify-center" target="_blank" rel="noreferrer">Know More <MdOutlineKeyboardDoubleArrowRight size='24' className='mt-[2px]' /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
