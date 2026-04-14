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
// Unused portfolio images removed
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
  title: 'Ephrem\'S Portfolio',
  description: "",
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
        I'm a <strong className="text-stone-100">5th-Year Software Engineering Student</strong> and <strong className="text-stone-100">Full Stack Lead Developer</strong> based in Addis Ababa.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-neutral-300">
        Specializing in building high-performance, scalable web applications with <strong className="text-stone-100">Next.js, Go, and Node.js</strong>, while leveraging modern ORMs like <strong className="text-stone-100">Prisma and Drizzle</strong> for robust data management.
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
  description: `I’m a 5th-year Software Engineering student at AASTU with a deep passion for building scalable, high-performance systems. My expertise spans the entire stack, from crafting interactive frontends with Next.js to engineering robust backend architectures using Go and Node.js. I have a strong focus on absolute financial transparency and operational efficiency, as demonstrated in my work on View Hoteling. I particularly enjoy working with type-safe ORMs like Prisma, Drizzle, and TypeORM to ensure code quality and data integrity.`,
  aboutItems: [
    { label: 'Location', text: 'Addis Ababa, Ethiopia', Icon: MapIcon },
    { label: 'Age', text: '21', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Ethiopian', Icon: FlagIcon },
    { label: 'Interests', text: 'Building Scalable Apps, Music', Icon: SparklesIcon },
    { label: 'Study', text: 'Addis Ababa Science and Technology University', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Lead Developer & Engineering Student', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Next.js',
        level: 9,
        description: 'Building SEO-friendly, high-performance SSR and static websites.',
      },
      {
        name: 'React',
        level: 8,
        description: 'Building modern, interactive UIs with hooks, state management, and performance optimization.',
      },
      {
        name: 'Vue',
        level: 9,
        description: 'Extensive experience in component-based architecture and reactive state management.',
      },
      {
        name: 'Tailwind CSS',
        level: 9,
        description: 'Rapidly building modern, responsive layouts with utility-first CSS.',
      },
      {
        name: 'Nuxt',
        level: 8,
        description: 'Developing powerful Vue-based applications with seamless SSR/SSG support.',
      },
      {
        name: 'TypeScript',
        level: 8,
        description: 'Ensuring code quality and scalability through strong typing and modern features.',
      },
      {
        name: 'Flutter',
        level: 7,
        description: 'Cross-platform mobile development for high-performance Android and iOS apps.',
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Go',
        level: 8,
        description: 'Building high-performance, concurrent microservices and backend systems.',
      },
      {
        name: 'Node.js',
        level: 9,
        description: 'Developing scalable server-side applications and real-time APIs.',
      },
      {
        name: 'Express.js',
        level: 9,
        description: 'Crafting robust RESTful and GraphQL APIs with middleware architectures.',
      },
      {
        name: 'Prisma',
        level: 9,
        description: 'Advanced ORM with high type-safety for complex database schemas.',
      },
      {
        name: 'Drizzle ORM',
        level: 8,
        description: 'High-performance TypeScript ORM for scalable applications.',
      },
      {
        name: 'TypeORM',
        level: 8,
        description: 'Rich-featured ORM for Node.js and Browser development.',
      },
      {
        name: 'Better Auth',
        level: 8,
        description: 'Implementing secure, modern authentication and authorization workflows.',
      },
      {
        name: 'Prisma / TypeORM',
        level: 8,
        description: 'Efficient database modeling and advanced query orchestration.',
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'PostgreSQL',
        level: 8,
        description: 'Relational database design, optimization, and complex data modeling.',
      },
      {
        name: 'MongoDB',
        level: 9,
        description: 'Working with NoSQL schemas for high-availability distributed systems.',
      },
      {
        name: 'Redis',
        level: 7,
        description: 'Implementing caching strategies and message brokerage for fast data access.',
      },
    ],
  },
  {
    name: 'DevOps / Cloud',
    skills: [
      {
        name: 'Docker',
        level: 8,
        description: 'Containerizing applications for consistent deployment environments.',
      },
      {
        name: 'Kubernetes',
        level: 7,
        description: 'Orchestrating containerized workloads and managing cluster scalability.',
      },
      {
        name: 'CI/CD',
        level: 8,
        description: 'Automating build, test, and deployment pipelines using GitHub Actions.',
      },
    ],
  },
  {
    name: 'Tools / Spoken languages',
    skills: [
      {
        name: 'Git / GitHub',
        level: 9,
        description: 'Advanced version control and collaborative workflow management.',
      },
      {
        name: 'English',
        level: 8,
        description: 'Professional proficiency for international communication and collaboration.',
      },
      {
        name: 'Amharic',
        level: 10,
        description: 'Native proficiency for cultural and technical communication.',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [];


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
    date: 'February 2024 - Present',
    location: 'Addis Ababa',
    title: 'Lead Developer | View Hoteling',
    content: (
      <div className="flex flex-col gap-y-2 text-neutral-300">
        <p className="font-semibold text-yellow">Major Enterprise Hospitality Management Solution</p>
        <p>View Hoteling is a comprehensive hospitality management solution engineered to modernize operations, maximize revenue, and ensure absolute financial transparency. Designed for the high-pressure environment of hotels and restaurants, the platform serves as a central intelligence hub—connecting front-of-house service directly to back-of-house logistics in real-time.</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Automated critical processes: billing, stock deduction, and interdepartmental communication.</li>
          <li>Eliminated revenue leakage, inventory shrinkage, and service latency.</li>
          <li>Implemented scalable multi-tenant architecture for enterprise-level property management.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'January 2024 - Present',
    location: 'Remote',
    title: 'Software Engineer | Zion AI',
    content: (
      <div className="flex flex-col gap-y-2 text-neutral-300">
        <p className="font-semibold text-yellow">Social Media Marketing Automation Platform</p>
        <p>Developed a comprehensive social media marketing tool to automate and schedule content for creators and managers. Focused on creating a streamlined digital ecosystem for automation on social platforms.</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Built advanced scheduling algorithms for content automation.</li>
          <li>Integrated analytics for content creators to monitor engagement.</li>
          <li>Engineered a sleek, responsive dashboard for campaign management.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'September 2024 - Present',
    location: 'Addis Ababa',
    title: 'Full Stack Developer @ Lamda Tutoring Company',
    content: (
      <p className="text-neutral-300">
        Working on the end-to-end development of the tutoring platform interface and server-side logic.
        Focus: User interfaces, database integration (PostgreSQL), and complex RESTful APIs.
      </p>
    ),
  },
  {
    date: 'March 2023 - August 2023',
    location: 'Addis Ababa',
    title: 'Backend Developer @ AASTU Gibigubae',
    content: (
      <p className="text-neutral-300">
        Designed and developed backend services focusing on user management using Prisma ORM.
        Technologies: Node.js, Express, MongoDB, RESTful APIs, Git.
      </p>
    ),
  },
];

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



export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'ephaman48@gmail.com',
      href: 'mailto:ephaman48@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Addis Ababa, Ethiopia',
      href: 'https://www.google.com/maps/place/Addis+Ababa,+Ethiopia',
    },
    {
      type: ContactType.Instagram,
      text: '@Epphrem',
      href: 'https://www.instagram.com/Epphrem/',
    }, {
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
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/EpphremM' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/EpphremM/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/EppremM/' },
];
