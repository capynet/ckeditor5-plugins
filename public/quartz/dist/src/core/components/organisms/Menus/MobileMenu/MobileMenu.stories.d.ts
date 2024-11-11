import { Story } from '@storybook/web-components';
import './MobileMenu';
declare type MobileMenuProps = {
    backLabel?: string;
    expandA11yLabel?: string;
};
export declare const Template: Story<MobileMenuProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, MobileMenuProps>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    argTypes: {
        backLabel: {
            control: {
                type: string;
            };
            description: string;
            name: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
        };
        'back-label': {
            table: {
                disable: boolean;
            };
        };
        expandA11yLabel: {
            control: {
                type: string;
            };
            description: string;
            name: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
        };
        'expand-a11y-label': {
            table: {
                disable: boolean;
            };
        };
    };
    parameters: {
        design: {
            type: string;
            url: string;
        };
    };
};
export default _default;
//# sourceMappingURL=MobileMenu.stories.d.ts.map