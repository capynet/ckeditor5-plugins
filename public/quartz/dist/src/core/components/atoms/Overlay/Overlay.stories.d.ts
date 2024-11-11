import { Story } from '@storybook/web-components';
import '../Section/Section';
import './Overlay';
declare type OverlayArgs = {
    slotOpener: string;
    slotCloser: string;
    slotDefault: string;
    open: boolean;
    offsetTop: string;
    height: string;
    backdropColor: string;
};
export declare const Template: Story<OverlayArgs>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, OverlayArgs>;
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
        slotDefault: {
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
        slotOpener: {
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
        slotCloser: {
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
        open: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        offsetTop: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        height: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        backdropColor: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        'offset-top': {
            table: {
                disable: boolean;
            };
        };
        offsetTopValue: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Overlay.stories.d.ts.map