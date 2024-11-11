import { Story } from '@storybook/web-components';
import './Card';
declare type CardProps = {
    animateBrighter: boolean;
    animateDimmer: boolean;
    animateExpand: boolean;
    animateUp: boolean;
    animateZoom: boolean;
    variant: string;
    label: string;
    date: string;
    slotMedia: string;
    slotCategory: string;
    slotDefault: string;
    slotAction: string;
    hasAction: boolean;
    orientation: string;
};
export declare const Template: Story<CardProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, CardProps>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    parameters: {
        controls: {
            sort: string;
        };
        design: {
            type: string;
            url: string;
        };
    };
    argTypes: {
        animateBrighter: {
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
        animateDimmer: {
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
        animateExpand: {
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
        animateUp: {
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
        animateZoom: {
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
        date: {
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
        hasAction: {
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
        'has-action': {
            table: {
                disable: boolean;
            };
        };
        label: {
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
        variant: {
            control: {
                type: string;
                options: {
                    Default: undefined;
                    'No image': string;
                    'Full image': string;
                    Compact: string;
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
        orientation: {
            control: {
                type: string;
                options: {
                    Default: undefined;
                    Horizontal: string;
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
        slotAction: {
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
        slotMedia: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Card.stories.d.ts.map