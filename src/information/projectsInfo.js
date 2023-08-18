import gamesVideo from '../images/modals/videos/games-inventory.mp4';
import hoodiesVideo from '../images/modals/videos/hoodies.mp4';
import on1Video from '../images/modals/videos/on1-solutions.mp4';
import notedownVideo from '../images/modals/videos/notedown.mp4';

const projectsInfo = [
  {
    id: 1,
    title: 'Games Inventory',
    link: 'https://games-inventory.onrender.com/',
    videoPath: gamesVideo,
    skills: [
      {
        name: 'React',
        colour: '#41C4E8',
        tagColour: '#e4f3f8',
      },
      {
        name: 'SASS',
        colour: '#CD6799',
        tagColour: '#F6E4ED',
      },
      {
        name: 'Express',
        colour: '#353535',
        tagColour: '#F5F5F5',
      },
      {
        name: 'MongoDB',
        colour: '#12924F',
        tagColour: '#E5F6EA',
      },
      {
        name: 'Cypress',
        colour: '#4AA383',
        tagColour: '#CEE8DE',
      },
    ],
    summary:
      'An inventory management application for games that lets you quickly add games to a database, and for that data to be displayed on screen with an option to edit and delete.',
    features: [
      'Games are stored in a database',
      'Add a game to database with provided form',
      'Edit a games detail that exists in the database',
      'Delete a game from the database',
    ],
    learned:
      'My first independent full-stack project was an invaluable learning experience, providing me with a deeper understanding of backend development and databases. Throughout the project, I gained insight into how the backend is hosted and how the frontend accesses data from the database. I also developed a strong grasp of HTTP methods and their interaction with both the backend and frontend. Creating both the backend and frontend from scratch was an enjoyable process, and it has inspired me to tackle bigger and more complex projects in the future.',
  },
  {
    id: 2,
    title: 'Hoodies',
    link: 'https://kunalp99.github.io/shopping-cart/',
    videoPath: hoodiesVideo,
    skills: [
      {
        name: 'React',
        colour: '#41C4E8',
        tagColour: '#e4f3f8',
      },
      {
        name: 'SASS',
        colour: '#CD6799',
        tagColour: '#F6E4ED',
      },
      {
        name: 'Cypress',
        colour: '#4AA383',
        tagColour: '#CEE8DE',
      },
      {
        name: 'React-Router',
        colour: '#F94949',
        tagColour: '#F8C9C9',
      },
    ],
    summary:
      'A fake shopping cart that demonstrates my progress in React. I used React-Router with 3 routes for multiple pages and LocalStorage to persist the data.',
    features: [
      'Add items to basket',
      'Remove items from basket',
      'Fine tune quantity of items in the sidebar',
      'Order items',
    ],
    learned:
      'By adopting a mobile-first design approach, I honed my React skills by building a mock shopping cart. Leveraging react-router, I designed and implemented 3 routes to navigate between different sections of the application. To ensure data persistence, I used LocalStorage. And to verify the functionality of the app, I employed Cypress for End to End testing.',
  },
  {
    id: 3,
    title: 'NoteDown',
    link: 'https://notedown-rose.vercel.app/notes',
    videoPath: notedownVideo,
    skills: [
      {
        name: 'React',
        colour: '#41C4E8',
        tagColour: '#e4f3f8',
      },
      {
        name: 'TypeScript',
        colour: '#3178C6',
        tagColour: '#D0E4FB',
      },
      {
        name: 'SASS',
        colour: '#CD6799',
        tagColour: '#F6E4ED',
      },
      {
        name: 'MongoDB',
        colour: '#12924F',
        tagColour: '#E5F6EA',
      },
      {
        name: 'Next.js',
        colour: '#000000',
        tagColour: '#E0E0E0',
      },
      {
        name: 'Jest',
        colour: '#99425B',
        tagColour: '#EFE1E5',
      },
    ],
    summary:
      'NoteDown is a note-taking CRUD application that formats your notes using markdown.',
    features: [
      'Create notes, choosing a title, text, and tag colours',
      'Note is rendered with react-markdown',
      'Edit/Delete a note once created',
      'Preview how a note would look before creating/editing it',
      'Filter notes with a search query',
      'Log into the application with Google',
    ],
    learned:
      'This is my first Next.js personal project which taught me how to develop a full-stack application using this framework utilizing the new features that Next.js 13 has to offer. I also employed Jest and React-Testing Library to conduct unit tests for the different components and pages of this website.',
  },
  {
    id: 4,
    title: 'On1 Solutions',
    link: 'https://on1solutions.com/',
    videoPath: on1Video,
    skills: [
      {
        name: 'JavaScript',
        colour: '#CCB814',
        tagColour: '#FDF8D0',
      },
      {
        name: 'CSS',
        colour: '#254BDD',
        tagColour: '#C9D0EB',
      },
      {
        name: 'HTML',
        colour: '#671DDF',
        tagColour: '#E8DAFF',
      },
      {
        name: 'SVGator',
        colour: '#2EDEDB',
        tagColour: '#E2FAF9',
      },
    ],
    summary:
      'On1 focuses on solutions for HR and IT teams. C.A.N.S. being one of the solutions, is a user-friendly, centralised tool for all business notifications. It works across multiple platforms and automates all processes, from gathering data to issuing relevant notifications to employees and managers, while providing an auditable trail of communications.',
    features: [
      'Custom animations made from scratch and scroll animations using intersection observer',
      'Aesthetically pleasing redesign, following the companies brand colours',
    ],
    learned:
      'For my first freelance project, I took on the role of designer, animator, and developer. Using GoDaddy as the hosting platform, I designed and developed a complete website. To add some visual flair, I animated several SVGs using SVGator and integrated them into the site. Additionally, I implemented scroll animations on the home page using intersection observer. Throughout the project, I gained valuable experience using Figma to design the website and received feedback from the company director, which helped me improve the consistency and quality of the design. This project provided me with a unique opportunity to work independently and enhance my skills in multiple areas.',
  },
];

export default projectsInfo;
