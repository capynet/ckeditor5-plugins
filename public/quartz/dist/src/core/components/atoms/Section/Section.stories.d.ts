import { Story } from '@storybook/web-components';
import './Section';
declare type SectionArgs = {
    slotDefault: string;
    width: string;
    spacing: string;
    contentPadding: string;
    theme: string;
    unpublished: boolean;
};
declare type NoParentArgs = {
    slotDefault: string;
};
export declare const Template: Story<SectionArgs>;
export declare const NoParentTemplate: Story<NoParentArgs>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, SectionArgs>;
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
            control: string;
        };
        width: {
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
                    Default: undefined;
                    Narrow: string;
                    Wide: string;
                    Full: string;
                };
            };
        };
        spacing: {
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
                    None: undefined;
                    'top-small only': string;
                    'bottom-small only': string;
                    'top-large only': string;
                    'bottom-large only': string;
                    'top-small bottom-small': string;
                    'top-large bottom-large': string;
                    'top-small bottom-large': string;
                    'top-large bottom-small': string;
                };
            };
        };
        contentPadding: {
            name: string;
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
                    'Inner (default)': undefined;
                    None: string;
                    Outer: string;
                };
            };
        };
        theme: {
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
                    None: undefined;
                    Light: string;
                    Dark: string;
                };
            };
        };
        'content-padding': {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Section.stories.d.ts.map