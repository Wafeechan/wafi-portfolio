import React, { useState } from 'react';
import './Tabs.css'; // Optional for styling
import image1 from './assets/FYP_1.png';
import image3 from './assets/Portfolio3.png';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab

  const tabs = ['Portfolio 1', 'Portfolio 2', 'Portfolio 3']; // Define tab titles

  // Updated content array with type property
  const content = [
    {
      type: 'image',
      text: 'Investigating Quadrupedal Robotics Learning in a Simulated Environment using Unity ML-Agent',
      src: image1,
      additionalText: "This project explores training a quadrupedal robot using Deep Reinforcement Learning (DRL) in a 3D simulation environment with Unity ML-Agents Toolkit. Leveraging Proximal Policy Optimization (PPO) and Soft Actor-Critic (SAC) algorithms, the robot was trained to stand, balance, and move toward targets. Results showed SAC outperformed PPO, offering more efficient training. Joint force data was also analyzed, providing insights valuable for real-world hardware design. This study demonstrates the potential of DRL for developing intelligent, autonomous robotic systems.",
    },
    {
      type: 'iframe',
      text: 'Narrative Video: Artificial Intelligence (Reinforcement Learning)',
      src: 'https://www.youtube.com/embed/cglpB2LLGJA?si=xDvXNvP_997YWHof', // Replace with your video link
      additionalText: "For this project, I created a digital narrative video on Artificial Intelligence, focusing on Reinforcement Learning. This topic aligned with my Final Year Project, making it a meaningful choice. The video was designed for a general audience, prioritizing clarity and accessibility. While maintaining essential information, I emphasized my editing skills, crafting an engaging and visually appealing presentation that simplifies complex concepts for better understanding.",
    },
    {
      type: 'image',
      text: 'Virtual Reality (VR) Mansion Horror Game',
      src: image3,
      additionalText: "For this project, I developed a VR horror game set in a mansion, utilizing assets provided by our lecturer. The gameplay is divided into two phases: exploration and escape. In the exploration phase, players search for clues and solve puzzles to progress. Once a critical point is reached, the game shifts into an adrenaline-pumping escape sequence, where players must navigate obstacles to reach the exit. This project highlights my ability to design immersive gameplay mechanics and create engaging player experiences in a VR environment.",
    },
  ];

  return (
    <div className="tabs-container">
      {/* Tabs */}
      <div className="tabs-header flex md:flex-row flex-col-2 mx-auto mb-2 space-y-0 w-auto max-w-[300px] justify-center md:max-w-none md:space-x-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${
              activeTab === index
                ? 'bg-cyan-400 text-white'
                : 'bg-white text-gray-600'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 mx-auto mt-6">
        {/* Conditional rendering based on type */}
        <div className="tab-media flex-shrink-0 w-full md:w-auto mt-10">
          {content[activeTab].type === 'image' ? (
            <img
              src={content[activeTab].src}
              alt={`Tab ${activeTab + 1} Media`}
              className="h-[300px] w-[450px] md:h-[400px] md:w-[600px] mx-auto rounded object-contain"
            />
          ) : (
            <iframe
              src={content[activeTab].src}
              title={`Tab ${activeTab + 1} Media`}
              className="h-[300px] w-[450px] md:h-[400px] md:w-[600px] mx-auto rounded"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Text */}
        <div className="tab-text flex flex-col justify-start items-start space-y-4 h-full">
          <p className="custom-text mx-auto text-center">{content[activeTab].text}</p>

          <p className='custom-text2 mt-10 text-left'>
            {content[activeTab].additionalText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
