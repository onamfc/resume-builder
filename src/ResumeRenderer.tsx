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
    ImageBlock: ({imageUrl, style, alt}: { imageUrl: string; style?: React.CSSProperties, alt: string }) => (
        <img src={imageUrl} alt={alt} style={style}/>
    ),
    TextBlock: ({text, style}: { text: string; style?: React.CSSProperties }) => (
        <p style={style}>{text}</p>
    ),
    SectionTitle: ({title, style}: { title: string, style?: React.CSSProperties }) => (
        <h2 style={style}>{title}</h2>
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
    StyleBlock: ({styles, children = [], direction}: {
        styles?: React.CSSProperties;
        children?: any[];
        direction?: string;
    }) => (
        <div style={styles} className={`${direction === 'row' ? 'flex flex-row gap-4' : 'flex-col'}`}>
            {children}
        </div>
    ),
    JobBlock: ({job, children, isFirst}: { job: any; children?: any[]; isFirst?: boolean }) => (
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
            {children && <div className="mt-4">{children}</div>}
        </div>
    ),
    LabelValueBlock: ({label, value}: { label: string; value: string }) => (
        <p className="text-sm"><strong>{label}</strong> {value}</p>
    ),
    EducationBlock: ({education}: { education: any }) => (
        <p><strong>{education.institution}</strong> — {education.study} ({education.years})</p>
    )
};

function renderNode(
    key: string | { key?: string; children?: any[]; direction?: string; component?: string; [key: string]: any },
    data: any
): React.ReactNode {
    // If 'string', use lookup (for root keys like 'header')
    if (typeof key === 'string') {
        const entry = data?.[key];
        if (!entry) return null;
        return renderNode(entry, data);
    }

    // If object and has component
    if (typeof key === 'object') {
        if (key.component) {
            const Component = componentMap[key.component];
            if (!Component) return null;

            const renderedChildren = (key.children ?? []).map((child: any, i: number) => (
                <React.Fragment key={i}>{renderNode(child, data)}</React.Fragment>
            ));

            return <Component {...{...key, children: renderedChildren}} />;
        }

        // Optional fallback if using keyed children containers
        if (key.key) {
            return (
                <div key={key.key}
                     className={`flex ${key.direction === 'column' ? 'flex-col' : 'flex-row'} gap-4 flex-wrap`}>
                    {(key.children ?? []).map((childKey, i) => (
                        <React.Fragment key={i}>{renderNode(childKey, data)}</React.Fragment>
                    ))}
                </div>
            );
        }
    }

    return null;
}


const ResumeRenderer: React.FC = () => {
    return (
        resumeData.layout.children.map((node, i) => (
            <React.Fragment key={i}>{renderNode(node, resumeData.data)}</React.Fragment>
        ))
    );
};

export default ResumeRenderer;
