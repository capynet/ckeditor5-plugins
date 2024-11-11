import { Story } from '@storybook/web-components';
import './Link';
declare type LinkArgs = {
    href: string;
    block: boolean;
    split: boolean;
    button: boolean;
    theme: string;
    outline: boolean;
    animated: boolean;
    target: string;
    slotStart: string;
    slotDefault: string;
    slotEnd: string;
};
export declare const Template: Story<LinkArgs>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, LinkArgs>;
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
        href: {
            description: string;
            table: {
                category: string;
            };
            type: {
                name: string;
                required: boolean;
            };
            control: string;
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
                    Default: undefined;
                    light: string;
                };
            };
        };
        block: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        split: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        button: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        outline: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        animated: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        target: {
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
                    _blank: string;
                    _self: string;
                    _parent: string;
                    _top: string;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Link.stories.d.ts.map