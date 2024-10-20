import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import PositionBg from './PositionBg';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Video from './Video';
import Cta from './Cta';
import Contact from './Contact';
import Footer from './Footer';
import { fetchData } from '../services/apiService';
import Loader from './Loader';


const Homepage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const fetchedData = await fetchData();
            setData(fetchedData);
            setLoading(false);
        };
        loadData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <PositionBg />
            <Navbar data={data} />
            <Hero data={data} />
            <About data={data} />
            <Skills data={data} />
            <Experience data={data} />
            <Projects data={data} />
            <Video data={data} />
            <Cta data={data} />
            <Contact data={data} />
            <Footer data={data} />
        </>
    )
}

export default Homepage


