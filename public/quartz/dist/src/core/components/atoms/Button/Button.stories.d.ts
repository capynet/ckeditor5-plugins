import { Story } from '@storybook/web-components';
import './Button';
declare type ButtonArgsType = {
    secondary?: boolean;
    outline?: boolean;
    ghost?: boolean;
    rounded?: boolean;
    social?: string;
    size?: string;
    icon?: boolean;
    disabled?: boolean;
    shadowTabindex?: number;
    slotA11y?: string;
    slotStart?: string;
    slotDefault: string;
    slotEnd?: string;
};
export declare const Template: Story<ButtonArgsType>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, ButtonArgsType>;
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
        disabled: {
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
        secondary: {
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
        ghost: {
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
        onClick: {
            table: {
                disable: boolean;
            };
        };
        outline: {
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
        rounded: {
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
        shadowTabindex: {
            control: {
                type: string;
                min: number;
                step: number;
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
        'shadow-tabindex': {
            table: {
                disable: boolean;
            };
        };
        size: {
            control: {
                type: string;
                options: {
                    Small: string;
                    Default: undefined;
                    Medium: string;
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
        slotStart: {
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
        slotEnd: {
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
        slotA11y: {
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
        social: {
            control: {
                type: string;
                options: {
                    Facebook: string;
                    Twitter: string;
                    Instagram: string;
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
    };
};
export default _default;
//# sourceMappingURL=Button.stories.d.ts.map