import { Story } from '@storybook/web-components';
import './Badge';
declare type BadgeArgsType = {
    value?: string;
    valueColor?: string;
    baseColor?: string;
    slotDefault: string;
    icon?: boolean;
};
export declare const Template: Story<BadgeArgsType>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, BadgeArgsType>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    parameters: {
        controls: {
            hideNoControlsWarning: boolean;
            sort: string;
        };
        design: {
            type: string;
            url: string;
        };
    };
    argTypes: {
        baseColor: {
            control: {
                type: string;
                options: {
                    Default: undefined;
                    Light: string;
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
        value: {
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
        valueColor: {
            control: {
                type: string;
                options: {
                    Default: undefined;
                    Light: string;
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
        icon: {
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
        slotDefault: {
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
        'base-color': {
            table: {
                disable: boolean;
            };
        };
        'value-color': {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Badge.stories.d.ts.map