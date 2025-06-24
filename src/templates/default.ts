const data = {
    name: 'default',
    label: 'Default',
    image: "https://placehold.co/600x400.png?text=Default",
    layout: {
        direction: 'column',
        children: [
            'main'
        ],
    },
    components: [
        "StyleBlock",
        "ImageBlock",
        "TextBlock",
        "ContactBlock",
        "SectionTitle",
        "JobBlock",
    ],
    data: {
        main: {
            component: 'StyleBlock',
            style: {
                backgroundColor: '#f5f5f5',
                minHeight: '100vh',
                padding: '2.5rem 1rem',
                fontFamily: 'Arial, sans-serif',
                color: '#1e2939'
            },
            children: [
                {
                    component: 'StyleBlock',
                    style: {
                        maxWidth: '64rem',
                        margin: '0 auto',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '0.75rem',
                        overflow: 'hidden',
                        marginInline: 'auto',
                        padding: '2rem',
                    },
                    children: [
                        {
                            component: 'StyleBlock',
                            direction: 'row',
                            children: [
                                {
                                    component: 'ImageBlock',
                                    imageUrl: '/img/headshot.jpg',
                                    name: 'headshot',
                                    alt: 'Brandon Estrella Headshot',
                                    style: {
                                        width: 144,
                                        height: 144,
                                        borderRadius: '9999px',
                                        objectFit: 'cover',
                                        border: '4px solid #3ecac2',
                                        marginBottom: '1rem'
                                    }
                                },
                                {
                                    component: 'StyleBlock',
                                    direction: 'column',
                                    style: {
                                        flex: 1,
                                        paddingLeft: '1rem',
                                        paddingRight: '1rem',
                                        alignContent: 'center',
                                    },
                                    children: [
                                        {
                                            component: 'StyleBlock',
                                            direction: 'column',
                                            children: [
                                                {
                                                    component: 'TextBlock',
                                                    text: 'Brandon Estrella — Senior Full Stack Engineer',
                                                    style: {
                                                        fontSize: 24,
                                                        fontWeight: 'bold',
                                                        textAlign: 'left',
                                                        color: '#243554',
                                                    }
                                                },
                                                {
                                                    component: 'StyleBlock',
                                                    direction: 'row',
                                                    children: [
                                                        {
                                                            component: 'StyleBlock',
                                                            direction: 'row',
                                                            style: {paddingTop: 8, paddingBottom: 8},
                                                            children: [
                                                                {
                                                                    component: 'ContactBlock',
                                                                    contact: {
                                                                        type: 'email',
                                                                        value: 'brandonestrelladev@gmail.com',
                                                                        icon: {component: 'Mail', size: 16},
                                                                        link: {
                                                                            href: 'mailto:',
                                                                            target: '_blank',
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    component: 'ContactBlock',
                                                                    contact: {
                                                                        type: 'github',
                                                                        value: 'Github',
                                                                        icon: {component: 'GitHub', size: 16}
                                                                    }
                                                                },
                                                                {
                                                                    component: 'ContactBlock',
                                                                    contact: {
                                                                        type: 'linkedin',
                                                                        value: 'LinkedIn',
                                                                        icon: {component: 'Linkedin', size: 16}
                                                                    }
                                                                },
                                                                {
                                                                    component: 'ContactBlock',
                                                                    contact: {
                                                                        type: 'stackoverflow',
                                                                        value: 'Stack Overflow',
                                                                        icon: {component: 'Globe', size: 16}
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            component: 'TextBlock',
                            name: 'summary',
                            text:
                                'Full-stack Engineer with 15+ years of experience crafting performant, scalable, and intuitive UIs. Well-versed with both frontend and backend technologies and a strong track record of launching high-traffic, event-driven applications. Passionate about delivering high-quality user experiences through Agile processes, testable architecture, and clean code. Familiar with CI/CD, Docker, and remote collaboration best practices.',
                            style: {
                                backgroundColor: '#f0f0f0',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                fontSize: '1em',
                            }
                        },
                        {
                            component: 'StyleBlock',
                            name: 'experience',
                            style: {marginTop: '1rem', marginBottom: '1rem'},
                            direction: 'column',
                            children: [
                                {
                                    component: 'SectionTitle',
                                    title: 'EXPERIENCE',
                                    style: {
                                        color: '#3ecac2',
                                        letterSpacing: '0.1em',
                                        fontSize: '0.875rem',
                                        fontWeight: 'bold',
                                        marginBottom: '1rem'
                                    }
                                },
                                {
                                    component: 'JobBlock',
                                    isFirst: true,
                                    job: {
                                        meta: {
                                            title: 'Full Stack Engineer, CTO',
                                            company: 'Marriage365',
                                            location: 'Remote',
                                            startDate: '2015',
                                            endDate: 'Present',
                                        },
                                        duties: [
                                            'Spearheaded the complete rebuild of the Marriage365 video-on-demand subscription platform, launching high-availability web and mobile apps used by tens of thousands of users.',
                                            'Led a cross-functional development team using Agile methodologies, including sprint planning, daily stand-ups, and stakeholder demos.',
                                            'Designed and implemented a queue-based event-driven architecture using Laravel, Python, and serverless technologies along with a robust front-end architecture using React, TypeScript, and modular design patterns.',
                                            'Integrated third-party APIs for authentication, payment processing, analytics, and AI integration to streamline business operations.',
                                            'Provided hands-on mentorship to developers and wrote internal documentation to uphold best practices',
                                            'Maintained React Native mobile application and submitted to both Google Play and the App Store.',
                                            'Designed and developed a customer service dashboard that can be used to upload and manage content, as well as  update the web and mobile applications. ',
                                            'Leveraged websockets to deliver real-time data updates for internal dashboards.',
                                            'Refactored monolithic codebase into modular microservices, simplifying code management and accelerating development workflows.'
                                        ],
                                    },
                                    children: [
                                        {
                                            component: 'StyleBlock',
                                            style: {marginTop: '1rem'},
                                            direction: 'column',
                                            children: [
                                                {
                                                    component: 'SectionTitle',
                                                    title: 'Stack Overview',
                                                    style: {textDecoration: 'underline', fontSize: '0.875rem'}
                                                },
                                                {
                                                    component: 'LabelValueBlock',
                                                    label: 'AWS Services:',
                                                    value: 'EC2, S3, Cloudfront, ELB, MediaConvert, RDS, Lambda',
                                                    style: {fontSize: '0.875rem'}
                                                },
                                                {
                                                    component: 'LabelValueBlock',
                                                    label: 'Third-Party APIs',
                                                    value: 'Braintree, Stripe, RevenueCat, Clevertap, Algolia, OpenAI, Mixpanel, AppsFlyer, Sentry',
                                                    style: {fontSize: '0.875rem'}
                                                },
                                                {
                                                    component: 'LabelValueBlock',
                                                    label: 'Tools',
                                                    value: 'Slack, Monday, Figma, Xcode',
                                                    style: {fontSize: '0.875rem'}
                                                },
                                                {
                                                    component: 'LabelValueBlock',
                                                    label: 'Technologies, Packages, etc',
                                                    value: 'React (ts & js), Laravel, React Native, TailwindCSS, React MUI, Websockets, Docker, Git Workflows, Vite, Webpack, NPM, Github',
                                                    style: {fontSize: '0.875rem'}
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    component: 'JobBlock',

                                    job: {
                                        style: {
                                            margin: '3rem 0',
                                            padding: '3rem 0',
                                            borderTop: '1px solid #f0f0f0',
                                            borderBottom: '1px solid #f0f0f0'
                                        },
                                        meta: {
                                            title: 'Founder & Full Stack Developer',
                                            company: 'Site Transition',
                                            location: 'Remote',
                                            startDate: '2011',
                                            endDate: '2015',
                                        },
                                        duties: [
                                            'Built secure backend systems with great UX.',
                                            'Created Align International’s child sponsorship platform.',
                                            'Led dev team, managed budgets, and delivered client projects.',
                                            'Published internal NPM and Composer packages.',
                                            'Became familiar with principles of software architecture.'
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            component: 'StyleBlock',
                            style: {marginTop: '1rem', marginBottom: '1rem'},
                            direction: 'row',
                            children: [
                                {
                                    component: 'StyleBlock',
                                    style: {marginTop: '1rem', marginBottom: '1rem', flex: 1, paddingRight: '2.5rem'},
                                    direction: 'column',
                                    children: [
                                        {
                                            component: 'SectionTitle',
                                            title: 'INTERESTS',
                                            style: {
                                                color: '#3ecac2',
                                                letterSpacing: '0.1em',
                                                fontSize: '0.875rem',
                                                fontWeight: 'bold',
                                                marginBottom: '1rem'
                                            }
                                        },
                                        {
                                            component: 'TextBlock',
                                            text: 'I just love building things! Whether it\'s a new feature for a client or a personal project, I enjoy the process of creating and problem-solving. Outside of work, I’m an avid triathlete who enjoys the discipline and mental clarity that comes with endurance training. I also have a passion for reading - particularly on topics related to technology. I spend my downtime watching sports, hanging with family, and checking items off the honey-do list!',
                                            style: {fontSize: 14}
                                        },

                                    ]

                                },
                                {
                                    component: 'StyleBlock',
                                    style: {marginTop: '1rem', marginBottom: '1rem', flex: 1},
                                    direction: 'column',
                                    children: [
                                        {
                                            component: 'SectionTitle',
                                            title: 'EDUCATION',
                                            style: {
                                                color: '#3ecac2',
                                                letterSpacing: '0.1em',
                                                fontSize: '0.875rem',
                                                fontWeight: 'bold',
                                                marginBottom: '1rem'
                                            }
                                        },
                                        {
                                            component: 'EducationBlock',
                                            education: {
                                                institution: 'UC Irvine',
                                                study: 'Mathematics',
                                                years: '2010–2011'
                                            }
                                        },
                                        {
                                            component: 'EducationBlock',
                                            education: {
                                                institution: 'Saddleback College',
                                                study: 'Mathematics & Computer Science',
                                                years: '1999–2002'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    }
};

export default data;
