export type TDatum = {
    [key: string]: {
        Name: string
        Type: string
        Description: string
        LogoPosition?: string
        Logo: string
        Link?: string
        Technologies?: string[]
        Widths: {
            Width1: number
            Width2: number
            Width3: number
        }
    }
}
export type TdatumTypes = (typeof datumTypes)[number]

export const datumTypes = ['Skill', 'Project']

export const datum_points: TDatum = {
    JavaScript: {
        Name: 'JavaScript',
        Type: 'Skill',
        LogoPosition: 'left',
        Logo: 'javascript.svg',
        Description: `I am experienced in using JavaScript for both front-end and back-end development. I have expertise in popular libraries and frameworks such as React, Next,js, Node.js, and Express.`,
        Link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        Widths: {
            Width1: 55,
            Width2: 40,
            Width3: 5,
        },
    },
    TypeScript: {
        Name: 'TypeScript',
        Type: 'Skill',
        LogoPosition: 'right',
        Logo: 'typescript.svg',
        Description: `I have utilized TypeScript in various professional settings to build scalable and maintainable web applications. For instance at Adaptive Financial Consulting, I worked on a React-based web application where I utilized TypeScript's strong typing to ensure that the data passed between components was consistent and error-free ensuring a more reliable and scalable application`,
        Link: 'https://www.typescriptlang.org/',
        Widths: {
            Width1: 16,
            Width2: 33,
            Width3: 51,
        },
    },
    Python: {
        Name: 'Python',
        Type: 'Skill',
        LogoPosition: 'right',
        Logo: 'python.svg',
        Link: 'https://www.python.org/',

        Description: `I have extensive experience using Python to build scalable and efficient web applications. I leveraged Django's built-in ORM to connect to the database and manage the data models, making it easy to maintain and scale the application. I also used Python's built-in modules and libraries to implement features such as user authentication, file upload/download, and third-party integrations.`,

        Widths: {
            Width1: 50,
            Width2: 33,
            Width3: 18,
        },
    },
    React: {
        Name: 'React',
        Type: 'Skill',
        LogoPosition: 'right',
        Logo: 'react.svg',
        Link: 'https://react.dev/',
        Description: `At Adaptive Financial Consulting, I used React as the primary frontend framework for a complex, responsive web application. My responsibilities included designing and implementing the frontend architecture, writing reusable components, and optimizing performance. I leveraged React's component-based architecture and implemented performance optimizations such as lazy loading and code splitting to create a fast and responsive application. Overall, my experience with React would be an asset to your team.`,
        Widths: {
            Width1: 10,
            Width2: 40,
            Width3: 50,
        },
    },
    'Next.js': {
        Name: 'Next.js',
        Type: 'Skill',
        LogoPosition: 'right',
        Logo: 'nextjs.svg',

        Description: `I prefer using Next.js in my personal projects for its ease of use and flexibility. I have experience building server-rendered React applications with Next.js, allowing for fast loading times and improved SEO. I have also utilized Next.js's support for static site generation to build static websites that can be easily hosted and scaled.Additionally, I have used Next.js's support for popular libraries and frameworks such as Redux and Tailwind CSS to build complex applications with ease.My experience with Next.js has allowed me to build dynamic and scalable applications that showcase my skills as a fullstack engineer.`,

        Link: 'https://nextjs.org/',
        Widths: {
            Width1: 54,
            Width2: 33,
            Width3: 14,
        },
    },
    'Node.js': {
        Name: 'Node.js',
        Type: 'Skill',
        LogoPosition: 'right',
        Logo: 'nodejs.svg',
        Link: 'https://nodejs.org/en',
        Description: `I enjoy using Node.js in my personal projects for its versatility and efficiency. I have experience building server-side applications with Node.js, using frameworks such as Express.js to build RESTful APIs and handle HTTP requests. I have also utilized Node.js's support for asynchronous programming to build real-time applications with WebSockets and event-driven architectures. I have used Node.js's support for modern Typescript syntax to write modular and maintainable code. My experience with Node.js has allowed me to build fast, efficient, and scalable applications.`,
        Widths: {
            Width1: 19,
            Width2: 33,
            Width3: 48,
        },
    },
    Express: {
        Name: 'Express',
        Type: 'Skill',
        LogoPosition: 'right',
        Logo: 'express.svg',
        Link: 'https://expressjs.com/',
        Description: `As a mid-level full-stack engineer, I have extensive experience using Express.js to build robust and scalable server-side applications. I utilize Express.js technologies and best practices to create efficient and maintainable applications. I follow RESTful API design principles to ensure that my APIs are standardized, easy to use, and well-documented. I utilize middleware functions to handle tasks such as authentication, logging, and error handling, improving the security and reliability of the applications. I also leverage Express.js's support for modular application structure and Typescript, making it easier to test, debug, and maintain the codebase. During my time working with Express.js I have been able to build Efficient and complex applications with relative ease.`,
        Widths: {
            Width1: 26,
            Width2: 33,
            Width3: 41,
        },
    },
    Django: {
        Name: 'Django',
        Type: 'Skill',
        LogoPosition: 'right',
        Logo: 'django.svg',
        Link: 'https://www.djangoproject.com/',

        Description: `I have experience using Django to create responsive websites and APIs that integrate seamlessly with React applications. One particular project I am proud of is a personal website and API that I built using Django. I utilized Django's Model-View-Controller (MVC) architecture to design and develop the backend of the website, and the API to facilitate data communication between the frontend and the server. I also utilized Django's built-in authentication system to secure user data and implemented a clean and intuitive user interface for the website. The website and API have been optimized for fast load times and maximum efficiency`,

        Widths: {
            Width1: 40,
            Width2: 33,
            Width3: 27,
        },
    },
    Git: {
        Name: 'Git',
        Type: 'Skill',
        LogoPosition: 'right',
        Logo: 'git.svg',

        Description: `As a professional software engineer, I rely heavily on Git for version control and collaboration. I use Git to track changes to code and manage multiple versions of a project. I am proficient in using Git commands such as committing changes, branching, merging, and resolving conflicts. I understand the importance of maintaining a clean and organized Git repository, using descriptive commit messages, and following best practices for branching and merging. With Git, I am able to work efficiently and effectively, whether I am working on my own or collaborating with a team. I am constantly staying up-to-date with the latest Git practices and tools, ensuring that my work is always versioned, secure, and well-managed.`,

        Widths: {
            Width1: 13,
            Width2: 33,
            Width3: 54,
        },
    },
    GitHub: {
        Name: 'GitHub',
        Type: 'Skill',
        LogoPosition: 'right',
        Logo: 'github.svg',
        Link: 'Github.com',

        Description: `I have extensive experience using GitHub for version control, code collaboration, and project management. I can collaborate with team members by creating and merging pull requests, reviewing code changes, and managing issues. I am also skilled in using GitHub's features, including project boards, code reviews, and continuous integration workflows. I understand the importance of maintaining a clean and organized GitHub repository, and I am familiar with best practices for managing branches, pull requests, and issues. With GitHub, I can work efficiently and effectively with team members and external collaborators, ensuring that the codebase is always up-to-date, secure, and well-managed. I am constantly staying up-to-date with the latest GitHub practices and tools, ensuring that my work is always of the highest quality.`,

        Widths: {
            Width1: 48,
            Width2: 33,
            Width3: 20,
        },
    },
    Docker: {
        Name: 'Docker',
        Type: 'Skill',
        LogoPosition: 'right',
        Logo: 'docker.svg',
        Link: 'https://www.docker.com/',
        Description:
            'I have personal experience using Docker to develop, deploy, and manage software applications. I use Docker to containerize applications and create portable and scalable environments that are isolated from the underlying host system I have used Docker containers to host Mongodb instances, express.js backends and serve Next.js frontend applications. I am skilled in using Docker commands and tools, including creating Docker images, building and deploying containers',
        Widths: {
            Width1: 20,
            Width2: 33,
            Width3: 47,
        },
    },
    'Joseph Goolic Website': {
        Name: 'Joseph Goolic Website',
        Type: 'Project',
        LogoPosition: 'left',
        Logo: 'josephgoolic.svg',
        Link: 'https://josephgoolic.com',
        Description: `I developed Josephgoolic.com as a single-page application using the cutting-edge React 18 framework, combined with TypeScript for type safety. The site employs Vite for an optimized build process and ultra-fast development experience. The UI leverages Material-UI, and I've incorporated a range of other specialized libraries for effects like scrolling parallax and typewriter animations.`,
        Technologies: [
            'React',
            'Next.js',
            'TypeScript',
            'Material-UI',
            'Vite',
            'Emotion',
            'Intersection Observer & Parallax Libraries',
            'Vitest & Jest',
            'EmailJS',
        ],
        Widths: {
            Width1: 50,
            Width2: 33,
            Width3: 17,
        },
    },
    'Reactive Trader': {
        Name: 'Reactive Trader',
        Type: 'Project',
        LogoPosition: 'left',
        Logo: 'null',
        Link: 'https://reactivetrader.com/',
        Description:
            'During my tenure at Adaptive Financial Consulting I worked on internal projects similar to reactive trader The Projects were built using React, TypeScript, and Vite typically with Jest for automated unit testing, RxJS played a huge role in perfomrant live data streaming.',
        Technologies: ['React', 'Typescript', 'Vite', 'RxJS', 'Jest'],
        Widths: {
            Width1: 33,
            Width2: 33,
            Width3: 33,
        },
    },
    StockAlly: {
        Name: 'StockAlly',
        Type: 'Project',
        LogoPosition: 'left',
        Logo: 'stockally.svg',
        Link: 'https://stockally.us',
        Description: `Currently, I am the creator and lead developer of StockAlly, a stock market simulator designed to help users track and manage their stock portfolios. The platform is a single-page application built with React 18 and TypeScript, utilizing advanced features like React Hooks for state management and React Router for seamless routing. On the tech stack side, I've implemented a robust build process using Vite, coupled with Material-UI for a polished user interface. My frontend repository is rigorously tested using Jest, encompassing unit, integration, and end-to-end tests. Additional libraries such as Axios for API interactions, React-Query for data fetching, and Nivo for data visualizations further demonstrate my commitment to creating efficient and user-friendly web applications.`,
        Technologies: [
            'React',
            'TypeScript',
            'Vite',
            'Material-UI',
            'Jest',
            'Axios',
            'React-Query',
            'Nivo',
            'Redux',
            'React Router',
            'Framer Motion',
            'Moment.js',
            'Puppeteer',
        ],
        Widths: {
            Width1: 10,
            Width2: 33,
            Width3: 57,
        },
    },
    'StockAlly API': {
        Name: 'StockAlly API',
        Type: 'Project',
        LogoPosition: 'right',
        Logo: 'stockally.svg',
        Link: 'https://stockally.us',
        Description: `The StockAlly API is the backbone that powers the StockAlly stock market simulator. It serves as a RESTful API built with Node.js and Express, using TypeScript for static type checking. It follows the MVC architectural pattern and leverages MongoDB for database management. Additionally, it includes advanced features like CORS support, CSV parsing, email notifications via SendGrid, and enhanced security measures such as bcrypt for password hashing. The API efficiently handles asynchronous tasks, making use of libraries like Axios and node-fetch for data aggregation and networking.`,
        Technologies: [
            'Node.js',
            'Express',
            'TypeScript',
            'MongoDB',
            'Axios',
            'bcrypt',
            'CORS',
            'CSV-parser',
            'dotenv',
            'SendGrid',
            'Multer',
            'Node-Fetch',
        ],

        Widths: {
            Width1: 33,
            Width2: 33,
            Width3: 34,
        },
    },
}
