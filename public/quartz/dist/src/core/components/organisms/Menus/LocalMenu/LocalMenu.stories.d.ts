import './LocalMenu';
declare type LocalMenuProps = {
    links: {
        id: string;
        title: string;
        url: string;
    }[];
};
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, LocalMenuProps>;
declare const _default: {
    title: string;
    component: string;
    parameters: {
        design: {
            type: string;
            url: string;
        };
    };
    argTypes: {
        links: {
            control: {
                type: string;
            };
            description: string;
            name: string;
            parameters: {
                controls: {
                    sort: string;
                };
            };
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=LocalMenu.stories.d.ts.map