import React, {useState} from "react";

type TemplateIndex = {
    name: string;
    label: string;
    image: string;
    components: string[];
};

type FilterCategory = {
    label: string;
    component: string;
};

const filterCategories: FilterCategory[] = [
    {label: "Experience", component: "JobBlock"},
    {label: "Projects", component: "BulletBlock"},
    {label: "Certifications", component: "CertificationBlock"},
    {label: "Education", component: "EducationBlock"},
    {label: "Skills", component: "SkillTagBlock"},
    {label: "Interests", component: "BulletBlock"}
];

const templateIndex: TemplateIndex[] = [
    {
        name: "default",
        label: "Default",
        image: "https://placehold.co/600x400/3acede/FFF?text=Default",
        components: [
            "StyleBlock",
            "ImageBlock",
            "TextBlock",
            "ContactBlock",
            "DividerBlock",
            "SectionTitle",
            "JobBlock",
            "BulletBlock",
            "EducationBlock",
        ]
    },
    {
        name: "nova",
        label: "Nova",
        image: "https://placehold.co/600x400/000000/FFF?text=Nova",
        components: [
            "StyleBlock",
            "ImageBlock",
            "TextBlock",
            "ContactBlock",
            "DividerBlock",
            "SectionTitle",
            "JobBlock",
            "BulletBlock",
            "EducationBlock",
            "SkillTagBlock",
            "CertificationBlock"
        ]
    },
    {
        name: "metro",
        label: "Metro",
        image: "https://placehold.co/600x400?text=Metro",
        components: [
            "StyleBlock",
            "ImageBlock",
            "TextBlock",
            "ContactBlock",
            "SectionTitle",
            "JobBlock",
            "EducationBlock",
            "BulletBlock",
            "SkillTagBlock"
        ]
    }
];

function filterTemplates(
    selectedComponents: string[],
    templates: TemplateIndex[]
): TemplateIndex[] {
    return templates.filter(template =>
        selectedComponents.every(comp => template.components.includes(comp))
    );
}

const TemplateFilter: React.FC = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange = (component: string) => {
        setSelected(prev =>
            prev.includes(component)
                ? prev.filter(c => c !== component)
                : [...prev, component]
        );
    };

    const results = filterTemplates(selected, templateIndex);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Sidebar */}
            <aside className="md:w-1/4 w-full p-6 border-r border-slate-200 bg-slate-50">
                <h2 className="text-xl font-semibold mb-4">Filter Templates</h2>
                <div className="space-y-3">
                    {filterCategories.map(({label, component}) => (
                        <label key={component} className="flex items-center gap-2 text-sm">
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
                                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
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
            </main>
        </div>
    );
};

export default TemplateFilter;
