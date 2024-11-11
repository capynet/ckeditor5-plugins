import { Story } from '@storybook/web-components';
import '../Section/Section';
import './Drawer';
declare type DrawerArgsType = {
    slotDefault?: string;
    position?: string;
    open?: boolean;
    fixed?: boolean;
};
export declare const Template: Story<DrawerArgsType>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, DrawerArgsType>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    parameters: {
        paddings: {
            disable: boolean;
        };
        design: {
            type: string;
            url: string;
        };
    };
    argTypes: {
        slotDefault: {
            name: string;
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: string;
        };
        position: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: {
                type: string;
                options: {
                    'Default (left)': undefined;
                    Right: string;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Drawer.stories.d.ts.map