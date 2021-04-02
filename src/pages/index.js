import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Services from '../components/Services';
import { homeObjTwo, homeObjThree } from '../components/Hero/Data';
import { homeObjOne } from '../components/Info/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero {...homeObjTwo} />
            <Info {...homeObjOne} />
            <Hero {...homeObjThree} />
            <Services />
        </>
    )
}

export default Home;
