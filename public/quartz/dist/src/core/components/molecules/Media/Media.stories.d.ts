import { Story } from '@storybook/web-components';
import './Media';
declare type MediaProps = {
    variant?: string;
    full?: boolean;
    hasCaption?: boolean;
    mode?: string;
    slotCaption?: string;
    slotMedia?: string;
    slotExpandedImage?: string;
    expandable?: boolean;
    remote?: boolean;
};
export declare const Template: Story<MediaProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, MediaProps>;
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
        slotCaption: {
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: string;
        };
        slotMedia: {
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
        hasCaption: {
            name: string;
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
    };
};
export default _default;
//# sourceMappingURL=Media.stories.d.ts.map