import { Github, Twitter, Figma } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoExpo from  '/public/images/logos/logo-wordmark.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';
import LogoWebIQ from '/public/images/logos/webiq.png';

import PrepaidMeter from '/public/images/prepaidmeter.png';
import Relisted from '/public/images/relisted.png';
import Naji from '/public/images/naji.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';


import {
  ExperienceDetails,
  ProjectDetails,
  TechDetailsType,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shahsagarm',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  // {
  //   label: 'About',
  //   href: '#about',
  // },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/willythecruise',
  },
  // {
  //   icon: Twitter,
  //   url: 'https://twitter.com/shahsagarm',
  // },
  // {
  //   icon: Figma,
  //   url: 'https://www.figma.com/@shahsagarm',
  // },
];

export const TECHNOLOGIES: TechDetailsType[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Expo',
    logo: LogoExpo,
    url: 'https://expo.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  // {
  //   label: 'Nest.js',
  //   logo: LogoNest,
  //   url: 'https://nestjs.com/',
  // },
  // {
  //   label: 'Socket.io',
  //   logo: LogoSocket,
  //   darkModeLogo: LogoSocketLight,
  //   url: 'https://socket.io/',
  // },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  // {
  //   label: 'Sass/Scss',
  //   logo: LogoSass,
  //   url: 'https://sass-lang.com/',
  // },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  // {
  //   label: 'Figma',
  //   logo: LogoFigma,
  //   url: 'https://www.figma.com/',
  // },
  // {
  //   label: 'Cypress',
  //   logo: LogoCypress,
  //   darkModeLogo: LogoCypressLight,
  //   url: 'https://www.cypress.io/',
  // },
  // {
  //   label: 'Storybook',
  //   logo: LogoStorybook,
  //   url: 'https://storybook.js.org/',
  // },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    name: "ORION INDUSTRIAL",
    position: 'LEAD SOFTWARE ARCHITECT AND SOFTWARE ENGINEER',
    startDate: new Date(2024, 2),
    currentlyWorkHere: true,
    summary: [
      'Led the team, providing a clear roadmap and efficient execution of software projects.',
      'Deployed software solutions on AWS.',
      'Provided rigorous testing for both mobile and web applications, maintaining high-quality standards.',
      'Developed and maintained code for both frontend and backend of mobile and web applications in React Native, Node Js, and React.'
    ],
  },
  {
    name: "WebIQ",
    position: 'CONTRACT SOFTWARE DEVELOPRER,',
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      'Built and delivered enterprise-level projects for a diverse range of clients, tailoring solutions to meet specific business needs.',
      'Consistently met deadlines, exceeding client’s requirements while working within budget',
      'Designed architecture of different projects (frontend + backend).',
   
    ],
  },
  {
    name: "AI TECHNOLOGIES",
    position: 'SOFTWARE DEVELOPER/TRAINING INSTRUCTOR',
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: [
      'Worked as the only instructor/developer that had full-stack and mobile capabilities at the branch.',
      'Was termed the fastest instructor to integrate quickly, having built software within 2 weeks of employment in NextJS.',
      'Trained and mentored students in various programming languages.'
    ],
  },
  {    
    name: "Prepaidmeter.ng",
    position: 'LEAD SOFTWARE ENGINEER,',
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: [
      'Led the development of realtime IOT systems with MQT using NodeJS.',
      'Single handedly built the version 1 backend of the application powering their current platform using NodeJs and built the frontend in JS: https://prepaidmeter.ng.',
      'Served as the lead backend engineer and delivered 2 major projects in record time.',
      'Built and designed visually appealing graphs'
    ],
  },
  {
    name:"NEONET WIRELESS",
    position: 'SOFTWARE DEVELOPER/TRAINING INSTRUCTOR,,',
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: [
      'Worked as a programmiing instructor, teaching Python, JavaScript, Nextjs, Html, Css, NodeJs.',
      'Built web applications for clients.',
      'Led students onto career paths in software development.'
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'PrepaidMeter.ng',
    description:
      ' A web-based remote energy-metre recharging and monitoring application that allows users to manage their energy consumption efficiently.',
    url: 'https://www.prepaidmeter.ng',
    previewImage: PrepaidMeter,
    technologies: [
      'React',
      'Typescript',
      'TailwindCss',
      'Express.js',
      ' MongoDB',
      'MQTT',
    ],
  },
  {
    name: 'Relisted Labels',
    description:
      'An E-commerce clothing and accessories renting/buying platform with buyers and sellers sections',
    url: 'https://relisted-labels.vercel.app',
    previewImage: Relisted,
    technologies: [
      'React',
      'Nx',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Radix UI',
      'TRPC',
      'Express.js',

    ],
  },
  {
    name: 'Naji Realties',
    description:
      'A shortlet apartment, fully automated booking platform',
    url: 'https://najirealties.ng',
    previewImage: Naji,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'MongoDB',
      'Storybook',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Joseph Ogbaji',
    personAvatar: AvatarDummy,
    title: 'Founder - webiq.com.ng',
    link:"https://webiq.com.ng",
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I highly recommend William.',
  },
  {
    personName: 'Emmanuel Onuzurike',
    personAvatar: AvatarDummy,
    link:"https://ng.linkedin.com/in/emmanuel-onuzurike-7606b7100g",
    title: 'Founder - neonetwireless.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX back-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe',
    personAvatar: AvatarDummy,
    title: 'Founder - aitechnologies.ng',
    link:"https://aitechnologiesng.com/",
    testimonial:
      'William is honest, hard working and keeps to his words. He is a very skilled software engineer and a wonderful instructor. Glad he is part of my team.  ',
  },
];
