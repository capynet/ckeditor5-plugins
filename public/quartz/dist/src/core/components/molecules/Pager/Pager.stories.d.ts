import './Pager';
declare type PagerProps = {
    currentPage?: number;
    pages?: number;
};
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, PagerProps>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    argTypes: {
        currentPage: {
            table: {
                category: string;
            };
            name: string;
            description: string;
            control: string;
        };
        pages: {
            table: {
                category: string;
            };
            name: string;
            description: string;
            control: string;
        };
    };
};
export default _default;
//# sourceMappingURL=Pager.stories.d.ts.map