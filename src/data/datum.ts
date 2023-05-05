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

        Description: `As a mid-level fullstack engineer, I am experienced in using JavaScript for both front-end and back-end development. I have expertise in popular libraries and frameworks such as React, Next,js, Node.js, and Express.`,
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

        Description: `As a mid-level fullstack engineer, I have utilized TypeScript in various professional settings to build scalable and maintainable web applications. For instance at Adaptive Financial Consulting, I worked on a React-based web application where I utilized TypeScript's strong typing to ensure that the data passed between components was consistent and error-free ensuring a more reliable and scalable application`,

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
        Description:
            'This website was built using React, Next.js, TypeScript, Material-UI, and Vite. It is a single page application that uses React Hooks to manage state and React Router to handle routing.',
        Technologies: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'Vite'],
        Widths: {
            Width1: 50,
            Width2: 33,
            Width3: 17,
        },
    },
    StockAlly: {
        Name: 'StockAlly',
        Type: 'Project',
        LogoPosition: 'left',
        Logo: 'stockally.svg',
        Link: 'stockally.com',
        Description:
            'StockAlly is a stock market simulator that allows users to create a portfolio of stocks and track their performance. It was built using React, Next.js, TypeScript, Material-UI, and Vite. It is a single page application that uses React Hooks to manage state and React Router to handle routing.',
        Technologies: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'Vite'],
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
        Link: 'stockally.com',
        Description:
            'StockAlly API is a RESTful API that provides data for the StockAlly stock market simulator. It was built using Node.js, Express, TypeScript, and MongoDB. It is a RESTful API that uses the MVC pattern to manage the data.',
        Technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB'],
        Widths: {
            Width1: 33,
            Width2: 33,
            Width3: 34,
        },
    },
}
