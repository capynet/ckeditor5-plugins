import { Story } from '@storybook/web-components';
import './LoadMore';
declare type LoadMoreProps = {
    displayed?: number;
    total?: number;
    loadMoreText?: string;
    middleText?: string;
    unitText?: string;
};
export declare const Template: Story<LoadMoreProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, LoadMoreProps>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    argTypes: {
        displayed: {
            table: {
                category: string;
            };
            name: string;
            description: string;
            control: string;
        };
        total: {
            table: {
                category: string;
            };
            name: string;
            description: string;
            control: string;
        };
        loadMoreText: {
            table: {
                category: string;
            };
            name: string;
            description: string;
            control: string;
        };
        middleText: {
            table: {
                category: string;
            };
            name: string;
            description: string;
            control: string;
        };
        unitText: {
            table: {
                category: string;
            };
            name: string;
            description: string;
            control: string;
        };
        isDisabled: {
            table: {
                disable: boolean;
            };
        };
        percentage: {
            table: {
                disable: boolean;
            };
        };
        load: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=LoadMore.stories.d.ts.map