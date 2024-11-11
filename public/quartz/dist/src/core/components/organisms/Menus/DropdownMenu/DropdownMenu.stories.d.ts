import { Story } from '@storybook/web-components';
import './DropdownMenu';
declare type DropdownMenuProps = {
    expandA11yLabel?: string;
};
export declare const Template: Story<DropdownMenuProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, DropdownMenuProps>;
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
//# sourceMappingURL=DropdownMenu.stories.d.ts.map