import { Story } from '@storybook/web-components';
import './Divider';
declare type DividerArgsType = {
    color?: string;
};
export declare const Template: Story<DividerArgsType>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, DividerArgsType>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    parameters: {
        design: {
            type: string;
            url: string;
        };
        controls: {
            hideNoControlsWarning: boolean;
        };
    };
    argTypes: {
        color: {
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
                    'Default (neutral-medium)': undefined;
                    'neutral-light': string;
                    'neutral-dark': string;
                    white: string;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Divider.stories.d.ts.map