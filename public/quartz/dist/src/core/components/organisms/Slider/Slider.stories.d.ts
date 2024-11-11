import { Story } from '@storybook/web-components';
import './Slider';
declare type SliderProps = {
    slotDefault?: string;
    hideControls?: boolean;
    hidePager?: boolean;
    variant?: string;
};
export declare const Template: Story<SliderProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, SliderProps>;
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
        variant: {
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
                    Plasma: string;
                };
            };
        };
        hideControls: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: {
                type: string;
            };
        };
        hidePager: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: {
                type: string;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Slider.stories.d.ts.map