import React from 'react';
import templateDefault from '@/templates/default';
import {Mail, GitHub, Linkedin, Globe} from 'react-feather';

const iconMap: Record<string, React.FC<{ size: number }>> = {
    Mail,
    GitHub,
    Linkedin,
    Globe,
};

const componentMap: Record<string, React.FC<any>> = {
    BulletBlock: ({ items, className = '' }: { items: string[]; className?: string }) => (
        <ul className={className || 'grid grid-cols-2 gap-x-4 gap-y-1 text-sm list-disc pl-6'}>
            {items.map((item, i) => <li key={Math.random()}>{item}</li>)}
        </ul>
    ),
    ContactBlock: ({contact}: { contact: any }) => {
        const IconComponent = iconMap[contact.icon.component];
        return (
            <div className="flex items-center gap-2 text-sm text-gray-600" style={contact.style}>
                {IconComponent && <IconComponent size={contact.icon.size}/>}
                {contact.value}
            </div>
        );
    },
    CertificationBlock: ({ cert }: { cert: { name: string; issuer?: string; date?: string } }) => (
        <div className="mb-1 text-sm">
            <strong>{cert.name}</strong>
            {cert.issuer && <> — <span className="text-slate-600">{cert.issuer}</span></>}
            {cert.date && <> <span className="text-slate-400 text-xs">({cert.date})</span></>}
        </div>
    ),
    DividerBlock: ({ style, className = '' }: { style?: React.CSSProperties; className?: string }) => (
        <hr style={style} className={className || 'my-4 border-gray-300'} />
    ),
    EducationBlock: ({ education, className = '' }: { education: any; className?: string }) => (
        <p className={className}>
            <strong>{education.institution}</strong> — {education.study} ({education.years})
        </p>
    ),
    ImageBlock: ({imageUrl, style, alt}: { imageUrl: string; style?: React.CSSProperties, alt: string }) => (
        <img src={imageUrl} alt={alt} style={style}/>
    ),
    JobBlock: ({job, children, isFirst, className = ''}: {
        job: any;
        children?: any[];
        isFirst?: boolean;
        className?: string
    }) => (
        <div className={`${!isFirst ? className : ''}`} style={job.style}>
            <div className={job.meta.classNames?.headerClassName ?? 'flex justify-between flex-wrap gap-2'}>
                <h3 className={job.meta.classNames?.titleClassName ?? 'italic text-lg font-semibold'}>
                    {job.meta.title}
                </h3>
                <span className={job.meta.classNames?.companyClassName ?? 'text-gray-500'}>{job.meta.company}</span>
                <span
                    className={job.meta.classNames?.dateClassName ?? 'text-gray-500'}>{job.meta.startDate} – {job.meta.endDate} | {job.meta.location}</span>
            </div>

            <ul className={job.meta.classNames?.listClassName ?? 'list-disc pl-6 mt-2 space-y-1 text-sm'}>
                {job.duties.map((duty: string, i: number) => (
                    <li key={i}>{duty}</li>
                ))}
            </ul>

            {children && <div className="mt-4">{children}</div>}
        </div>
    ),
    LabelValueBlock: ({label, value, className}: { label: string; value: string; className: string }) => (
        <p className={className || 'text-sm'}><strong>{label}</strong> {value}</p>
    ),
    ProjectBlock: ({ project }: { project: { name: string; description: string; link?: string } }) => (
        <div className="mb-2">
            <p className="font-medium text-sm">{project.name}</p>
            <p className="text-sm text-slate-600">{project.description}</p>
            {project.link && (
                <a href={project.link} className="text-xs text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            )}
        </div>
    ),

    SectionTitle: ({ title, style, className = '' }: { title: string; style?: React.CSSProperties; className?: string }) => (
        <h2 style={style} className={className}>{title}</h2>
    ),
    StyleBlock: ({ style, className = '', children = [], direction }: {
        style?: React.CSSProperties;
        className?: string;
        children?: any[];
        direction?: string;
    }) => (
        <div style={style} className={`${className} ${direction === 'row' ? 'flex flex-row gap-4' : 'flex-col'}`}>
            {children}
        </div>
    ),
    SkillTagBlock: ({ skills, className = '' }: { skills: string[]; className?: string }) => (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {skills.map((skill, i) => (
                <span key={i} className="bg-gray-200 text-xs px-2 py-1 rounded-full">{skill}</span>
            ))}
        </div>
    ),
    SidebarItemBlock: ({ icon, label }: { icon: string; label: string }) => {
        const Icon = iconMap[icon];
        return (
            <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                {Icon && <Icon size={14} />} {label}
            </div>
        );
    },
    TextBlock: ({ text, style, className = '' }: { text: string; style?: React.CSSProperties; className?: string }) => (
        <p style={style} className={className}>{text}</p>
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
        templateDefault.layout.children.map((node, i) => (
            <React.Fragment key={i}>{renderNode(node, templateDefault.data)}</React.Fragment>
        ))
    );
};

export default ResumeRenderer;
