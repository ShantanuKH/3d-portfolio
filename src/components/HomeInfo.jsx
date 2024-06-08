import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'



/* Whenever the currentStage will be 1,2,3,4 then there will be pop up, but writing the code for currentStage {1} then for currentStage {2} and then currentStage {3}, currentStage {4} will lead to repetition of same code and so we are doning like this (Below) */


const InfoBox =({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi! I am <span className='font-semibold'>Shantanu 👋 </span> <br/> A Software Engineer from India </h1>
    ),
    2: (
        <InfoBox
        text="Keen to discover more? Click 'Learn More' to explore my portfolio!"
        link="/about"
        btnText="Learn More"
        />
        
    ),
    3: (
        <InfoBox
        text="Dive into My Project Showcase!"
        link="/projects"
        btnText="Projects"
        />
     
    ),
    4: (

        <InfoBox
        text="Flexible Software Engineer ! Open for Work, Let's Connect!"
        link="/contact"
        btnText="Contact Here"
        />
     
    ),
    
}




const HomeInfo = ({currentStage}) => {
  return renderContent [currentStage] || null;
 }

export default HomeInfo
