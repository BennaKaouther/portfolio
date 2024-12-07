import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Projet1 from './assets/Projet1.png';
import Projet2 from './assets/Projet2.png';
import Projet3 from './assets/Projet3.png';
import Projet4 from './assets/Projet4.png';
import Projet5 from './assets/Projet5.png';
import Projet6 from './assets/Projet6.png';

import Theme1 from './assets/rose.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/violet.png';
import Theme4 from './assets/bleu.png';
import Theme5 from './assets/gold.png';
import Theme6 from './assets/turquoise.png';
import Theme7 from './assets/vertPistache.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/vert.png';
import Theme10 from './assets/jaune.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Benna',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Kaouther',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '39 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Tunisian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: '112 Place Vanier Val D Or Qc Canada',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+1 819 651 5929',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'Benna.Kaouther@mail.com',
  },

  {
    id: 9,
    title: 'Linkedin : ',
    description: 'Kaouther Benna',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'French, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '6+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '8+',
    title: 'Completed <br /> Projects',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'sept 2020 - PRESENT',
    title: 'IT software developer',
    desc: 'Develop software (finance, employer declaration, invoicing, transfer, etc.).</br> Carry out follow-up for corrective or evolutionary maintenance',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'sept 2018 - August 2020',
    title: 'IT software developer',
    desc: 'Develop a tactile checkout.<br>Develop a borne interactive.<br> Develop a kitchen screen',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'March 2012 - August 2014',
    title: 'Freelance developer',
    desc: 'Develop management software for accounting',
  },
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Full stack web training (MERN)',
    desc: 'Elife center',
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2010',
    title: 'Mastery in computer science applied to networks',
    desc: 'The Higher School of Technology and Computer Science, Tunisia',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2005',
    title: 'Baccalaureate Technical section',
    desc: 'Lycée Almay Djerba, Tunisie',
  },
];

export const skills_frontEnd = [
  {
    id: 1,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Css',
    percentage: '67',
  },

  {
    id: 3,
    title: 'JavaScript',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Bootstrap',
    percentage: '75',
  },

  {
    id: 5,
    title: 'Redux',
    percentage: '40',
  },

  {
    id: 6,
    title: 'ReactJS',
    percentage: '72',
  },

];
export const skills_backEnd = [
  {
    id: 1,
    title: 'MongoDB',
    percentage: '66',
  },

  {
    id: 2,
    title: 'ExpressJS',
    percentage: '58',
  },

  {
    id: 3,
    title: 'NodeJS',
    percentage: '50',
  },

];
export const skills_software = [
  {
    id: 1,
    title: 'Windev',
    percentage: '88',
  },

  {
    id: 2,
    title: 'GitHub',
    percentage: '58',
  },

  {
    id: 3,
    title: 'React Native',
    percentage: '40',
  },

];
export const portfolio = [
  {
    id: 1,
    img: Projet1,
    title: 'Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'MealsBook',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Reactjs - MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www..com',
      },
    ],
  },

  {
    id: 2,
    img: Projet2,
    title: 'Software',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'cash register',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Devcom Technologie',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Windev',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 3,
    img: Projet3,
    title: 'Software',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Invoice management',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Alpha challenge',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Windev',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 4,
    img: Projet4,
    title: 'Software',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'cash register',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'T&M Consulting',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Windev',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 5,
    img: Projet5,
    title: 'Website',
    details: [
      {
        title: 'Project : ',
        desc: 'End of training project',
      },
      {
        title: 'Client : ',
        desc: 'training',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS, MongoDB',
      },
      {
        title: 'Preview : ',
        desc: 'www..com',
      },
    ],
  },

  {
    id: 6,
    img: Projet6,
    title: 'Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Rest api example',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'training',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, API REST',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www..com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'rgb(242,74,187)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'rgb(243,41,57)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'rgb(183,97,250)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'rgb(66,169,202)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'rgb(251,156,28)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'rgb(83,217,190)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'rgb(173,220,66)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'rgb(236,92,0)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'rgb(89,145,34)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'rgb(253,222,7)',
  },
];
