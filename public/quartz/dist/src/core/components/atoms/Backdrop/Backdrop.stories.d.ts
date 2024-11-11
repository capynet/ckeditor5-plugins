import { Story } from '@storybook/web-components';
import './Backdrop';
declare type BackdropArgsType = {
    color?: string;
};
export declare const Template: Story<BackdropArgsType>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, BackdropArgsType>;
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
        color: {
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
//# sourceMappingURL=Backdrop.stories.d.ts.map