import { Story } from '@storybook/web-components';
import './Menu';
declare type MenuProps = {
    variant?: string;
    slotDefault?: string;
};
export declare const Template: Story<MenuProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, MenuProps>;
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
        variant: {
            control: {
                type: string;
                options: {
                    Default: string;
                    Main: string;
                    Utility: string;
                    'Footer Bottom': string;
                    'Social Links': string;
                };
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
        slotDefault: {
            name: string;
            description: string;
            table: {
                category: string;
            };
            control: string;
        };
        orientation: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Menu.stories.d.ts.map