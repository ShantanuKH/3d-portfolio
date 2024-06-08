import {Edu,edu2 } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    java,
    boot
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "java",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
 
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: boot,
        name: "boot",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Bachelor's Degree",
        company_name: "PESMCOE, Pune",
        icon: edu2,
        iconBg: "#accbe1",
        date: "2021 - 2025",
        points: [
            "I'm pursuing my bachelors degree in Electronics & Computer Engineering at PESMCOE Pune",
            "As an NSS core team member and Vice-president in my college, I've honed my leadership abilities, problem-solving skills, and understanding of managing challenges, ensuring effective coordination and successful outcomes.",
        ]
    },
    {
        title: "HSC",
        company_name: "People's College of Science, Commerce, Arts, Yavatmal",
        icon:edu2,
        iconBg: "#fbc3bc",
        date: "2019 - 2021",
        points: [
            "Achieved an outstanding score of 96.50% in high school education, showcasing dedication and academic excellence.",
            
        ],
    },
    {
        title: "SSC",
        company_name: "Free Methodist English High School, Yavatmal",
        icon:edu2,
        iconBg: "#b7e4c7",
        date: "2009-2019",
        points: [
            "Achieved an outstanding score of 91% during my academic tenure",
            "Having also served as a school leader during my academic years, I gained invaluable experience in teamwork and communication, which have greatly contributed to my ability to collaborate effectively and communicate efficiently."
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ShantanuKH',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shantanu-khadse-a62585230/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];