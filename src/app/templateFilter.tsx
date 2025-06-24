'use client';
import React, { useState } from 'react';
import ResumeRenderer from './ResumeRenderer';
import templates, { TemplateDefinition } from '@/templates';
import Image from 'next/image';

// Define the filter categories for the sidebar
// Each category corresponds to a component type a template might include
const filterCategories = [
    { label: 'Experience', component: 'JobBlock' },
    { label: 'Projects', component: 'BulletBlock' },
    { label: 'Certifications', component: 'CertificationBlock' },
    { label: 'Education', component: 'EducationBlock' },
    { label: 'Skills', component: 'SkillTagBlock' },
    { label: 'Interests', component: 'BulletBlock' },
];

// Utility function to return only the templates that contain every selected component
function filterTemplates(
    selectedComponents: string[],
    templates: TemplateDefinition[]
): TemplateDefinition[] {
    return templates.filter(template =>
        selectedComponents.every(comp => template.components.includes(comp))
    );
}

const TemplateFilter: React.FC = () => {
    // Tracks which components the user has selected for filtering
    const [selected, setSelected] = useState<string[]>([]);

    // Stores the template the user clicked for previewing
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateDefinition | null>(null);

    // Toggles a component in the selected filter list
    const handleChange = (component: string) => {
        setSelected(prev =>
            prev.includes(component)
                ? prev.filter(c => c !== component) // Remove if already selected
                : [...prev, component]              // Add if not already selected
        );
    };

    // Filter templates based on selected component types
    const results = filterTemplates(selected, templates);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar filter controls */}
            <aside className="md:w-1/4 w-full p-6 border-r border-slate-200 bg-slate-50">
                <h2 className="text-xl font-semibold mb-4 text-slate-600">Filter Templates</h2>
                <div className="space-y-3">
                    {filterCategories.map(({ label, component }) => (
                        <label key={Math.random()} className="flex items-center gap-2 text-sm text-slate-600">
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

            {/* Main content area for matching templates and preview */}
            <main className="md:w-3/4 w-full p-6 overflow-auto">
                <h3 className="text-lg font-medium mb-4">Matching Templates</h3>

                {/* Render matching templates based on selected filters */}
                {results.length > 0 ? (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results.map(template => (
                            <div
                                key={template.name}
                                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
                                onClick={() => setSelectedTemplate(template)}
                            >
                                <Image
                                    src={template.image}
                                    alt={template.name}
                                    width={600}
                                    height={400}
                                    className="h-auto w-full object-cover"
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

                {/* Resume preview section for selected template */}
                {selectedTemplate && (
                    <div className="mt-10 p-6 border rounded bg-white shadow-inner">
                        <h3 className="text-lg font-semibold mb-4 text-slate-600">Selected Template Preview</h3>
                        <ResumeRenderer
                            layout={selectedTemplate.layout}
                            data={selectedTemplate.data}
                        />
                    </div>
                )}
            </main>
        </div>
    );
};

export default TemplateFilter;
