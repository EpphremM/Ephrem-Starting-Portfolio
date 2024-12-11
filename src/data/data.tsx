import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ephrem.`,
  description: (
    <>
     <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
  I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong> based in Addis Ababa, currently working at 
  <strong className="text-stone-100">Lamda Tutoring Company</strong>  build modern web applications that 
  enhance teachers and students benefit.
</p>
<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
  In my free time, you can catch me exploring new coding challenges, working on personal projects, or enjoying 
  activities like <strong className="text-stone-100">listening music</strong> <strong className="text-stone-100"></strong>.
</p>

    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
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
  description: `I’m a fourth-year Software Engineering student interested in programming. I’m particularly interested in backend development, where I enjoy building scalable RESTful APIs, databases, and server-side logic.  My current tech stack includes Node.js, TypeScript and many other backend and frontend frameworks`,
  aboutItems: [
    {label: 'Location', text: 'Addis Ababa, BC', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Ethiopian ', Icon: FlagIcon},
    {label: 'Interests', text: 'Listening Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Addis Ababa Science and Technology University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Studing and partime jobs', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Amharic',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Vue',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Nuxt',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Expres.js',
        level: 8,
      },
      {
        name: 'Prisma',
        level: 7,
      },
      {
        name: 'Typeorm',
        level: 8,
      },
    ],
  },
  
  {
    name: 'Mobile development',
    skills: [
     
      {
        name: 'Flutter',
        level: 8,
      },

    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Project title 1',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage1,
  // },
  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];


export const education: TimelineItem[] = [
  {
    date: 'From September 2022 - Present',
    location: 'Addis Ababa Science and Technology University(AASTU)',
    title: 'Bachelor in Software Engineering',
    content: <p>I’ve gained a strong foundation in software development principles, algorithms, and data structures.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2023 - Augest 2023',
    location: 'Addis Ababa',
    title: 'Backend Developer for AASTU Gibigubae',
    content: (
      <p> I worked on designing and developing backend services, focusing on user management using prisma ORM
        Technologies used:Node.js,Express,MongoDB,RESTful APIs,Git
      </p>
    ),
  },
  {
    date: 'September 2024 - Present',
    location: 'Addis Ababa',
    title: 'Full Stack developer at Lamda Tutoring Company',
    content: (
      <p>
       As a Full Stack Developer at Lamda Tutoring Company, I work on both the frontend and backend of the platform,I have worked on designing and implementing user interfaces, as well as developing server-side logic and database integration. Technology used: Node.js,Express,Postgresql,RESTful APIs,Git
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
      {
        name: 'Yigermal',
        text: 'His strong communication skills and collaborative nature stood out throughout the process.',
      },
      {
        name: 'Selomon',
        text: 'His attention to detail and problem-solving abilities are unmatched.',
      },
      {
        name: 'Adem',
        text: ' He is a team player and always brings innovative ideas to the table.',
      },
    ]
    
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'ephaman48@gmail.com',
      href: 'mailto:ephaman48@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Addis Ababa, Ethiopia',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@Epphrem',
      href: 'https://www.instagram.com/Epphrem/',
    },{
    type: ContactType.Phone,
    text: '+251938413473',
  },
    {
      type: ContactType.Github,
      text: 'EpphremM',
      href: 'https://github.com/EpphremM',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/EpphremM'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/EpphremM/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/EppremM/'},
];
