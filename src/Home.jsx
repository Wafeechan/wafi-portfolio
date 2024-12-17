import { useState } from 'react'
import ImageSlider from './Slider'
import image1 from './assets/FYP_1.png'
import image2 from './assets/Portfolio2.png'
import image3 from './assets/Portfolio3.png'
import myImage from './assets/AWpfp.jpg'


function Home(){
    
    const images = [
        { id: 1, url: image1 },
        { id: 2, url: image2 },
        { id: 3, url: image3 },
    ];

    return(
        <>
        <head className='m-0 w-full'>
            <title>My Portfolio</title>
        </head>
        <body className='w-full text-gray-600 font-serif'>

            <div className='hidden lg:block pt-[150px] px-[36px] lg:pt-[180px] lg:px-[36px]'>
                <span className='grid grid-cols-2 grid-rows-[mb-24,auto,auto] gap-x-12'>
                    <img className='mx-auto mb-auto mt-8 px-10 md:float-end md:col-span-1 h-[600px] md:row-span-3 object-cover object-left' src={myImage} alt="" />
                    <h1 className=' pr-6 text-6xl mt-10 mb-10 text-start text-white '>Abdul Wafi Norfadilah</h1>
                    <h5 className='mx-auto pr-8 mb-10 text-white text-balance text-start text-xl'>I’m a Digital Media post-grad with a wide range of skills under my belt. Whether it’s programming, web development, digital design, basic engineering, or analysis, I enjoy taking on different challenges and finding creative solutions. Being a jack of all trades means I can adapt to whatever comes my way and bring a fresh perspective to every project.</h5>
                    <span className='float-end mb-2'>
                        <h1 className='text-xl font-extralight text-white text-center mb-4'>Portfolio Preview</h1>
                        <ImageSlider images={images} width="450px" height="250px" />
                        {/* You can use different dimensions in other components if needed */}
                    </span>
                </span>
            </div>

            <div className='lg:hidden py-[120px] md:py-[150px] px-[36px] mx-10'>
                <span className='block'>
                    <img className='ml-auto mr-auto col-span-1 mb-12 pt-4 px-4 lg:px12 w-[500px] h-[350px] object-cover object-top' src={myImage} alt="" />    
                    <p className='mx-auto text-4xl text-white col-span-1 mb-8 text-center'>Abdul Wafi Norfadilah</p>
                    <h5 className='mx-auto mb-10 text-white text-balance text-center text-lg'>I’m a Digital Media post-grad with a wide range of skills under my belt. Whether it’s programming, web development, digital design, basic engineering, or analysis, I enjoy taking on different challenges and finding creative solutions. Being a jack of all trades means I can adapt to whatever comes my way and bring a fresh perspective to every project.</h5>
                    <span className=''>
                        <h1 className='text-gray-800 text-2xl text-center mx-16 mb-2'>Portfolio Preview</h1>
                        <ImageSlider images={images} width="400px" height="250px" />
                        {/* You can use different dimensions in other components if needed */}
                    </span>
                </span>
            </div>

            

            
        </body>
        
        </>
    )

}

export default Home