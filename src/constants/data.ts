import {
  HiMiniShieldCheck,
  HiUsers,
  HiCalendarDays,
  HiCommandLine,
  HiHandThumbUp,
  HiTrophy,
  HiArrowDown,
  HiArrowUp,
} from "react-icons/hi2";

export const NAV_LINKS = [
  { name: "Overview", href: "#overview" },
  { name: "About Us", href: "#aboutUs" },
  { name: "Services", href: "#services" },
  { name: "Core Values", href: "#coreValues" },
  { name: "Portfolio", href: "#portfolio" },
];

export const CONTACT_BUTTON_TEXT = "Let's Talk";

export const OVERVIEW_DATA = {
  headingLine1: "Engineering The Next Criterion of",
  headingLine2: "Modern Software Excellence",
  description:
    "Nexterion is a premium software development agency specializing in high-performance Next.js and MERN stack solutions. We help global brands scale through innovative digital engineering.",
};

export const ABOUT_DATA = {
  heading: {
    line1: "Redefining the standard of",
    line2: "digital engineering excellence",
  },
  paragraphs: [
    {
      text: "Nexterion CodeLabs is a premier software development agency dedicated to engineering world-class digital experiences. Founded on the principle of ",
      highlight: '"The Next Criterion,"',
      afterHighlight:
        " we bridge the gap between sophisticated minimalist design and robust technical logic.",
    },
    {
      text: "With deep expertise in the ",
      highlight: "MERN stack and Next.js",
      afterHighlight:
        ", we specialize in building high-performance, scalable applications that empower global brands. Our team focuses on delivering future-ready solutions, ensuring every line of code meets the highest global industry standards.",
    },
    {
      text: "Whether it's AI-integrated platforms or seamless localized ecosystems, Nexterion is committed to setting the benchmark for software excellence through precision, innovation, and technical authority.",
    },
  ],
  buttonText: "Get a free Quote",
  image: "/images/about.svg",
};

export const SERVICES_DATA = {
  title: {
    primary: "Our Specialized",
    secondary: " Tech Services",
  },
  description: "Engineering high-performance Next.js and MERN stack solutions",
  items: [
    {
      title: "Scalable Full-Stack Development",
      description:
        "End-to-end web solutions engineered for performance, security, and seamless user journeys across all devices.",
      icon: "/images/service1.png",
    },
    {
      title: "High-Performance MERN Stack Apps",
      description:
        "Leveraging MongoDB, Express, React, and Node.js to build fast, data-driven applications for modern enterprises.",
      icon: "/images/service2.png",
    },
    {
      title: "Premium Next.js 15 Applications",
      description:
        "Specialized in App Router, Server Components, and SEO-optimized web architectures for lightning-fast speeds.",
      icon: "/images/service3.png",
    },
    {
      title: "Dynamic Single Page Applications",
      description:
        "Creating fluid, highly interactive user interfaces with React.js that provide a native-app feel in the browser.",
      icon: "/images/service4.png",
    },
    {
      title: "Robust REST & GraphQL APIs",
      description:
        "Designing secure and scalable backend infrastructures and third-party integrations to power your digital ecosystem.",
      icon: "/images/service5.png",
    },
    {
      title: "Cross-Platform Mobile Solutions",
      description:
        "Building high-end iOS and Android applications with React Native, focusing on native performance and elegant UI.",
      icon: "/images/service6.png",
    },
  ],
};

export const CORE_VALUES_DATA = {
  centerText: {
    line1: "Core",
    line2: "Values",
  },
  items: [
    {
      title1: "Security-first",
      title2: "Approach",
      desc: "We prioritize your digital safety by implementing multi-layered encryption and advanced security protocols to protect sensitive assets. Our proactive strategy ensures robust data integrity and cyber resilience against evolving modern threats.",
      icon: HiMiniShieldCheck,
      pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      title1: "Commitment to",
      title2: "Quality",
      desc: "Excellence is woven into our development lifecycle through rigorous automated testing and adherence to global engineering benchmarks. We deliver high-performance digital solutions that undergo meticulous quality assurance for a seamless user experience.",
      icon: HiHandThumbUp,
      pos: "top-1/5 right-0 translate-x-1/2",
    },
    {
      title1: "Ease of",
      title2: "Maintenance",
      desc: "Our developers engineer clean, modular, and well-documented codebases that facilitate effortless scaling and future-proof evolution. This architectural clarity reduces technical debt and ensures your application remains adaptable as your business grows.",
      icon: HiCommandLine,
      pos: "bottom-1/5 right-0 translate-x-1/2",
    },
    {
      title1: "Timely",
      title2: "Delivery",
      desc: "Leveraging agile methodologies and optimized workflows, we ensure your project moves from concept to launch with maximum efficiency. Our commitment to rapid market entry helps you stay ahead of the competition without compromising on stability.",
      icon: HiCalendarDays,
      pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    },
    {
      title1: "Emphasis on",
      title2: "Collaboration",
      desc: "We believe in true partnership, working closely with your team to transform complex visions into high-functioning digital realities. Through transparent communication and shared goals, we align our technical expertise with your strategic business objectives.",
      icon: HiUsers,
      pos: "bottom-1/5 left-0 -translate-x-1/2",
    },
    {
      title1: "Reliability as ",
      title2: "a Priority",
      desc: "We specialize in building dependable, high-availability systems engineered to perform under heavy loads with 24/7 consistency. Our mission is to foster absolute user trust by delivering stable platforms that guarantee zero-downtime performance.",
      icon: HiTrophy,
      pos: "top-1/5 left-0 -translate-x-1/2",
    },
  ],
};

export const PORTFOLIO_DATA = {
  title: {
    primary: "Global Portfolio &",
    secondary: " Case Studies",
  },
  description:
    "Engineering scalable digital ecosystems for global business growth",
  projects: [
    {
      title: "PrimeX Capital",
      description:
        "Comprehensive platform designed for forex and CFD trading, utilizing industry-standard platforms such as MetaTrader 4 (MT4), MetaTrader 5 (MT5), and cTrader. It supports trading on various instruments.",
      image: "/images/primexcapital-mockup.png",
    },
    {
      title: "Prop Trading",
      description:
        "Prop Trading is a trading platform that offers funded accounts, advanced tools, and expert insights to help traders succeed. It focuses on innovation, technology, and professional support to empower traders globally.",
      image: "/images/prop-trading-mockup.png",
    },
    {
      title: "Greede Forex",
      description:
        "Greede Forex is a trading platform that offers funded accounts, advanced tools, and expert insights to help traders succeed. It focuses on innovation, technology, and professional support to empower traders globally.",
      image: "/images/greede-forex-mockup.png",
    },
    {
      title: "Prime Plus",
      description:
        "Prime Plus is a marketing website showcasing expertise in branding, digital strategy, campaign development, and innovative business growth solutions for modern enterprises and emerging brands.",
      image: "/images/primeplusagency-mockup.png",
    },
    {
      title: "Multibulls",
      description:
        "Multibulls is a futures funding platform that offers AI-driven evaluations, trader funding, risk management solutions, market insights, educational resources, advanced trading tools, and proprietary technology.",
      image: "/images/multibulls-mockup.png",
    },
    {
      title: "FNF Real Estate",
      description:
        "FNF Real Estate is a sleek and professional platform showcasing premium properties in the UAE. It offers tailored investment solutions, intuitive navigation, and high-quality visuals for an enhanced user experience.",
      image: "/images/fnf-mockup.png",
    },
    {
      title: "Prime Plus PRO",
      description:
        "Prime Plus PRO & Digital Agency is a modern website offering digital marketing solutions, including SEO, social media, and web development, with a clean, user-friendly design and engaging visuals.",
      image: "/images/primeplusllc-mockup.png",
    },
    {
      title: "Sunripe Fresh",
      description:
        "Sunripe Fresh website showcases seamless, sustainable supply chain solutions, delivering fresh fruits, vegetables, and frozen produce to homes, restaurants, and businesses with a focus on quality and nutrition.",
      image: "/images/sunripefresh-mockup.png",
    },
    {
      title: "Trust Zone Security",
      description:
        "The Trust Zone Security website highlights expert personal security services, focusing on trust, safety, and reliability. It offers a clear, professional layout to effectively present their offerings and enhance user engagement.",
      image: "/images/trustzonesecurity-mockup.png",
    },
  ],
};

export const CONTACT_DATA = {
  title: {
    primary: "Reach out &",
    secondary: " say hello",
  },
  description: "Let’s turn your ambitious ideas into powerful reality",
  buttonText: "Send Message",
  fields: [
    {
      label: "First Name",
      name: "firstName",
      placeholder: "Enter your first name",
      required: true,
    },
    {
      label: "Last Name",
      name: "lastName",
      placeholder: "Enter your last name",
      required: false,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Enter your professional email address",
      type: "email",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "Enter your contact number",
      type: "tel",
      required: false,
    },
    {
      label: "Message",
      name: "message",
      placeholder: "Enter your project details or inquiries here...",
      required: true,
      isFullWidth: true,
    },
  ],
};

export const SCROLL_WIDGET_DATA = {
  upIcon: HiArrowUp,
  downIcon: HiArrowDown,
};
