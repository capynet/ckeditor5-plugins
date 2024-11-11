import { Story } from '@storybook/web-components';
import './MediaText';
declare type MediaTextProps = {
    mediaAlign?: string;
    slotMedia?: string;
    slotDefault?: string;
};
export declare const Template: Story<MediaTextProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, MediaTextProps>;
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
        slotMedia: {
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
        slotDefault: {
            name: string;
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
                detail: string;
            };
            control: {
                type: string;
            };
        };
        mediaAlign: {
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
                    Left: undefined;
                    Right: string;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=MediaText.stories.d.ts.map