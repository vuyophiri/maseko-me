import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Vuyo",
  lastName: "Phiri",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Johannesburg", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Zulu", "Afrikaans", "Sesotho"], // optional: Leave the array empty if you don't want to display languages
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
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vuyophiri",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vuyophiri/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/uBabMaseko",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:vuyophiri@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Vuyo Phiri, a passionate software engineer with expertise in designing, 
        developing, and optimizing high-performance applications. With a strong foundation 
        in full-stack development, cloud computing, and DevOps, I specialize in creating seamless 
        digital experiences that drive innovation. My approach combines clean architecture, 
        scalability, and modern technologies to build robust applications that meet business needs.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Maseko Interactive",
        timeframe: "2024 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Developed and maintained web applications using React, Node.js, and Python.
          </>,
          <>
            Built and integrated RESTful and GraphQL APIs for seamless data exchange.
          </>,
          <>
          Designed and optimized database queries (PostgreSQL, MongoDB) for efficiency.
        </>,
        <>
          Converted UI/UX designs into responsive, interactive web pages using React and Tailwind CSS.
        </>,
        <>
        Fixed bugs and performance issues, improving software stability.
      </>,
      <>
        Assisted in setting up CI/CD pipelines for automated testing and deployment.
      </>,
      <>
      Helped with Dockerizing applications and deploying them to cloud services (AWS, Firebase).
    </>,
    <>
      Wrote and executed unit tests and integration tests using Jest and Cypress.
    </>,
        ],
        images: [
          
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "North West University, ZA",
        description: <>B.S.c in Information Technology.</>,
      },
      {
        name: "IU International University of Applied Sciences, DE",
        description: <>B.S.c in Computer Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>JavaScript (Node.js, TypeScript), C#, C++, Python.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Frontend Development",
        description: <>React.js, Next.js, Tailwind CSS, HTML, CSS, Bootstrap.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Backend Development",
        description: <>Node.js (Express, NestJS), FastAPI, Django.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Databases",
        description: <>PostgreSQL, MongoDB, Firebase, MySQL.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "APIs & Integrations",
        description: <>RESTful APIs, GraphQL, WebSockets.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Testing & QA",
        description: <>Jest, Cypress, Postman, Selenium</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Version Control & Collaboration",
        description: <>Git, GitHub, GitLab, Agile.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Other Tools & Technologies",
        description: <>Linux.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
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
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
