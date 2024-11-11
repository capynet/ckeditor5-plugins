import { Story } from '@storybook/web-components';
import './Search';
declare type SearchProps = {
    slotDefault?: string;
    highlight?: boolean;
    matchAll?: boolean;
};
export declare const Template: Story<SearchProps>;
export declare const Plaground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, SearchProps>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    parameters: {
        design: {
            type: string;
            url: string;
        };
    };
    argTypes: {
        highlight: {
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: {
                type: string;
            };
        };
        matchAll: {
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: {
                type: string;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Search.stories.d.ts.map