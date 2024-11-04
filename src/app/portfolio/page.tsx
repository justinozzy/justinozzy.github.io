import CardComponent from "@/components/CardComponent";

const projectData = [
    {
        name: "General Dynamics: HATS",
        description: "The Hardware Automated Test System is designed to provide automatic and manual testing functionalities for engineers working on and with electronic devices.",
        projectLink: "https://gitlab.com/asu-gd/hardware-test-automation",
        image: "/justinozzy.github.io/HATS.png"
    },
    {
        name: "IRS-Scrape",
        description: "Gathers information from IRS E-File providers based on zip code and state then displays that information and allows for sorting on different parameters.",
        projectLink: "https://github.com/justinozzy/IRS-Scrape",
        image: "/justinozzy.github.io/IRS.png"
    },
    {
        name: "ASU Bike Shop",
        description: "Online webstore allowing users to purchase bikes and accessories using PostgreSQL, React, and TailwindCSS. Built in collaboration with my wonderful ASU partners (see contributors on GitHub).",
        projectLink: "https://github.com/jjin43/CSE-412-Project",
        image: "/justinozzy.github.io/bikeshop.png"
    },
    {
        name: "TFTTracker",
        description: "Tracker bot for discord which gathers up to three Riot accounts and displays in order of their ranking.",
        projectLink: "https://github.com/justinozzy/TFTTracker",
        image: "/justinozzy.github.io/tft.png"
    },
    {
        name: "Sun Devil Pizza",
        description: "Desktop application used for pizza ordering along with management tools for ensuring order accuracy and efficiency for employees. (First group project I worked on!)",
        projectLink: "https://github.com/justinozzy/SunDevilPizza-360",
        image: "/justinozzy.github.io/sundevilpizza.png"
    },
];

export default function Page() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                {projectData.map((project, index) => (
                    <CardComponent
                        key={index}
                        name={project.name}
                        description={project.description}
                        projectLink={project.projectLink}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    )
}