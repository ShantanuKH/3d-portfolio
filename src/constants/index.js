import {Edu,edu2 } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    react,
    tailwindcss,
    java,
    boot,
    wordpress,
    roboticArm,
    amazon,
    youtube
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
            "As a Vice President in my college and a core team member of NSS, I've developed my leadership skills, problem-solving abilities, and talent for managing challenges. This experience has taught me how to coordinate effectively and achieve successful outcomes..",
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

// export const socialLinks = [
//     {
//         name: 'Contact',
//         iconUrl: contact,
//         link: '/contact',
//     },
//     {
//         name: 'GitHub',
//         iconUrl: github,
//         link: 'https://github.com/ShantanuKH',
//     },
//     {
//         name: 'LinkedIn',
//         iconUrl: linkedin,
//         link: 'https://www.linkedin.com/in/shantanu-khadse-a62585230/',
//     }
// ];

export const projects = [
    {
        iconUrl: amazon,
        theme: 'btn-back-green',
        name: 'Amazon-like E-commerce Project',
        description: "This project is a comprehensive e-commerce website featuring key functionalities such as browsing and searching for products, managing a shopping cart with real-time price updates, and completing purchases through a streamlined checkout process. Users can also access size charts for clothing items, ensuring they select the right fit. Testing is conducted using the Jasmine framework, and delivery date estimates are provided in real-time with the integration of the Day.js library. The website boasts a responsive design for optimal viewing across devices, an interactive user interface, and additional features like order history and tracking",
        link: 'https://github.com/ShantanuKH/Amazon-Project',
    },
    {
        iconUrl:youtube,
        theme: 'btn-back-red',
        name: 'Youtube-Clone',
        description: "This project is a dynamic homepage designed to mimic YouTube's interface, constructed using HTML and CSS. It includes features such as video playback, redirection to channel pages, and engaging hover effects to improve user interaction. With its functionality and visual appeal, it offers a user experience similar to that of the actual YouTube platform.",
        link: 'https://github.com/ShantanuKH/Youtube-Clone',
    },
    {
        iconUrl: roboticArm,
        theme: 'btn-back-pink',
        name: 'Robotic arm for Object Detection and Sorting',
        description: 
        'This project showcases a prototype of an automated robotic arm that utilizes Arduino technology and servo motors to perform basic object detection and manipulation tasks. The arm can detect objects using color-based techniques and compare their sizes if multiple objects share the same color. It prioritizes larger objects and employs a sorting algorithm to arrange them accordingly. Overall, the system enables the arm to autonomously detect and interact with objects, demonstrating potential applications in various industries.',
        link: 'https://github.com/ShantanuKH/Robotic-Arm-for-Object-Detection-and-Sorting',
    },
    {
        iconUrl: wordpress,
        theme: 'btn-back-blue',
        name: 'Wordpress Project',
        description: "My WordPress portfolio is a showcase of my work and skills, built using WordPress and enhanced with specialized plugins. The website is designed to highlight my projects and capabilities effectively. Key plugins used include Elementor, a drag-and-drop page builder for easy customization, Essential Addons for Elementor for additional design elements and widgets, and WPForms Lite for creating user-friendly contact forms. With these plugins, I've created a visually appealing and functional portfolio that allows visitors to explore my work and easily get in touch.",
        link: 'https://github.com/ShantanuKH/Portfolio',
    },

];