import { Story } from '@storybook/web-components';
import './Tooltip';
declare type TooltipProps = {
    trigger: string;
    slotDefault: string;
    open: boolean;
    behavior: string;
    position: string;
    bgColor: string;
};
export declare const Template: Story<TooltipProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, TooltipProps>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    argTypes: {
        trigger: {
            description: string;
            control: string;
            table: {
                category: string;
            };
        };
        position: {
            description: string;
            control: {
                type: string;
                options: string[];
                default: string;
            };
            table: {
                category: string;
            };
        };
        behavior: {
            description: string;
            control: {
                type: string;
                options: string[];
                default: string;
            };
            table: {
                category: string;
            };
        };
        bgColor: {
            description: string;
            control: {
                type: string;
                options: string[];
                default: string;
            };
            table: {
                category: string;
            };
        };
        slotDefault: {
            description: string;
            control: string;
            table: {
                category: string;
            };
        };
        open: {
            description: string;
            control: string;
            table: {
                category: string;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Tooltip.stories.d.ts.map