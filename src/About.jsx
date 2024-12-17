import './About.css'

function About(){

    const renderPage = () => {
        const path = window.location.pathname;
    
        if (path === '/portfolio') return <Portfolio />;
        if (path === '/about') return <About />;
        return <Home />; // Default to Home if no matching path
      };

    return(
        <>
        <head className='m-0 w-full'>
            <title>About Me</title>
        </head>
        <body className='w-full text-gray-600 font-serif mt-[120px] lg:mt-[170px]'>


            <div className='hidden lg:flex lg:flex-row-1 lg:flex-col-1 items-center gap-12 justify-center w-full '>
                {/* Left section */}
                <div className='title-container'>
                <h2 className='title-text ml-10'>Experience</h2>
                    <div className='text-container'>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>October 2024 - December 2024</li> 
                            <li>Waiter/Bartender | Stoneville Hotel | Temburong, Brunei Darussalam</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>A retail position in which we are mostly responsible for customer services within the hotel’s restaurant such as taking and delivering orders, tending the cashier and acting as a barista. Within the first two weeks of me working, I was already given the responsibility to help manage an event hosted by the company’s boss, occupied by more than 70 important figures, along with a buffet during lunchtime which had been occupied by almost 150 people, in which both ended up in a success.</li>  
                        </ul>  
                        <div className='m-4'></div>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>May 2023 - July 2023</li> 
                            <li>Research Assistant | Osaka University | Osaka, Japan</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>Chosen as one of a select group of top students to attend the Osaka University International Certificate Program (OUICP) as a research assistant, with a primary focus on the United Nations’ Sustainable Development Goals (SDGs). There we were given the opportunity to propose a presentation idea on how to integrate halal science into one of their state-of-the-art technologies which they had recently developed.</li>  
                        </ul>    
                        <div className='m-4'></div>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>January 2020 - June 2020</li> 
                            <li>Sales Assistant | Utama Grand Superstore | The Mall Gadong, Brunei Muara</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>A sales assistant helps customers, handles transactions, and maintains store displays to ensure a positive shopping experience. Here I have shown great discipline and commitment to the job no matter how tough the situation gets, especially during the COVID-19 era, along with being able to manage a grueling 3-week period of overtime for preparation of stock checking of the store.</li>  
                        </ul>   
                    </div>

                    {/* ------------------------------------------------SEPERATOR-------------------------------------------------------------- */}
                    <div className='horizontal-line mx-auto my-16'></div>

                    <h2 className='title-text ml-10'>Achievement</h2>
                    <div className='text-container'>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>September 2024</li> 
                            <li>Most Progressive Student Award</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>An award given to students who achieved astounding progress over the course of studying at UTB, showing great improvement in results over the year. Here, I was awarded a 1-year professional membership sponsored by the British Computer Society.</li>  
                        </ul>  
                        <div className='my-16'></div>
                    </div>
                </div>

                {/* Center line */}
                {/* <div className='vertical-line'></div> */}

                {/* Right section */}
                
                <div className='title-container'>
                <h2 className='title-text ml-10'>Education</h2>
                    <div className='text-container'>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>July 2020 - June 2024</li> 
                            <li>Bachelor of Science (Hons) in Digital Media | Universiti Teknologi Brunei</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>Full-time bachelor's degree student under government scholarship</li>  
                            <li>Relevant coursework: Programming, Graphic Design, Artificial Intelligence</li>
                            <li>Awarded First Class Honours</li>
                        </ul>  
                        <div className='m-4'></div>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>2018 - 2019</li> 
                            <li>Maktab Duli Pengiran Muda Al-Muhtadee Billah | Gadong, Brunei Darussalam</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>Subjects taken: Mathematics, Physics & Computer Science</li>  
                        </ul>  
                        <div className='m-4'></div>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>2014 - 2017</li> 
                            <li>Sekolah Menengah Sultan Hassan Bangar | Temburong, Brunei Darussalam</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>Awarded 10 'O' Levels</li>  
                        </ul> 
                    </div>
                    

                    {/* ------------------------------------------------SEPERATOR-------------------------------------------------------------- */}
                    <div className='horizontal-line mx-auto my-16'></div>

                    <h2 className='title-text ml-10'>Skills</h2>
                    <div className='text-container'>
                        <ul className='custom-list-3'>
                            <li>Programming Software: Unity, HTML, Arduino, React, Tailwind CSS</li>  
                            <li>Graphic Design: Adobe Photoshop, Illustrator, After Effects, Premiere Pro, Krita</li>
                            <li>Microsoft Word, Powerpoint, Excel</li>
                            <li>Language: Malay & English</li>
                            <li>Skilled in Interpersonal Engagement, Customer Services, Problem Solving, Analysis</li>
                        </ul>  
                        <div className='my-16'></div>
                    </div>
                </div>

                
                
            </div>

            {/* ----------------------------------------------------HIDDEN FOR LG------------------------------------------------------------- */}
            {/* ----------------------------------------------------HIDDEN FOR LG------------------------------------------------------------- */}
            {/* ----------------------------------------------------HIDDEN FOR LG------------------------------------------------------------- */}


            <div className='flex flex-col lg:hidden items-center justify-center w-full gap-12'>
                {/* SECTION 1 */}
                <div className='title-container-alt'>
                <h2 className='title-text ml-10'>Experience</h2>
                    <div className='text-container'>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>October 2024 - December 2024</li> 
                            <li>Waiter/Bartender | Stoneville Hotel | Temburong, Brunei Darussalam</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>A retail position in which we are mostly responsible for customer services within the hotel’s restaurant such as taking and delivering orders, tending the cashier and acting as a barista. Within the first two weeks of me working, I was already given the responsibility to help manage an event hosted by the company’s boss, occupied by more than 70 important figures, along with a buffet during lunchtime which had been occupied by almost 150 people, in which both ended up in a success.</li>  
                        </ul>  
                        <div className='m-4'></div>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>May 2023 - July 2023</li> 
                            <li>Research Assistant | Osaka University | Osaka, Japan</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>Chosen as one of a select group of top students to attend the Osaka University International Certificate Program (OUICP) as a research assistant, with a primary focus on the United Nations’ Sustainable Development Goals (SDGs). There we were given the opportunity to propose a presentation idea on how to integrate halal science into one of their state-of-the-art technologies which they had recently developed.</li>  
                        </ul>    
                        <div className='m-4'></div>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>January 2020 - June 2020</li> 
                            <li>Sales Assistant | Utama Grand Superstore | The Mall Gadong, Brunei Muara</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>A sales assistant helps customers, handles transactions, and maintains store displays to ensure a positive shopping experience. Here I have shown great discipline and commitment to the job no matter how tough the situation gets, especially during the COVID-19 era, along with being able to manage a grueling 3-week period of overtime for preparation of stock checking of the store.</li>  
                        </ul>   
                    </div>
                    
                    
                </div>

                {/* -------------------------------------------------SEPARATOR------------------------------------------------------------------ */}
                <div className='horizontal-line-2'></div>

                {/* SECTION 2 */}
                <div className='title-container-alt'>
                <h2 className='title-text mx-6'>Education</h2>
                    <div className='text-container'>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>July 2020 - June 2024</li> 
                            <li>Bachelor of Science (Hons) in Digital Media | Universiti Teknologi Brunei</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>Full-time bachelor's degree student under government scholarship</li>  
                            <li>Relevant coursework: Programming, Graphic Design, Artificial Intelligence</li>
                            <li>Awarded First Class Honours</li>
                        </ul>  
                        <div className='m-4'></div>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>2018 - 2019</li> 
                            <li>Maktab Duli Pengiran Muda Al-Muhtadee Billah | Gadong, Brunei Darussalam</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>Subjects taken: Mathematics, Physics & Computer Science</li>  
                        </ul>  
                        <div className='m-4'></div>
                        <ul className='custom-list-1'>
                            <li className='font-semibold'>2014 - 2017</li> 
                            <li>Sekolah Menengah Sultan Hassan Bangar | Temburong, Brunei Darussalam</li>  
                        </ul>
                        <ul className='custom-list-2'>
                            <li>Awarded 10 'O' Levels</li>  
                        </ul> 
                    </div>
                </div>

                {/* -------------------------------------------------SEPARATOR------------------------------------------------------------------ */}
                <div className='horizontal-line-2'></div>

                {/* SECTION 3 */}
                <div className='title-container-alt'>
                <h2 className='title-text ml-10'>Achievement</h2>
                <div className='text-container'>
                    <ul className='custom-list-1'>
                        <li className='font-semibold'>September 2024</li> 
                        <li>Most Progressive Student Award</li>  
                    </ul>
                    <ul className='custom-list-2'>
                        <li>An award given to students who achieved astounding progress over the course of studying at UTB, showing great improvement in results over the year. Here, I was awarded a 1-year professional membership sponsored by the British Computer Society.</li>  
                    </ul>  
                </div>
                </div>

                {/* -------------------------------------------------SEPARATOR------------------------------------------------------------------ */}
                <div className='horizontal-line-2'></div>

                {/* SECTION 4 */}
                <div className='title-container-alt'>
                    <h2 className='title-text mx-6'>Skills</h2>
                    <div className='text-container'>
                        <ul className='custom-list-3'>
                            <li>Programming Software: Unity, HTML, Arduino, React, Tailwind CSS</li>  
                            <li>Graphic Design: Adobe Photoshop, Illustrator, After Effects, Premiere Pro, Krita</li>
                            <li>Microsoft Word, Powerpoint, Excel</li>
                            <li>Language: Malay & English</li>
                            <li>Skilled in Interpersonal Engagement, Customer Services, Problem Solving, Analysis</li>
                        </ul>  
                        <div className='my-16'></div>
                    </div>
                </div>
                
                
            </div>
        </body>
        </>

    )

}

export default About