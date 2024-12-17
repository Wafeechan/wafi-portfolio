import { useState } from 'react'
import ImageSlider from './Slider'
import Tabs from './Tabs'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Portfolio(){

    const renderPage = () => {
        const path = window.location.pathname;
    
        if (path === '/portfolio') return <Portfolio />;
        if (path === '/about') return <About />;
        return <Home />; // Default to Home if no matching path
      };

    return(
        <>
        <head className='m-0 w-full'>
            <title>My Portfolio</title>
        </head>
        <body className='w-full text-white font-serif'>
            <div className='block mt-[120px] md:mt-[150px] lg:mt-[180px]'>
                <Tabs />
            </div>
            </body>
        </>
    )

    

}

export default Portfolio