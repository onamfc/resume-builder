const resumeData = {
    templateName: "Metro",
    layout: {
        direction: "row",
        children: ["main"]
    },

    data: {
        main: {
            component: "StyleBlock",
            className: "flex flex-col md:flex-row bg-white min-h-screen text-slate-900 font-sans",
            children: [
                {
                    component: "StyleBlock",
                    name: "sidebar",
                    className: "w-full md:w-1/3 bg-gray-100 p-6 md:min-h-screen",
                    direction: "column",
                    children: [
                        {
                            component: "ImageBlock",
                            imageUrl: "/headshot.jpg",
                            alt: "Brandon Estrella",
                            style: {
                                width: 120,
                                height: 120,
                                borderRadius: "50%",
                                objectFit: "cover",
                                marginBottom: "1rem"
                            }
                        },
                        {
                            component: "TextBlock",
                            text: "Brandon Estrella",
                            className: "text-xl font-bold mb-4"
                        },
                        {
                            component: "SidebarItemBlock",
                            icon: "Mail",
                            label: "brandonestrelladev@gmail.com"
                        },
                        {
                            component: "SidebarItemBlock",
                            icon: "Linkedin",
                            label: "LinkedIn"
                        },
                        {
                            component: "SidebarItemBlock",
                            icon: "GitHub",
                            label: "GitHub"
                        },
                        {
                            component: "DividerBlock"
                        },
                        {
                            component: "SectionTitle",
                            title: "Skills",
                            className: "text-sm text-slate-700 uppercase tracking-wide mb-2"
                        },
                        {
                            component: "SkillTagBlock",
                            skills: ["React", "Laravel", "TypeScript", "Docker", "AWS"],
                            className: "mt-2"
                        }
                    ]
                },
                {
                    component: "StyleBlock",
                    name: "content",
                    className: "w-full md:w-2/3 p-6",
                    direction: "column",
                    children: [
                        {
                            component: "TextBlock",
                            text: "Senior Full Stack Engineer with over 15 years of experience delivering performant and scalable web & mobile applications.",
                            className: "text-base text-gray-700 mb-6"
                        },
                        {
                            component: "SectionTitle",
                            title: "Experience",
                            className: "text-sm font-semibold text-cyan-500 uppercase tracking-wide mb-2"
                        },
                        {
                            component: "JobBlock",
                            className: "mt-4 mb-8",
                            job: {
                                meta: {
                                    title: "CTO & Full Stack Engineer",
                                    company: "Marriage365",
                                    startDate: "2015",
                                    endDate: "Present",
                                    location: "Remote",
                                    classNames: {
                                        headerClassName: "flex flex-wrap justify-between gap-2",
                                        titleClassName: "text-lg font-semibold italic",
                                        companyClassName: "text-sm text-gray-600",
                                        dateClassName: "text-sm text-gray-500",
                                        listClassName: "list-disc pl-6 mt-2 space-y-1 text-sm text-gray-700"
                                    }
                                },
                                duties: [
                                    "Rebuilt core platform using Laravel and React.",
                                    "Led architecture for scalable backend services.",
                                    "Maintained mobile app with React Native."
                                ]
                            }
                        },
                        {
                            component: "SectionTitle",
                            title: "Education",
                            className: "text-sm font-semibold text-cyan-500 uppercase tracking-wide mt-6 mb-2"
                        },
                        {
                            component: "EducationBlock",
                            education: {
                                institution: "UC Irvine",
                                study: "Mathematics",
                                years: "2010–2011"
                            }
                        },
                        {
                            component: "EducationBlock",
                            education: {
                                institution: "Saddleback College",
                                study: "Math & Computer Science",
                                years: "1999–2002"
                            }
                        },
                        {
                            component: "SectionTitle",
                            title: "Values",
                            className: "text-sm font-semibold text-cyan-500 uppercase tracking-wide mt-6 mb-2"
                        },
                        {
                            component: "BulletBlock",
                            items: ["Integrity", "Initiative", "Clarity", "Teamwork", "Discipline", "Curiosity"]
                        }
                    ]
                }
            ]
        }
    }
};

export default resumeData;
