import { Story } from '@storybook/web-components';
import './HeadingGroup';
declare type HeadingGroupArgsType = {
    align?: string;
    appearance?: string;
    level?: string;
    slotDefault?: string;
    slotKicker?: string;
    slotSubhead?: string;
};
export declare const Template: Story<HeadingGroupArgsType>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, HeadingGroupArgsType>;
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
        align: {
            control: {
                type: string;
                options: {
                    Left: string;
                    Center: string;
                    Right: string;
                };
            };
            description: string;
            name: string;
            parameters: {
                controls: {
                    sort: string;
                };
            };
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
        };
        appearance: {
            control: {
                type: string;
                options: {
                    Default: string;
                    H1: string;
                    H2: string;
                    H3: string;
                    H4: string;
                    H5: string;
                    H6: string;
                    Text: string;
                };
            };
            description: string;
            name: string;
            parameters: {
                controls: {
                    sort: string;
                };
            };
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
        };
        level: {
            control: {
                type: string;
                options: {
                    H1: string;
                    H2: string;
                    H3: string;
                    H4: string;
                    H5: string;
                    H6: string;
                };
            };
            description: string;
            name: string;
            parameters: {
                controls: {
                    sort: string;
                };
            };
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
            parameters: {
                controls: {
                    sort: string;
                };
            };
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
        };
        slotKicker: {
            control: {
                type: string;
            };
            description: string;
            name: string;
            parameters: {
                controls: {
                    sort: string;
                };
            };
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
        };
        slotSubhead: {
            control: {
                type: string;
            };
            description: string;
            name: string;
            parameters: {
                controls: {
                    sort: string;
                };
            };
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
//# sourceMappingURL=HeadingGroup.stories.d.ts.map