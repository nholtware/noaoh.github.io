import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon, SparklesIcon,
} from '@heroicons/react/24/outline';

import heroImage from '../../public/header-background.webp';
import porfolioImage1 from '../../public/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../../public/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../../public/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../../public/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../../public/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../../public/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../../public/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../../public/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../../public/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../../public/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../../public/portfolio/portfolio-11.jpg';
import profilepic from '../../public/profilepic.webp';
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
  SkillGroup,
  Social,
  TimelineItemProps,
} from './dataDef';

const NODE_ENV = process?.env?.NODE_ENV;

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Noah Holt's Personal Website",
  description: "Welcome to my portfolio!  Hope you enjoy your stay!",
};

/**
 * Section definition
 */
export const HomepageSections = {
  Hero: {urlName: 'hero', displayName: 'Hero', isOnNavBar: false, isOnHomepage: true},
  About: {urlName: 'about', displayName: 'About', isOnNavBar: true, isOnHomepage: true},
  Resume: {urlName: 'resume', displayName: 'Resume', isOnNavBar: true, isOnHomepage: true},
  Portfolio: {urlName: 'portfolio', displayName: 'Portfolio', isOnNavBar: false, isOnHomepage: false},
  Contact: {urlName: 'contact', displayName: 'Contact', isOnNavBar: true, isOnHomepage: true},
  Blog: {
    urlName: blogLinkCreator(NODE_ENV),
    displayName: 'My Blog',
    isOnNavBar: true,
    isOnHomepage: false,
    isOnBlog: true,
  },
  CurrentlyListening: {
    urlName: 'currentlyListening',
    displayName: 'Currently Listening',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  VinylCollection: {
    urlName: 'vinylCollection',
    displayName: 'Vinyl Collection',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  GithubStars: {
    urlName: 'githubStars',
    displayName: 'My Github Stars',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  HnFavorites: {
    urlName: 'hnFavorites',
    displayName: 'My HN Favorites',
    isOnNavBar: true,
    isOnHomepage: false,
  }
} as const;

export const CurrentlyListeningSections = {
  Homepage: {
    urlName: '',
    displayName: 'Home',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  Blog: {
    urlName: blogLinkCreator(NODE_ENV),
    displayName: 'My Blog',
    isOnNavBar: true,
    isOnHomepage: false,
    isOnBlog: true,
  },
  VinyCollection: {
    urlName: 'vinylCollection',
    displayName: 'Vinyl Collection',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  GithubStars: {
    urlName: 'githubStars',
    displayName: 'My Github Stars',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  HnFavorites: {
    urlName: 'hnFavorites',
    displayName: 'My HN Favorites',
    isOnNavBar: true,
    isOnHomepage: false,
  }
} as const;

export const VinylCollectionSections = {
  Homepage: {
    urlName: '',
    displayName: 'Home',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  Blog: {
    urlName: blogLinkCreator(NODE_ENV),
    displayName: 'My Blog',
    isOnNavBar: true,
    isOnHomepage: false,
    isOnBlog: true,
  },
  CurrentlyListening: {
    urlName: 'currentlyListening',
    displayName: 'Currently Listening',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  GithubStars: {
    urlName: 'githubStars',
    displayName: 'My Github Stars',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  HnFavorites: {
    urlName: 'hnFavorites',
    displayName: 'My HN Favorites',
    isOnNavBar: true,
    isOnHomepage: false,
  }
} as const;

export const GithubStarsSections = {
  Homepage: {
    urlName: '',
    displayName: 'Home',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  Blog: {
    urlName: blogLinkCreator(NODE_ENV),
    displayName: 'My Blog',
    isOnNavBar: true,
    isOnHomepage: false,
    isOnBlog: true,
  },
  CurrentlyListening: {
    urlName: 'currentlyListening',
    displayName: 'Currently Listening',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  VinylCollection: {
    urlName: 'vinylCollection',
    displayName: 'Vinyl Collection',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  HnFavorites: {
    urlName: 'hnFavorites',
    displayName: 'My HN Favorites',
    isOnNavBar: true,
    isOnHomepage: false,
  }
}

export const HnFavoritesSections = {
  Homepage: {
    urlName: '',
    displayName: 'Home',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  Blog: {
    urlName: blogLinkCreator(NODE_ENV),
    displayName: 'My Blog',
    isOnNavBar: true,
    isOnHomepage: false,
    isOnBlog: true,
  },
  CurrentlyListening: {
    urlName: 'currentlyListening',
    displayName: 'Currently Listening',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  VinylCollection: {
    urlName: 'vinylCollection',
    displayName: 'Vinyl Collection',
    isOnNavBar: true,
    isOnHomepage: false,
  },
  GithubStars: {
    urlName: 'githubStars',
    displayName: 'My Github Stars',
    isOnNavBar: true,
    isOnHomepage: false,
  }
};

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello there, I'm Noah Holt!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Central Arkansas based <strong className="text-stone-100">Backend Software Engineer</strong>, currently
        working at <strong className="text-stone-100">DexCare</strong> helping to build the future of Healthcare by
        making it easier to get the right appointment, with the right professional, at the right time!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me running, playing video games, hiking, reading, or coding up a new project!
      </p>
    </>
  ),
  actions: [
    {
      href: '/noah-holt-resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
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
  profileImageSrc: profilepic,
  description: `More about me!`,
  aboutItems: [
    {label: 'Location', text: 'North Little Rock, AR', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Video Games, Music, Linux, Programming', Icon: SparklesIcon},
    {label: 'Studied At', text: 'University of Arkansas', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'DexCare', Icon: BuildingOffice2Icon},
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
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
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
    content: (
      <p>
        I developed programs in C++, C, Python, and Node.JS, while not busy with that I was active in my local ACM
        (Association for Computing Machinery) Chapter where I assisted with putting on Hackathons, Mock Interviews and
        Information Sessions to assist my fellow students.
      </p>
    ),
  },
];

export const experience: TimelineItemProps[] = [
  {
    date: 'October 2022 - Present',
    location: 'DexCare',
    title: 'Software Engineer',
    content: (
      <p>
        Working on backends in NodeJS using the Koa framework to provide slots of time for patients to schedule
        appointments.
      </p>
    ),
  },
  {
    date: 'June 2020 - October 2022',
    location: 'Walmart',
    title: 'Software Engineer III',
    content: (
      <p>
        For the first half of my time at Walmart, I worked on software that helped stop customer account activity that
        cost the company half a million dollars per week. For the second half of my time Walmart, I worked on various C#
        backends and Python scripts to automate workflows for Forensics Investigators working with Walmart.
      </p>
    ),
  },
  {
    date: 'June 2019 - August 2019',
    location: 'Walmart',
    title: 'Software Development Engineer Intern',
    content: (
      <p>
        Worked on integrating together a ticketing system and a case management system; also refactored authentication
        for web services.
      </p>
    ),
  },
  {
    date: 'June 2018 - August 2018',
    location: 'ABCFinancial',
    title: 'DevOps Intern',
    content: (
      <p>
        Responsible for proof-of-concept system containerizing Java applications and deploying them via Jenkins. Also
        developed applications to extract and upload computer setup information.
      </p>
    ),
  },
  {
    date: 'June 2017 - August 2017',
    location: 'North Little Rock City Government',
    title: 'IT Department Intern',
    content: (
      <p>
        I assisted in the management of data using PowerShell. I also archived old files and machinery, converting a
        storage room into a training room.
      </p>
    ),
  },
  {
    date: 'June 2016 - August 2016',
    location: 'North Little Rock City Government',
    title: 'Planning Department Intern',
    content: <p>I assisted in the management of data through PowerShell, and other archival tasks.</p>,
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
      href: 'https://www.openstreetmap.org/#map=12/36.3549/-94.2404',
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
