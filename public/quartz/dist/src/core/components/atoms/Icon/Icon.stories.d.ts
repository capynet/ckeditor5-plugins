import { Story } from '@storybook/web-components';
import './Icon';
declare type IconArgsType = {
    name: string;
    color?: string;
    width?: number;
    height?: number;
    hover?: boolean;
    circle?: boolean;
    circleDiameter?: number;
    circleFillColor?: string;
    circleBorderWidth?: number;
    circleBorderColor?: string;
};
export declare const Template: Story<IconArgsType>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, IconArgsType>;
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
        name: {
            description: string;
            table: {
                category: string;
            };
            type: {
                name: string;
                required: boolean;
            };
            control: {
                type: string;
                options: string[];
            };
        };
        color: {
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: {
                type: string;
                options: {
                    brand: string;
                    light: string;
                    gray: string;
                    white: string;
                    accent: string;
                };
            };
        };
        width: {
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: {
                type: string;
                min: number;
            };
        };
        height: {
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: {
                type: string;
                min: number;
            };
        };
        hover: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        circle: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        circleDiameter: {
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: {
                type: string;
                min: number;
            };
        };
        circleFillColor: {
            description: string;
            table: {
                category: string;
            };
            type: {
                name: string;
            };
            control: {
                type: string;
                options: {
                    Primary: string;
                    'Primary (medium)': string;
                    'Primary (light)': string;
                    Accent: string;
                    'Accent (medium)': string;
                    'Accent (light)': string;
                    Facebook: string;
                    Twitter: string;
                    YouTube: string;
                    Black: string;
                    White: string;
                };
            };
        };
        circleBorderWidth: {
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: {
                type: string;
                min: number;
            };
        };
        circleBorderColor: {
            description: string;
            table: {
                category: string;
            };
            type: {
                name: string;
            };
            control: {
                type: string;
                options: {
                    Primary: string;
                    'Primary (medium)': string;
                    'Primary (light)': string;
                    Accent: string;
                    'Accent (medium)': string;
                    'Accent (light)': string;
                    Facebook: string;
                    Twitter: string;
                    YouTube: string;
                    Black: string;
                    White: string;
                };
            };
        };
        'circle-diameter': {
            table: {
                disable: boolean;
            };
        };
        'circle-fill-color': {
            table: {
                disable: boolean;
            };
        };
        'circle-border-width': {
            table: {
                disable: boolean;
            };
        };
        'circle-border-color': {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Icon.stories.d.ts.map