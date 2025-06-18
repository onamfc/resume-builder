import {Mail, GitHub, Linkedin, Globe} from 'react-feather';

function App() {

    const data = {
        name: "Brandon Estrella",
        position: "Senior Full Stack Engineer",

        headshot: "/headshot.jpg",
        contact: [
            {
                type: "email",
                value: "brandonestrelladev@gmail.com",
                icon: {
                    component: "Mail",
                    size: 16
                }
            },
            {
                type: "github",
                value: "Github",
                icon: {
                    component: "GitHub",
                    size: 16
                }
            },
            {
                type: "linkedin",
                value: "LinkedIn",
                icon: {
                    component: "Linkedin",
                    size: 16
                }
            },
            {
                type: "stackoverflow",
                value: "Stack Overflow",
                icon: {
                    component: "Globe",
                    size: 16
                }
            }

        ],
        description: " Full-stack Engineer with 15+ years of experience crafting performant, scalable, and intuitive UIs. Well-versed in both frontend and backend technologies with a strong track record of launching high-traffic, event-driven applications. Passionate about delivering high-quality user experiences through Agile processes, testable architecture, and clean code. Deeply familiar with CI/CD, Docker, and remote collaboration best practices.",
        jobs: [
            {
                title: "Chief Technology Officer & Lead Engineer",
                company: "Marriage365",
                location: "Remote",
                startDate: "2015",
                endDate: "Present",
                jobDuties: [
                    "Spearheaded the complete rebuild of the Marriage365 video-on-demand subscription platform, launching high-availability web and mobile apps used by tens of thousands of users.",
                    "Led a cross-functional development team using Agile methodologies, including sprint planning, daily stand-ups, and stakeholder demos.",
                    "Designed and implemented a queue-based event-driven architecture using Laravel, Python, and serverless technologies along with a robust front-end architecture using React, TypeScript, and modular design patterns.",
                    "Integrated third-party APIs for authentication, payment processing, analytics, and AI integration to streamline business operations.",
                    "Provided hands-on mentorship to developers and wrote internal documentation to uphold best practices.",
                    "Maintained React Native mobile application and submitted to both Google Play and the App Store.",
                    "Designed and developed a customer service dashboard that can be used to upload and manage content, as well as update the web and mobile applications.",
                    "Leveraged websockets to deliver real-time data updates for internal dashboards.",
                    "Refactored monolithic codebase into modular microservices, simplifying code management and accelerating development workflows."
                ],
                subSection: {
                    aws: "EC2, S3, Cloudfront, ELB, MediaConvert, RDS, Lambda",
                    apis: "Braintree, Stripe, RevenueCat, Clevertap, Algolia, OpenAI, Mixpanel, AppsFlyer, Sentry",
                    tools: "Slack, Monday, Figma, Xcode",
                    technologies: "React (ts/js), Laravel, React Native, TailwindCSS, React MUI, Websockets, Docker, Git, Vite, Webpack"
                }
            },
            {
                title: "Founder & Full Stack Developer",
                company: "Site Transition",
                location: "Remote",
                startDate: "2011",
                endDate: "2015",
                jobDuties: [
                    "Built secure backend systems with great UX.",
                    "Created Align International’s child sponsorship platform.",
                    "Led dev team, managed budgets, and delivered client projects.",
                    "Published internal NPM and Composer packages.",
                    "Became familiar with principles of software architecture."
                ]
            }
        ]

    };

    const iconMap: Record<string, React.FC<{ size: number }>> = {
        Mail,
        GitHub,
        Linkedin,
        Globe,
    };

    return (
        <div className="bg-[#f5f5f5] min-h-screen py-10 px-4 font-body text-gray-800">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl overflow-hidden p-8">
                {/* Header */}
                <div className="flex flex-row items-center gap-4 mb-4">
                    <img
                        src={data.headshot}
                        alt={data.name}
                        className="w-36 h-36 rounded-full object-cover border-4 border-[#3ecac2] mb-4"
                    />
                    <div className="flex-col ">
                        <h1 className="text-3xl font-heading text-navy font-bold">{data.name}</h1>
                        <p className="uppercase text-[#3ecac2] tracking-widest font-semibold mt-1">{data.position}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 justify-start pl-2 mb-10 text-sm text-gray-600">
                    {data.contact.map((contact, index) => {
                        const IconComponent = iconMap[contact.icon.component];
                        return (
                            <div key={index} className="flex items-center gap-2">
                                {IconComponent && <IconComponent size={contact.icon.size}/>}
                                {contact.value}
                            </div>
                        );
                    })}
                </div>
                {/* Summary */}
                <div className="bg-gray-100 rounded-md p-4 mb-10 ">
                    {data.description}
                </div>

                {/* Experience */}
                <section className="mb-10">
                    <h2 className="text-sm text-[#3ecac2] font-bold tracking-widest mb-4">EXPERIENCE</h2>

                    {data.jobs.map((job, index) => (
                        <div key={index} className={`${index !== 0 ? 'border-t-2 border-gray-200 pt-6 mt-6' : ''}`}>
                            <div className="flex justify-between flex-wrap gap-2">
                                <h3 className="italic text-lg font-semibold">{job.title}</h3>
                                <span className="text-gray-500">{job.company}</span>
                                <span className="text-gray-500">{job.startDate} – {job.endDate} | {job.location}</span>
                            </div>

                            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                                {job.jobDuties.map((duty, dutyIndex) => (
                                    <li key={dutyIndex}>{duty}</li>
                                ))}
                            </ul>

                            {/* Optional stack section (only for jobs with stackOverview) */}
                            {job.subSection && (
                                <section className="mb-10 mt-5">
                                    <h2 className="text-sm tracking-widest mt-2 underline">Stack Overview</h2>
                                    <p className="text-sm"><strong>AWS Services:</strong> {job.subSection.aws}</p>
                                    <p className="text-sm"><strong>Third-Party APIs:</strong> {job.subSection.apis}</p>
                                    <p className="text-sm"><strong>Tools:</strong> {job.subSection.tools}</p>
                                    <p className="text-sm"><strong>Technologies, Packages, etc:</strong> {job.subSection.technologies}</p>
                                </section>
                            )}
                        </div>
                    ))}
                </section>



                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                    {/* Interests */}
                    <div>
                        <h2 className="text-sm text-[#3ecac2] font-bold tracking-widest mb-2">INTERESTS</h2>
                        <p>
                            I just love building things! Whether it's a new feature for a client or a personal project
                            like this website to which I wrote a resume builder 😉, I enjoy the process of creating and
                            problem-solving. Outside of work, I’m an avid triathlete who enjoys the discipline and
                            mental clarity that comes with endurance training. I also have a passion for reading -
                            particularly on topics related to technology. I spend my downtime watching sports, hanging
                            with family, and checking items off the honey-do list!
                        </p>
                    </div>

                    {/* Education */}
                    <div>
                        <h2 className="text-sm text-[#3ecac2] font-bold tracking-widest mb-2">EDUCATION</h2>
                        <p><strong>UC Irvine</strong> — Mathematics (2010–2011)</p>
                        <p><strong>Saddleback College</strong> — Mathematics & Computer Science (1999–2002)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App
