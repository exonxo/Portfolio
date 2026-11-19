// Excerpts from recommendations on Proloy's LinkedIn profile
// (linkedin.com/in/kproloy, "Received"), all set to visible on the profile.
// Wording is kept as written; "…" marks text left out for length.

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  relation: string;
  date: string;
  /** Profile photo, cropped from their LinkedIn profile. */
  photo: string;
  linkedin: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "His exceptional skills as a UI/UX designer were an important part of taking our product from idea to a production-quality one. … His collaborative approach and technical understanding helped bridge the gap between design and development.",
    name: "Sachin Desai",
    photo: "/testimonials/sachin-desai.png",
    linkedin: "https://www.linkedin.com/in/sachindesaihere/",
    role: "Founder, SVP of Engineering/Products",
    relation: "Client · product owner of a digital health product",
    date: "July 2024",
  },
  {
    quote:
      "Proloy shows exemplary design work, showcasing modern designs with swift delivery times. … I would not hesitate to work with him again!",
    name: "Isaiah Krause",
    photo: "/testimonials/isaiah-krause.png",
    linkedin: "https://www.linkedin.com/in/isaiah-krause/",
    role: "Software Engineering & SaaS Solutions",
    relation: "Client",
    date: "February 2025",
  },
  {
    quote:
      "Proloy's ability to transform complex ideas into intuitive, visually compelling designs is remarkable. … His designs seamlessly integrated with my Flutter development work.",
    name: "Sabir Mondal",
    photo: "/testimonials/sabir-mondal.png",
    linkedin: "https://www.linkedin.com/in/sabir-mondal-ju03/",
    role: "Software Engineer",
    relation: "Worked together for over two years",
    date: "September 2024",
  },
  {
    quote:
      "He approached each challenge with a thoughtful and user-centered design perspective, ensuring our international audience's needs were met seamlessly.",
    name: "Akshay Devrukhkar",
    photo: "/testimonials/akshay-devrukhkar.png",
    linkedin: "https://www.linkedin.com/in/akshay-devrukhkar/",
    role: "Senior Web Developer",
    relation: "Same team, overseas project",
    date: "October 2024",
  },
  {
    quote:
      "I was particularly impressed by his ability to design visually appealing interfaces and incorporate user feedback effectively, which significantly contributed to the success of our project.",
    name: "Amarjit Mallick",
    photo: "/testimonials/amarjit-mallick.png",
    linkedin: "https://www.linkedin.com/in/amarjit-mallick/",
    role: "Mobile App Engineer",
    relation: "Same team at Cloudcraftz",
    date: "January 2025",
  },
  {
    quote:
      "Proloy has a natural acumen for UI/UX design. … He was very proactive in communicating with clients.",
    name: "Kaushik Kanti Bhattacharya",
    photo: "/testimonials/kaushik-bhattacharya.png",
    linkedin: "https://www.linkedin.com/in/kaushikkantibhattacharya/",
    role: "Senior Consultant, Cloudcraftz Solutions",
    relation: "Senior colleague",
    date: "July 2024",
  },
  {
    quote:
      "His attention to detail and ability to translate complex requirements into simple, elegant interfaces has been a huge asset to our team. … Proloy is a great collaborator—open to feedback, always willing to iterate.",
    name: "Tuhin Das",
    photo: "/testimonials/tuhin-das.png",
    linkedin: "https://www.linkedin.com/in/tuhiindass/",
    role: "Software Engineer",
    relation: "Same team",
    date: "April 2025",
  },
];
