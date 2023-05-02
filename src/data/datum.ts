export type TDatum = {
    [key: string]: {
        Name: string
        Type: string
        Description: string
        LogoPosition?: string
        Logo: string
        Link?: string
        Widths: {
            Width1: number
            Width2: number
            Width3: number
        }
    }
}
export type TdatumTypes = (typeof datumTypes)[number]

export const datumTypes: TdatumTypes = ['Skill', 'Project']

export const datum_points: TDatum = {
    JavaScript: {
        Name: 'JavaScript',
        Type: 'Skill',
        LogoPosition: 'left',
        Logo: 'javascript.svg',
        Description: `As a mid-level fullstack engineer, I am experienced in using JavaScript for both front-end and back-end development. I have expertise in popular libraries and frameworks such as React, Node.js, and Express. I am skilled in using JavaScript for DOM manipulation, building interactive user interfaces, handling database connections, authentication, and data validation. I also have knowledge in modern JavaScript features and testing frameworks. Overall, my skills with JavaScript allow me to build robust, scalable web applications.`,
        Link: 'https://www.djangoproject.com/',
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
        Description: `As a mid-level fullstack engineer, I have utilized TypeScript in various professional settings to build scalable and maintainable web applications. For instance, at [company], I worked on a React-based web application where I used TypeScript to improve the code quality and catch errors early in the development process. I utilized TypeScript's strong typing to ensure that the data passed between components was consistent and error-free. I also used TypeScript's interfaces and classes to create reusable and testable components and services, making the codebase more modular and maintainable. By leveraging TypeScript's advanced features, such as decorators and conditional types, I was able to write efficient and scalable code that improved the performance of the application. Overall, my experience with TypeScript has proven to be invaluable in building robust and maintainable web applications.`,
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
        Description: `As a mid-level fullstack engineer, I have extensive experience using Python to build scalable and efficient web applications. At [company], I worked on a Django-based web application where I used Python to build the backend infrastructure. I leveraged Django's built-in ORM to connect to the database and manage the data models, making it easy to maintain and scale the application. I also used Python's built-in modules and libraries to implement features such as user authentication, file upload/download, and third-party integrations. Additionally, I utilized Python's support for testing frameworks to write unit tests and integration tests, ensuring the quality and stability of the application. My expertise with Python has allowed me to build reliable and maintainable web applications that met the needs of clients and users.`,
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
        Description: `As a mid-level fullstack engineer, I enjoy using Next.js in my personal projects for its ease of use and flexibility. I have experience building server-rendered React applications with Next.js, allowing for fast loading times and improved SEO. I have also utilized Next.js's support for static site generation to build static websites that can be easily hosted and scaled. Next.js's built-in features, such as automatic code splitting and serverless functions, have enabled me to build efficient and scalable applications with minimal setup. Additionally, I have used Next.js's support for popular libraries and frameworks such as Redux and Tailwind CSS to build complex applications with ease. Overall, my experience with Next.js has allowed me to build dynamic and scalable applications that showcase my skills as a fullstack engineer.`,
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
        Description: `As a mid-level fullstack engineer, I enjoy using Node.js in my personal projects for its versatility and efficiency. I have experience building server-side applications with Node.js, using frameworks such as Express.js to build RESTful APIs and handle HTTP requests. I have also utilized Node.js's support for asynchronous programming to build real-time applications with WebSockets and event-driven architectures. Node.js's built-in support for package management with NPM has enabled me to easily incorporate third-party packages and libraries into my projects, such as authentication and authorization tools. Additionally, I have used Node.js's support for modern JavaScript syntax to write modular and maintainable code. Overall, my experience with Node.js has allowed me to build fast, efficient, and scalable applications that showcase my skills as a fullstack engineer.`,
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
        Description: `As a mid-level fullstack engineer, I have extensive experience using Express.js to build robust and scalable server-side applications. I utilize Express.js technologies and best practices to create efficient and maintainable applications. I follow RESTful API design principles to ensure that my APIs are standardized, easy to use, and well-documented. I utilize middleware functions to handle tasks such as authentication, logging, and error handling, improving the security and reliability of the applications. I also leverage Express.js's support for modular application structure, making it easier to test, debug, and maintain the codebase. Additionally, I have used popular packages such as Passport.js for authentication and Socket.io for real-time communication, integrating them seamlessly with Express.js. Overall, my expertise with Express.js technologies and best practices has enabled me to build high-performance and scalable applications that meet the needs of clients and users.`,
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
        Description:
            'Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.',
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
        Description:
            'Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.',
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
        Description:
            'GitHub is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management functionality of Git as well as adding its own features.',
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
            'Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.',
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
