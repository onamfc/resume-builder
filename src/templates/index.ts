import defaultTemplate from './default';
import novaTemplate from './nova';
import metroTemplate from './metro';

export type TemplateDefinition = {
    name: string;
    label: string;
    image: string;
    components: string[];
    layout: any;
    data: any;
};

const templates: TemplateDefinition[] = [
    defaultTemplate,
    novaTemplate,
    metroTemplate,
];

export default templates;
