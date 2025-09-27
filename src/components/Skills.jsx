import React, { useEffect, useState } from 'react';

const Skills = ({ data }) => {
    const [skillItems, setSkillItems] = useState([]);

    useEffect(() => {
        if (data) {
            setSkillItems(data.skills)
        }
    }, [data]);

    return (
        <section className="py-12 z-20 relative" id='skills'>
            <div className="container mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8">
                {skillItems && skillItems.section_data && (
                    <h2 className="text-3xl font-bold text-white mb-8 text-center animate__animated animate__jackInTheBox">{skillItems?.section_data?.title}</h2>
                )}
                <div className='flex flex-wrap justify-center gap-4'>
                    {skillItems?.section_body?.map((skill, index) => (
                        <div className='w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] min-w-[140px] max-w-[180px] rounded-xl mb-7 mt-0 bg-[linear-gradient(180deg,_#01d2f870_0%,_#1f1e1c99_67%)] hover:bg-[linear-gradient(180deg,_#01d2f870_100%,_#1f1e1c99_10%)] cursor-pointer transition-all duration-200 ease-in-out hover:-rotate-[5deg]' key={index}>
                            <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                                <img src={skill.skillIcon} className="mx-auto mb-2" alt={skill.skillTitle} />
                                <p className='mb-0 text-yellow-500'>{skill.skillTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}



export default Skills