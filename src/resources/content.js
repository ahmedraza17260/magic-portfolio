import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ahmed",
  lastName: "Raza",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Applied Chemist",
  avatar: "/images/avatar.jpg",
  email: "ahmedraza17260@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
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
    link: "https://github.com/ahmedraza17260/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ahmedraza17260/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/ahmedraza1726/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/ahmedraza17260/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@ahmedraza17260/",
  },
  {
    name: "Pinterest",
    icon: "pinterest",
    link: "https://pinterest.com/ahmedraz17260/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Ahmed Raza, Assistant Manager Processing at Global Exports,
       {/* <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/> */}
       Highly motivated professional with 2+ years of experience in, 
      <br /> process control, dyeing planning, and production costing within the textile industry.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
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
        Highly motivated professional with 2+ years of experience in process control, dyeing planning, 
        and production costing within the textile industry. Seeking a role to improve operational efficiency, 
        minimize rework, and drive continuous improvement in manufacturing operations.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Global Exports",
        timeframe: "Jan 2025 - Present",
        role: "Ass.Manager Processing",
        achievements: [
          <>
            Managed production costing for dyeing operations.
          </>,
          <>
            Planned and scheduled dyeing operations, ensuring on-time delivery.
          </>,
          <>
            Created comprehensive production performance reports.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Global Exports",
        timeframe: "26th May 2023 - 31 Dec 2024",
        role: "MTO",
        achievements: [
          <>
            Optimized dyeing performance by analyzing real-time data.
          </>,
          <>
            Conducted quality control tests (Formic Acid, Acetic Acid, Caustic Soda purity; absorbency and solid content analysis), 
            ensuring 100% compliance with industry standards.
          </>,
        ],
        images: [],
      },
      {
        company: "Dalda Food",
        timeframe: "Six Weeks Internship at Quality Department.",
        role: "Intenship",
        achievements: [
          <>
            Performed quality tests (FFA, Soap Content, M&I, SMP, FAME, POV, Citric Acid) 
            on edible oil products, ensuring adherence to food safety standards.
          </>,
          <>
            Conducted Line and Packaging Quality Departure Inspections.
          </>,
          <>
            Collaborated with QA team to document findings.
          </>,
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
        name: "University of Karachi",
        description: <>Studied M.Sc Applied Chemistry.</>,
      },
      {
        name: "University of Karachi",
        description: <>Studied B.Sc Applied Chemistry.</>,
      },
      {
        name: "Sir Adamjee Institute",
        description: <>Studied Pre Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React",
        description: <>Personal Portfolio built using React.js.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      // {
      //   title: "Next.js",
      //   description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-04.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
