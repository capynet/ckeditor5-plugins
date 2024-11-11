import { Story } from '@storybook/web-components';
import './Box';
declare type BoxArgsType = {
    slotDefault?: string;
    width?: string;
    theme?: string;
    expandable?: boolean;
};
export declare const Template: Story<BoxArgsType>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, BoxArgsType>;
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
                    Quarter: string;
                    Third: string;
                    Half: string;
                    'Two-thirds': string;
                    'Three-quarters': string;
                    Full: string;
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
        expandable: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        ratio: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Box.stories.d.ts.map