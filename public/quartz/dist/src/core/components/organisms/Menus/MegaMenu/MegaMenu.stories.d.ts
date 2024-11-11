import { Story } from '@storybook/web-components';
import './MegaMenu';
declare type MegaMenuProps = {
    expandA11yLabel?: string;
};
export declare const Template: Story<MegaMenuProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, MegaMenuProps>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    argTypes: {
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
        paddings: {
            disable: boolean;
        };
        design: {
            type: string;
            url: string;
        };
    };
};
export default _default;
//# sourceMappingURL=MegaMenu.stories.d.ts.map