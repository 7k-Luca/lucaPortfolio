// projectData.js
// main images
import SEEF from '../projects/SEEFLogo.png';
import AECOM from '../projects/AECOMLogo.png';
import Portfolio from '../projects/Portfolio.png';
import C from '../projects/C.png';

// carousel seef images
import Dashboard from '../projects/seef/Dashboard.png';
import Dashboard2 from '../projects/seef/Dashboard2.png';
import Event from '../projects/seef/Event.png';
import Event2 from '../projects/seef/Event2.png';
import Scholarship from '../projects/seef/Scholarship.png';
import Scholarship2 from '../projects/seef/Scholarship2.png';
import AdminPages from '../projects/seef/AdminPages.mp4';

// carousel portfolio images
import Homepage from '../projects/portfolio/Homepage.png'
import Figma1 from '../projects/portfolio/Figma1.png'
import Figma2 from '../projects/portfolio/Figma2.png'
import Figma3 from '../projects/portfolio/Figma3.png'
import Figma4 from '../projects/portfolio/Figma4.png'
import Figma5 from '../projects/portfolio/Figma5.png'

// carousel C++ images
import CreditCards from '../projects/C/CreditCards.png'
import Soccer from '../projects/C/Soccer.png'
import Everglades from '../projects/C/Everglades.png'
import SoftDrink from '../projects/C/SoftDrink.png'

export const projects = [
    {
        title: 'SEEF Website',
        
        image: SEEF,
        images: [AdminPages, Dashboard, Dashboard2, Event, Event2, Scholarship, Scholarship2],
        imagePad : 'small',
        Link: 'https://www.stranahanfund.com',
        message: [
            {
                title: 'Problem',
                responseMessage: 'The Stranahan Education Endowment Fund (SEEF) grappled with a poorly designed, outdated website riddled with broken links, hindering its functionality and user experience.',
            },
            {
                title: 'Objective',
                responseMessage: 'My primary aim was to revamp the SEEF website comprehensively. I aspired to create a responsive, easily maintainable platform with an intuitive online admin page. My overarching goal was to transform the user experience, ensuring everything on the site appeared sleek and functioned seamlessly.',
            },
            {
                title: 'Approach',
                responseMessage: "To address the challenge, I embarked on a structured approach. Extensive research led me to select React JS and Firebase as the optimal technologies. Firebase's suite of services, including Firestore Database, Firebase Authentication, Firebase Storage, and Firebase Hosting, played pivotal roles. Additionally, I coordinated with hosting providers StableHost and GoDaddy for domain setup. Collaboration with SEEF stakeholders was integral, allowing me to fine-tune designs and incorporate feedback iteratively.",
            },
            {
                title: 'Results',
                responseMessage: "The culmination of my efforts is a modern, fully operational website. This revamped platform empowers Stranahan High School students to keep content up to date with ease. Key features include user-friendly forms, an admin area with project management capabilities and user management tools, as well as streamlined scholarship management. Furthermore, the website's enhanced security and data management features have elevated SEEF's online presence, ensuring seamless interactions with its audience and efficient administration.",
            },
        ],
    },
    {
        title: 'Portfolio Website',
        image: Portfolio,
        images: [Homepage, Figma1, Figma2, Figma3, Figma4, Figma5],
        imagePad: 'small',
        Link: 'https://github.com/7k-Luca/lucaPortfolio',
        message: [
            {
                title: 'Problem',
                responseMessage: 'I was seeking to showcase my work and provide a centralized platform for my resume and online profiles such as Github and LinkedIn. I faced the challenge of finding a suitable solution beyond a traditional resume.',
            },
            {
                title: 'Objective',
                responseMessage: 'My goal was to create an elegant, responsive, and easily maintainable portfolio website that would serve as a hub for my professional identity. This Website would not only display my work but also seemlessly integrate a home page, an about page, a page to show off my projects, a contact form, links to my GitHub, LinkedIn, and Resume.',
            },
            {
                title: 'Approach',
                responseMessage: 'To bring this vision to life, I started by crafting a thoughtful design using Figma, ensuring a visually appealing and user-friendly interface. For the development, I chose to implement teh website using React.js for the frontend, which allowed for dynamic and interactive features. To manage the contact form and host the website, I utilized Firebase, making use of Firestore Database for data storage and Firebase Hosting for reliable deployment.',
            },
            {
                title: 'Results',
                responseMessage: 'All of this combined led to a beautifully designed, responsive portfolio website that not only showcases my work but also serves as a seemless bridge to my professional online presence. Visitors can explore my projects, access my resume, learn about me, and connect with me on platforms like GitHub and LinkedIn, all in one convenient location. The website is easily maintainable ensuring that my portfolio remains up-to-date. Additionally, the use of Firebase for the contact form and hosting guarantees reliable functionality and swift communication. This portfolio website has become a valuable asset in presenting my skills and accomplishments to potential employers, clients, and collaborators, effectively representing my professional identity online.',
            },
        ],
    },
    // {
    //     title: 'C++ Projects Part 1',
    //     imagePad : 'small',
    //     image: C,
    //     images: [CreditCards, Soccer, Everglades, SoftDrink],
    //     Link: 'https://github.com/7k-Luca?tab=repositories',
    //     message: [
    //         {
    //             title: 'Problem',
    //             responseMessage: 'My journey into the world of C++ began with a curiosity and a lack of prior experience in the language.',
    //         },
    //         {
    //             title: 'Objective',
    //             responseMessage: 'My primary aim was simple: to expand my knowledge and proficiency in C++.',
    //         },
    //         {
    //             title: 'Approach',
    //             responseMessage: " embarked on this learning adventure through a combination of formal classes and dedicated personal practice.",
    //         },
    //         {
    //             title: 'Results',
    //             responseMessage: "The result of my efforts is is evident in the creation of multiple projects and my growing comfort with the C++ language. You can explore the majority of these projects by visiting my GitHub portfolio through the provided link above."
    //         }                   
    //     ],
    // },
    {
        title: 'Civil Engineering Internship',
        message: [
            {
                title: 'Internship',
                responseMessage: 'During my summer internship with AECOM/Broward County Public Schools/Atkinsons, I had the privilege of contributing to the SMART program, a critical initiative directed by BCPS to revitalize its educational facilities.',
            },
            {
                title: 'Roles',
                responseMessage: 'My responsibilities encompassed various facets of the construction and renovation process. This included engaging in scheduling, estimating, and the creation/processes of detailed plans using AutoCAD.',
            },
            {
                title: 'Overview',
                responseMessage: 'Beyond the digital realm, I also had the opportunity to gain hands-on experience by overseeing construction and renovations at multiple Broward County Public Schools.',
            },
            {
                title: 'Impact',
                responseMessage: 'This internship not only expanded my practical knowledge but also allowed me to directly contribute to enhancing the learning environments in BCPS schools, ultimately benefiting students and the community as a whole.',
            },
        ],
        image: AECOM,
    },
];
