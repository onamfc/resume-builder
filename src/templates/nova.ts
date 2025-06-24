const data = {
    name: "Nova",
    label: "Nova",
    image: "https://placehold.co/600x400.png?text=Nova",
    layout: {
        direction: "column",
        children: ["main"]
    },
    components: [
        "StyleBlock",
        "ImageBlock",
        "TextBlock",
        "ContactBlock",
        "DividerBlock",
        "SectionTitle",
        "JobBlock",
        "BulletBlock",
        "EducationBlock",
        "SkillTagBlock",
        "CertificationBlock"
    ],
    data: {
        main: {
            component: "StyleBlock",
            className: "min-h-screen bg-slate-100 p-6 font-sans text-slate-900",
            direction: "column",
            children: [
                {
                    component: "StyleBlock",
                    className: "max-w-4xl mx-auto bg-white shadow-md rounded-xl overflow-hidden",
                    direction: "column",
                    children: [
                        {
                            component: "StyleBlock",
                            direction: "row",
                            className: "p-6 gap-6 items-center",
                            children: [
                                {
                                    component: "ImageBlock",
                                    imageUrl: "/img/headshot.jpg",
                                    alt: "Brandon Estrella",
                                    style: {
                                        width: 100,
                                        height: 100,
                                        borderRadius: "9999px",
                                        objectFit: "cover",
                                        border: "4px solid #3ecac2"
                                    }
                                },
                                {
                                    component: "StyleBlock",
                                    direction: "column",
                                    className: "flex-1",
                                    children: [
                                        {
                                            component: "TextBlock",
                                            text: "Brandon Estrella",
                                            className: "text-xl font-bold"
                                        },
                                        {
                                            component: "TextBlock",
                                            text: "Senior Frontend Engineer",
                                            className: "text-sm text-slate-500"
                                        },
                                        {
                                            component: "StyleBlock",
                                            direction: "row",
                                            className: "gap-4 mt-2",
                                            children: [
                                                {
                                                    component: "ContactBlock",
                                                    contact: {
                                                        type: "email",
                                                        value: "brandon@example.com",
                                                        icon: { component: "Mail", size: 14 }
                                                    }
                                                },
                                                {
                                                    component: "ContactBlock",
                                                    contact: {
                                                        type: "LinkedIn",
                                                        value: "linkedin.com/in/brandon",
                                                        icon: { component: "Linkedin", size: 14 }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            component: "DividerBlock",
                            className: "border-slate-200"
                        },
                        {
                            component: "StyleBlock",
                            direction: "row",
                            className: "px-6 py-4 flex-wrap md:flex-nowrap",
                            children: [
                                {
                                    component: "StyleBlock",
                                    direction: "column",
                                    className: "md:w-2/3 w-full pr-4",
                                    children: [
                                        {
                                            component: "SectionTitle",
                                            title: "Experience",
                                            className: "text-slate-800 text-sm font-semibold mb-2"
                                        },
                                        {
                                            component: "JobBlock",
                                            job: {
                                                meta: {
                                                    title: "CTO & Full Stack Engineer",
                                                    company: "Marriage365",
                                                    startDate: "2015",
                                                    endDate: "Present",
                                                    location: "Remote"
                                                },
                                                duties: [
                                                    "Led product architecture and engineering.",
                                                    "Deployed scalable React and Laravel infrastructure.",
                                                    "Managed a team of 6 developers."
                                                ]
                                            }
                                        },
                                        {
                                            component: "SectionTitle",
                                            title: "Projects",
                                            className: "text-slate-800 text-sm font-semibold my-4"
                                        },
                                        {
                                            component: "ProjectBlock",
                                            project: {
                                                name: "AI Editorial Automation",
                                                description: "End-to-end system that auto-generates and publishes articles using LLMs.",
                                                link: "https://example.com"
                                            }
                                        },
                                        {
                                            component: "ProjectBlock",
                                            project: {
                                                name: "Seenfire Learning Platform",
                                                description: "Interactive education platform used by National Geographic."
                                            }
                                        },
                                        {
                                            component: "ProjectBlock",
                                            project: {
                                                name: "Align International",
                                                description: "Custom-built child sponsorship and donor management platform."
                                            }
                                        },
                                        {
                                            component: "SectionTitle",
                                            title: "Certifications",
                                            className: "text-slate-800 text-sm font-semibold my-4"
                                        },
                                        {
                                            component: "CertificationBlock",
                                            cert: {
                                                name: "AWS Certified Developer – Associate",
                                                issuer: "Amazon",
                                                date: "2023"
                                            }
                                        },
                                        {
                                            component: "CertificationBlock",
                                            cert: {
                                                name: "Google UX Design Certificate",
                                                issuer: "Google",
                                                date: "2022"
                                            }
                                        },
                                        {
                                            component: "CertificationBlock",
                                            cert: {
                                                name: "ScrumMaster (CSM)",
                                                issuer: "Scrum Alliance"
                                            }
                                        },
                                        {
                                            component: "SectionTitle",
                                            title: "Education",
                                            className: "text-slate-800 text-sm font-semibold my-4"
                                        },
                                        {
                                            component: "EducationBlock",
                                            education: {
                                                institution: "UC Irvine",
                                                study: "Mathematics",
                                                years: "2010–2011"
                                            }
                                        }
                                    ]
                                },
                                {
                                    component: "StyleBlock",
                                    direction: "column",
                                    className: "md:w-1/3 w-full border-l border-slate-200 pl-4 mt-6 md:mt-0",
                                    children: [
                                        {
                                            component: "SectionTitle",
                                            title: "Skills",
                                            className: "text-slate-800 text-sm font-semibold mb-2"
                                        },
                                        {
                                            component: "SkillTagBlock",
                                            skills: ["React", "Laravel", "TailwindCSS", "TypeScript", "Vite"]
                                        },
                                        {
                                            component: "SectionTitle",
                                            title: "Interests",
                                            className: "text-slate-800 text-sm font-semibold mt-4 mb-2"
                                        },
                                        {
                                            component: "BulletBlock",
                                            items: ["Triathlon", "Reading", "Tech tinkering", "Family", "Sports"]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};

export default data;
