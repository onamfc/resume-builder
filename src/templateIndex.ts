type TemplateIndex = {
    name: string;
    label: string;
    components: string[];
};

const templateIndex: TemplateIndex[] = [
    {
        name: "nova",
        label: "Nova",
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

export default templateIndex;
