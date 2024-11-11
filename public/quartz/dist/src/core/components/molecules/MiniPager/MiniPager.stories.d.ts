import { Story } from '@storybook/web-components';
import './MiniPager';
declare type MiniPagerProps = {
    currentPage?: number;
    pages?: number;
};
export declare const Template: Story<MiniPagerProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, MiniPagerProps>;
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
//# sourceMappingURL=MiniPager.stories.d.ts.map