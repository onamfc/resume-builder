import React from 'react';
import { Mail, GitHub, Linkedin, Globe } from 'react-feather';
import Image from "next/image";

// Icon map for ContactBlock and SidebarItemBlock
const iconMap: Record<string, React.FC<{ size: number }>> = {
    Mail,
    GitHub,
    Linkedin,
    Globe,
};

// Component map for rendering nodes by template definition
const componentMap: Record<string, React.FC<any>> = {
    // Renders a list of bullet points
    BulletBlock: ({ items, className = '' }) => (
        <ul className={className || 'grid grid-cols-2 gap-x-4 gap-y-1 text-sm list-disc pl-6'}>
            {items.map((item: string, i: number) => <li key={Math.random()}>{item}</li>)}
        </ul>
    ),

    // Renders a contact item with an icon and value (e.g., email, GitHub)
    ContactBlock: ({ contact }) => {
        const IconComponent = iconMap[contact.icon.component];
        return (
            <div className="flex items-center gap-2 text-sm text-gray-600" style={contact.style}>
                {IconComponent && <IconComponent size={contact.icon.size} />}
                {contact.value}
            </div>
        );
    },
    // Displays a certification with optional issuer and date
    CertificationBlock: ({ cert }) => (
        <div className="mb-1 text-sm">
            <strong>{cert.name}</strong>
            {cert.issuer && <> — <span className="text-slate-600">{cert.issuer}</span></>}
            {cert.date && <> <span className="text-slate-400 text-xs">({cert.date})</span></>}
        </div>
    ),
    // Renders a visual divider (horizontal rule)
    DividerBlock: ({ style, className = '' }) => (
        <hr style={style} className={className || 'my-4 border-gray-300'} />
    ),
    // Displays education history (institution, study, years)
    EducationBlock: ({ education, className = '' }) => (
        <p className={className}>
            <strong>{education.institution}</strong> — {education.study} ({education.years})
        </p>
    ),
    // Displays an image block
    ImageBlock: ({ imageUrl, style, alt }) => (
        <Image width={style.width} height={style.height} src={imageUrl} alt={alt} style={style} />
    ),
    // Renders a job section with metadata and bullet-point duties
    JobBlock: ({ job, children, isFirst, className = '' }) => (
        <div className={`${!isFirst ? className : ''}`} style={job.style}>
            <div className={job.meta.classNames?.headerClassName ?? 'flex justify-between flex-wrap gap-2'}>
                <h3 className={job.meta.classNames?.titleClassName ?? 'italic text-lg font-semibold'}>
                    {job.meta.title}
                </h3>
                <span className={job.meta.classNames?.companyClassName ?? 'text-gray-500'}>{job.meta.company}</span>
                <span className={job.meta.classNames?.dateClassName ?? 'text-gray-500'}>
          {job.meta.startDate} – {job.meta.endDate} | {job.meta.location}
        </span>
            </div>
            <ul className={job.meta.classNames?.listClassName ?? 'list-disc pl-6 mt-2 space-y-1 text-sm'}>
                {job.duties.map((duty: string, i: number) => (
                    <li key={i}>{duty}</li>
                ))}
            </ul>
            {children && <div className="mt-4">{children}</div>}
        </div>
    ),
    // Displays a label and corresponding value
    LabelValueBlock: ({ label, value, className }) => (
        <p className={className || 'text-sm'}><strong>{label}</strong> {value}</p>
    ),
    // Displays project details with optional external link
    ProjectBlock: ({ project }) => (
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
    // Displays a section title
    SectionTitle: ({ title, style, className = '' }) => (
        <h2 style={style} className={className}>{title}</h2>
    ),
    // Generic block to apply styling and direction (e.g., for layout rows or columns)
    StyleBlock: ({ style, className = '', children = [], direction }) => (
        <div style={style} className={`${className} ${direction === 'row' ? 'flex flex-row gap-4' : 'flex-col'}`}>
            {children}
        </div>
    ),
    // Renders a list of skills as tags
    SkillTagBlock: ({ skills, className = '' }) => (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {skills.map((skill: string, i: number) => (
                <span key={i} className="bg-gray-200 text-xs px-2 py-1 rounded-full">{skill}</span>
            ))}
        </div>
    ),
    // Sidebar item with an icon and label (used in sidebar layout)
    SidebarItemBlock: ({ icon, label }) => {
        const Icon = iconMap[icon];
        return (
            <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                {Icon && <Icon size={14} />} {label}
            </div>
        );
    },
    // Displays a styled paragraph of text
    TextBlock: ({ text, style, className = '' }) => (
        <p style={style} className={className}>{text}</p>
    ),
};

/**
 * Recursively renders nodes from the template layout and data.
 * @param key - The node definition or key string from the layout
 * @param data - Data source object
 */
function renderNode(
    key: string | { component?: string; children?: any[]; key?: string; direction?: string; [key: string]: any },
    data: any
): React.ReactNode {
    // Case: key is a string referencing an entry in the data object
    if (typeof key === 'string') {
        const entry = data?.[key];
        if (!entry) return null;
        return renderNode(entry, data); // Recurse into the resolved object
    }
    // Case: key is an object with a defined component
    if (typeof key === 'object') {
        if (key.component) {
            const Component = componentMap[key.component];
            if (!Component) return null;
            // Recursively render children
            const renderedChildren = (key.children ?? []).map((child: any, i: number) => (
                <React.Fragment key={i}>{renderNode(child, data)}</React.Fragment>
            ));

            return <Component {...{ ...key, children: renderedChildren }} />;
        }
        // Case: object has children but no component; render as a flex container
        if (key.key) {
            return (
                <div key={key.key} className={`flex ${key.direction === 'column' ? 'flex-col' : 'flex-row'} gap-4 flex-wrap`}>
                    {(key.children ?? []).map((childKey, i) => (
                        <React.Fragment key={Math.random()}>{renderNode(childKey, data)}</React.Fragment>
                    ))}
                </div>
            );
        }
    }

    return null;
}

/**
 * The main resume renderer component.
 * Loops through layout nodes and renders them using renderNode()
 */
type ResumeRendererProps = {
    layout: { children: any[] };
    data: any;
};

const ResumeRenderer: React.FC<ResumeRendererProps> = ({ layout, data }) => {
    if (!layout?.children) return null;

    return (
        <>
            {layout.children.map((node, i) => (
                <React.Fragment key={i}>{renderNode(node, data)}</React.Fragment>
            ))}
        </>
    );
};

export default ResumeRenderer;
