// ResumeRenderer.tsx
import React from 'react';
import resumeData from './resumeData';
import {Mail, GitHub, Linkedin, Globe} from 'react-feather';

const iconMap: Record<string, React.FC<{ size: number }>> = {
    Mail,
    GitHub,
    Linkedin,
    Globe,
};

const componentMap: Record<string, React.FC<any>> = {
    ImageBlock: ({imageUrl, style}: { imageUrl: string; style: any }) => (
        <img src={imageUrl} alt="headshot" style={style}/>
    ),
    TextBlock: ({text, style}: { text: string; style?: any }) => (
        <p style={style}>{text}</p>
    ),
    SectionTitle: ({title}: { title: string }) => (
        <h2 className="text-sm text-[#3ecac2] font-bold tracking-widest mb-4">{title}</h2>
    ),
    ContactBlock: ({contact}: { contact: any }) => {
        const IconComponent = iconMap[contact.icon.component];
        return (
            <div className="flex items-center gap-2 text-sm text-gray-600">
                {IconComponent && <IconComponent size={contact.icon.size}/>}
                {contact.value}
            </div>
        );
    },
    StyleBlock: ({styles, children}: { styles?: React.CSSProperties; children: any[] }) => (
        <div style={styles} className="mb-4">
            {children.map((child, i) => {
                const Component = componentMap[child.component];
                return Component ? <Component key={i} {...child} /> : null;
            })}
        </div>
    ),
    JobBlock: ({job, isFirst}: { job: any; isFirst?: boolean }) => (
        <div className={`${!isFirst ? 'border-t-2 border-gray-200 pt-6 mt-6' : ''}`}>
            <div className="flex justify-between flex-wrap gap-2">
                <h3 className="italic text-lg font-semibold">{job.title}</h3>
                <span className="text-gray-500">{job.company}</span>
                <span className="text-gray-500">{job.startDate} – {job.endDate} | {job.location}</span>
            </div>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                {job.jobDuties.map((duty: string, i: number) => (
                    <li key={i}>{duty}</li>
                ))}
            </ul>
            {job.subSection && (
                <section className="mb-10 mt-5">
                    <h2 className="text-sm tracking-widest mt-2 underline">Stack Overview</h2>
                    <p className="text-sm"><strong>AWS Services:</strong> {job.subSection.aws}</p>
                    <p className="text-sm"><strong>Third-Party APIs:</strong> {job.subSection.apis}</p>
                    <p className="text-sm"><strong>Tools:</strong> {job.subSection.tools}</p>
                    <p className="text-sm"><strong>Technologies, Packages, etc:</strong> {job.subSection.technologies}
                    </p>
                </section>
            )}
        </div>
    ),
    EducationBlock: ({education}: { education: any }) => (
        <p><strong>{education.institution}</strong> — {education.study} ({education.years})</p>
    )
};

function renderNode(key: string | { key: string; children: any[]; direction: string }, data: any): React.ReactNode {
    if (typeof key === 'string') {
        const entry = data[key];
        const Component = componentMap[entry.component];
        if (!Component) return null;

        if (entry.component === 'StyleBlock') {
            return (
                <Component key={key} styles={entry.styles}>
                    {entry.children.map((child: any, index: number) => {
                        const ChildComponent = componentMap[child.component];
                        return ChildComponent ? <ChildComponent key={index} {...child} /> : null;
                    })}
                </Component>
            );
        }

        return <Component key={key} {...entry} />;
    }

    if (typeof key === 'object') {
        return (
            <div key={key.key} className={key.direction === 'column' ? 'flex flex-col gap-4' : 'flex flex-row gap-4'}>
                {key.children.map((childKey) => renderNode(childKey, data))}
            </div>
        );
    }

    return null;
}

const ResumeRenderer: React.FC = () => {
    return (
        <div className="bg-[#f5f5f5] min-h-screen py-10 px-4 font-body text-gray-800">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl overflow-hidden p-8">
                {resumeData.layout.children.map((node) => renderNode(node, resumeData))}
            </div>
        </div>
    );
};

export default ResumeRenderer;
