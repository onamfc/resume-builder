// Updated TemplateFilter.tsx
'use client';
import React, { useState } from 'react';
import ResumeRenderer from './ResumeRenderer';
import templates, { TemplateDefinition } from '@/templates';

const filterCategories = [
    { label: 'Experience', component: 'JobBlock' },
    { label: 'Projects', component: 'BulletBlock' },
    { label: 'Certifications', component: 'CertificationBlock' },
    { label: 'Education', component: 'EducationBlock' },
    { label: 'Skills', component: 'SkillTagBlock' },
    { label: 'Interests', component: 'BulletBlock' },
];

function filterTemplates(
    selectedComponents: string[],
    templates: TemplateDefinition[]
): TemplateDefinition[] {
    return templates.filter(template =>
        selectedComponents.every(comp => template.components.includes(comp))
    );
}

const TemplateFilter: React.FC = () => {
    const [selected, setSelected] = useState<string[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateDefinition | null>(null);

    const handleChange = (component: string) => {
        setSelected(prev =>
            prev.includes(component)
                ? prev.filter(c => c !== component)
                : [...prev, component]
        );
    };

    const results = filterTemplates(selected, templates);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar */}
            <aside className="md:w-1/4 w-full p-6 border-r border-slate-200 bg-slate-50">
                <h2 className="text-xl font-semibold mb-4">Filter Templates</h2>
                <div className="space-y-3">
                    {filterCategories.map(({ label, component }) => (
                        <label key={Math.random()} className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={selected.includes(component)}
                                onChange={() => handleChange(component)}
                            />
                            {label}
                        </label>
                    ))}
                </div>
            </aside>

            {/* Main content */}
            <main className="md:w-3/4 w-full p-6 overflow-auto">
                <h3 className="text-lg font-medium mb-4">Matching Templates</h3>
                {results.length > 0 ? (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results.map(template => (
                            <div
                                key={template.name}
                                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
                                onClick={() => setSelectedTemplate(template)}
                            >
                                <img
                                    src={template.image}
                                    alt={template.name}
                                    className="w-full object-cover"
                                />
                                <div className="p-3">
                                    <h4 className="text-sm font-semibold">{template.label}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-gray-500">No templates match your filters.</p>
                )}

                {selectedTemplate && (
                    <div className="mt-10 p-6 border rounded bg-white shadow-inner">
                        <h3 className="text-lg font-semibold mb-4">Selected Template Preview</h3>
                        <ResumeRenderer layout={selectedTemplate.layout} data={selectedTemplate.data} />
                    </div>
                )}
            </main>
        </div>
    );
};

export default TemplateFilter;
