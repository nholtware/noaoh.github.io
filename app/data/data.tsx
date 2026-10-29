import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DownloadIcon from '@mui/icons-material/Download';
import FlagIcon from '@mui/icons-material/Flag';
import MapIcon from '@mui/icons-material/Map';
import SchoolIcon from '@mui/icons-material/School';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Typography from '@mui/material/Typography';


import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import {blogLinkCreator} from '../utils';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SectionType,
  SkillGroup,
  Social,
  TimelineItemProps,
} from './dataDef';

const blogUrl = blogLinkCreator(import.meta.env.DEV);

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Noah Holt's Personal Website",
  description: "Welcome to my portfolio!  Hope you enjoy your stay!",
};

/**
 * Section definition for homepage scroll sections (used for IDs and anchor links)
 */
export const HomepageSections = {
  Hero: {urlName: 'hero', displayName: 'Hero', isOnNavBar: false, isOnHomepage: true},
  About: {urlName: 'about', displayName: 'About', isOnNavBar: true, isOnHomepage: true},
  Resume: {urlName: 'resume', displayName: 'Resume', isOnNavBar: true, isOnHomepage: true},
  Portfolio: {urlName: 'portfolio', displayName: 'Portfolio', isOnNavBar: false, isOnHomepage: false},
  Contact: {urlName: 'contact', displayName: 'Contact', isOnNavBar: true, isOnHomepage: true},
} as const;

/**
 * Unified nav links used by all page headers
 */
export const navLinks: SectionType[] = [
  {urlName: '', displayName: 'Home', isOnNavBar: true, isOnHomepage: false},
  {urlName: 'about', displayName: 'About', isOnNavBar: true, isOnHomepage: true},
  {urlName: 'resume', displayName: 'Resume', isOnNavBar: true, isOnHomepage: true},
  {urlName: 'contact', displayName: 'Contact', isOnNavBar: true, isOnHomepage: true},
  {urlName: blogUrl, displayName: 'My Blog', isOnNavBar: true, isOnHomepage: false, isOnBlog: true},
  {urlName: 'currentlyListening', displayName: 'Currently Listening', isOnNavBar: true, isOnHomepage: false},
  {urlName: 'vinylCollection', displayName: 'Vinyl Collection', isOnNavBar: true, isOnHomepage: false},
  {urlName: 'githubStars', displayName: 'My Github Stars', isOnNavBar: true, isOnHomepage: false},
  {urlName: 'hnFavorites', displayName: 'My HN Favorites', isOnNavBar: true, isOnHomepage: false},
];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: '/header-background.webp',
  name: `Hello there, I'm Noah Holt!`,
  description: (
    <>
      <Typography sx={{color: 'grey.300', fontSize: {xs: '0.875rem', sm: '1rem', lg: '1.125rem'}}}>
        I'm a Central Arkansas based <strong>Backend Software Engineer</strong>, currently
        working at <strong>DexCare</strong> helping to build the future of Healthcare by
        making it easier to get the right appointment, with the right professional, at the right time!
      </Typography>
      <Typography sx={{color: 'grey.300', fontSize: {xs: '0.875rem', sm: '1rem', lg: '1.125rem'}}}>
        In my free time, you can catch me running, playing video games, hiking, reading, or coding up a new project!
      </Typography>
    </>
  ),
  actions: [
    {
      href: '/noah-holt-resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${HomepageSections.Contact.urlName}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: '/profilepic.webp',
  description: `More about me!`,
  aboutItems: [
    {label: 'Location', text: 'North Little Rock, AR', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarMonthIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Video Games, Music, Linux, Programming', Icon: AutoAwesomeIcon},
    {label: 'Studied At', text: 'University of Arkansas', Icon: SchoolIcon},
    {label: 'Employment', text: 'DexCare', Icon: BusinessIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Rust',
      },
      {
        name: 'Golang',
      },
      {
        name: 'Python',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'C#',
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
      },
      {
        name: 'React Router'
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'ExpressJS',
      },
      {
        name: 'ASP.NET',
      },
      {
        name: 'Flask',
      },
      {
        name: 'Koa',
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'SQL Server',
      },
      {
        name: 'PostgreSQL',
      },
      {
        name: 'Redis',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: '/portfolio/portfolio-1.jpg',
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: '/portfolio/portfolio-2.jpg',
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: '/portfolio/portfolio-3.jpg',
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: '/portfolio/portfolio-4.jpg',
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: '/portfolio/portfolio-5.jpg',
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: '/portfolio/portfolio-6.jpg',
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: '/portfolio/portfolio-7.jpg',
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: '/portfolio/portfolio-8.jpg',
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: '/portfolio/portfolio-9.jpg',
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: '/portfolio/portfolio-10.jpg',
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: '/portfolio/portfolio-11.jpg',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItemProps[] = [
  {
    date: 'August 2016 - May 2020',
    location: 'University of Arkansas',
    title: "Bachelor's of Science in Computer Science",
    gpa: '3.7',
    content: (
      <Typography>
        I developed programs in C++, C, Python, and Node.JS, while not busy with that I was active in my local ACM
        (Association for Computing Machinery) Chapter where I assisted with putting on Hackathons, Mock Interviews and
        Information Sessions to assist my fellow students.
      </Typography>
    ),
  },
];

export const experience: TimelineItemProps[] = [
  {
    date: 'October 2022 - Present',
    location: 'DexCare',
    title: 'Software Engineer',
    content: (
      <Typography>
        Working on backends in NodeJS using the Koa framework to provide slots of time for patients to schedule
        appointments.
      </Typography>
    ),
  },
  {
    date: 'June 2020 - October 2022',
    location: 'Walmart',
    title: 'Software Engineer III',
    content: (
      <Typography>
        For the first half of my time at Walmart, I worked on software that helped stop customer account activity that
        cost the company half a million dollars per week. For the second half of my time Walmart, I worked on various C#
        backends and Python scripts to automate workflows for Forensics Investigators working with Walmart.
      </Typography>
    ),
  },
  {
    date: 'June 2019 - August 2019',
    location: 'Walmart',
    title: 'Software Development Engineer Intern',
    content: (
      <Typography>
        Worked on integrating together a ticketing system and a case management system; also refactored authentication
        for web services.
      </Typography>
    ),
  },
  {
    date: 'June 2018 - August 2018',
    location: 'ABCFinancial',
    title: 'DevOps Intern',
    content: (
      <Typography>
        Responsible for proof-of-concept system containerizing Java applications and deploying them via Jenkins. Also
        developed applications to extract and upload computer setup information.
      </Typography>
    ),
  },
  {
    date: 'June 2017 - August 2017',
    location: 'North Little Rock City Government',
    title: 'IT Department Intern',
    content: (
      <Typography>
        I assisted in the management of data using PowerShell. I also archived old files and machinery, converting a
        storage room into a training room.
      </Typography>
    ),
  },
  {
    date: 'June 2016 - August 2016',
    location: 'North Little Rock City Government',
    title: 'Planning Department Intern',
    content: <Typography>I assisted in the management of data through PowerShell, and other archival tasks.</Typography>,
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please contact me by email for any questions, ideas, or offers.',
  items: [
    {
      type: ContactType.Email,
      text: 'noahryanholt@gmail.com',
      href: 'mailto:noahryanholt@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'North Little Rock, AR',
      href: 'https://www.openstreetmap.org/relation/111138',
    },
    {
      type: ContactType.Github,
      text: 'nholtware',
      href: 'https://github.com/nholtware',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/nholtware'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/5104135/noaoh'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/noahrholt/'},
];
