import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "Restaurant Hub",
        techStack: "React.js, Redux.js, Tailwind CSS",
        github: "https://github.com/rishabhr1/Restaurant-Hub",
        description: ["Built a restaurant discovery app using React, React Router, and React Hooks for routing and data fetching.", "Implemented Redux for state management and Tailwind CSS for responsive design in the app.", "Leveraged the Swiggy API and conditional rendering to create a dynamic restaurant menu visualization app."]
    },
    {
        id: 2,
        image: Work2,
        title: "Multi-vendor Restaurant Marketplace",
        techStack: "Django, PostgreSQL, HTML, CSS",
        github: "https://github.com/rishabhr1/foodOnline",
        description:["Developed a Django-based multi-vendor restaurant marketplace with a PostgreSQL database.", "Implemented user registration, vendor registration, and authentication functionalities.", "Developed menu builder, marketplace, cart, search, and tax functionalities.", "Implemented many-to-many relationships, a vendor dashboard, and email integration."]
    },
    {
        id: 3,
        image: Work3,
        title: "Expense Tracker",
        techStack: "React.js",
        github: "https://github.com/rishabhr1/Expense-Tracker",
        description:["This React.js-based project allows users to easily input, manage, and track their expenses.", "The project also provides interactive charts and graphs for each year to help users visualize their spending habits."]
    },
    {
        id: 4,
        image: Work4,
        title: "My Blog",
        techStack: "Django, SQLite, HTML, CSS",
        github: "https://github.com/rishabhr1/my_site",
        description:["This Django-based blog allows admin users to write and manage posts and comments.", "This project allows regular users to read posts, mark them to read later, and leave comments.", "Users can access a list of the latest blogs and their read-later-marked blogs."]
    }
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'design',
    },
]