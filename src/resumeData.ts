const resumeData = {
    layout: {
        direction: 'column',
        children: [
            {
                key: 'header',
                direction: 'row',
                children: [
                    'headshot',
                    {
                        key: 'nameAndContact',
                        direction: 'column',
                        children: [
                            'nameAndTitle',
                            {
                                key: 'contactList',
                                direction: 'row',
                                children: ['contactList']
                            }
                        ]
                    }
                ]
            },
            'summary',
            'experienceTitle',
            {
                key: 'jobs',
                direction: 'column',
                children: ['job1', 'job2']
            },
            'interestsTitle',
            'interests',
            'educationTitle',
            {
                key: 'educationList',
                direction: 'column',
                children: ['edu1', 'edu2']
            }
        ]
    },
    headshot: {
        component: 'ImageBlock',
        imageUrl: '/headshot.jpg',
        style: {
            width: 144,
            height: 144,
            borderRadius: '9999px',
            objectFit: 'cover',
            border: '4px solid #3ecac2',
            marginBottom: '1rem'
        }
    },
    nameAndTitle: {
        component: 'TextBlock',
        text: 'Brandon Estrella — Senior Full Stack Engineer',
        style: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#243554',
            marginBottom: '1rem'
        }
    },
    contactList: {
        component: 'StyleBlock',
        styles: {paddingTop: 8, paddingBottom: 8},
        children: [
            {
                component: 'ContactBlock',
                contact: {
                    type: 'email',
                    value: 'brandonestrelladev@gmail.com',
                    icon: {component: 'Mail', size: 16}
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
    },
    summary: {
        component: 'TextBlock',
        text: `Full-stack Engineer with 15+ years of experience crafting performant, scalable, and intuitive UIs. Well-versed in both frontend and backend technologies...`,
        style: {
            backgroundColor: '#f0f0f0',
            padding: '1rem',
            borderRadius: '0.5rem',
            fontSize: 14
        }
    },
    experienceTitle: {
        component: 'SectionTitle',
        title: 'EXPERIENCE'
    },
    job1: {
        component: 'JobBlock',
        job: {
            title: 'Chief Technology Officer & Lead Engineer',
            company: 'Marriage365',
            location: 'Remote',
            startDate: '2015',
            endDate: 'Present',
            jobDuties: ['Rebuilt the entire platform...', 'Led a cross-functional team...'],
            subSection: {
                aws: 'EC2, S3, Cloudfront, etc.',
                apis: 'Stripe, RevenueCat...',
                tools: 'Slack, Figma...',
                technologies: 'React, Laravel, Docker...'
            }
        },
        isFirst: true
    },
    job2: {
        component: 'JobBlock',
        job: {
            title: 'Founder & Full Stack Developer',
            company: 'Site Transition',
            location: 'Remote',
            startDate: '2011',
            endDate: '2015',
            jobDuties: ['Built backend systems...', 'Managed client deliverables...']
        }
    },
    interestsTitle: {
        component: 'SectionTitle',
        title: 'INTERESTS'
    },
    interests: {
        component: 'TextBlock',
        text: `I just love building things! I’m an avid triathlete...`,
        style: {fontSize: 14}
    },
    educationTitle: {
        component: 'SectionTitle',
        title: 'EDUCATION'
    },
    edu1: {
        component: 'EducationBlock',
        education: {
            institution: 'UC Irvine',
            study: 'Mathematics',
            years: '2010–2011'
        }
    },
    edu2: {
        component: 'EducationBlock',
        education: {
            institution: 'Saddleback College',
            study: 'Mathematics & Computer Science',
            years: '1999–2002'
        }
    }
};

export default resumeData;
