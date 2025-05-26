const person = {
  firstName: "Gabriel",
  lastName: "Ribeiro",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/img/avatar.png",
  location: "Brazil",
  languages: ["Portuguese", "Russian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "",
    icon: "github",
    link: "https://github.com/gabriersdev",
  },
  {
    name: "",
    icon: "linkedin",
    link: "https://www.linkedin.com/gabrielmpribeiro",
  },
  {
    name: "",
    icon: "email",
    link: "mailto:devgabrielribeiro@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <p>
      Web Developer specialized in building interactive and scalable web applications using React, TypeScript, and modern tools. Delivered real-world solutions like a public transport app, a data validation system for banking agents, and automation bots.
    </p>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "mailto:devgabrielribeiro@gmail.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>I’m a Web Developer with a technical background in Internet Informatics and currently pursuing a degree in Systems Analysis and Development. I specialize in building responsive interfaces and interactive applications using React, TypeScript, JavaScript, HTML, and CSS, alongside tools like Next.js and Vite.</p>
        
        <p>I’ve developed real-world solutions such as a mobility platform for public transport users (Mobilidade), a data validation tool for banking agents (CCA), a voting-based clip competition system (BattleTube), and Discord bots for automation and content notifications. These projects demonstrate my ability to design and deliver applications with practical impact, integrating APIs, handling
          dynamic data, and focusing on user experience.</p>
        
        <p style={{marginBottom: 0, paddingBottom: 0}}>I value clean code, reusable components, and continuous learning, always aiming to deliver scalable and maintainable solutions.</p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance Developer",
        timeframe: "2024 - Present",
        role: "Technical support, maintenance and development of web apps and websites",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/img/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "CHR Despachante Imobiliário",
        timeframe: "2023 - 2024",
        role: "Computer Technician",
        achievements: [
          <>I provided maintenance on the company's equipment, in addition to being responsible for updating, configuring and installing the company's computers.</>,
          <>I was responsible for implementing a file sharing system, which transformed the company's housing finance flow and increased sales completion by 40%.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: (<div><span>Systems Development Analyst</span><br/>{/*<Text onBackground={"brand-weak"} variant={"body-default-m"}>Uninter</Text>*/}</div>),
        school: <>Uninter</>,
        description: <>Studied software engineering.</>,
      },
      {
        name: (<div><span>Computer Technician for the Internet</span><br/>{/*<Text onBackground={"brand-weak"} variant={"body-default-m"}>ETEC Professor Fontes</Text>*/}</div>),
        school: <>ETEC Professor Fontes</>,
        description: <>Studied equipment maintenance and web development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/img/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Node.js",
        description: "I built web applications with Node.js + Next.js or React + Tailwind.",
        images: []
      },
      {
        title: "Python",
        description: "I developed bots with Python, for ads on Discord with YouTube and Twitch API, moderation on Reddit and webscrapping.",
        images: []
      },
      {
        title: "PHP",
        description: "I created websites with PHP and provided maintenance on websites made with Wordpress and Laravel.",
        images: []
      },
      {
        title: "SQL",
        description: "I built applications (web or not) and APIs with MySQL, using HeidiSQL, PHPMyAdmin and Workbench.",
        images: []
      },
      {
        title: "Scrum",
        description: "I am certified by Certiproof as a qualified and knowledgeable professional in Scrum and its methods.",
        images: []
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/img/gallery/x.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export {person, social, newsletter, home, about, blog, work, gallery};
