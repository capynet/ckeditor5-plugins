import { Story } from '@storybook/web-components';
import './TwoColumn';
declare type TwoColumnProps = {
    slotCol1: string;
    slotCol2: string;
    ratio: string;
};
export declare const Template: Story<TwoColumnProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, TwoColumnProps>;
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
        slotCol1: {
            description: string;
            table: {
                category: string;
            };
            control: string;
        };
        slotCol2: {
            description: string;
            table: {
                category: string;
            };
            control: string;
        };
        ratio: {
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
                    '4_8': string;
                    '5_7': string;
                    '6_6': string;
                    '7_5': string;
                    '8_4': string;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=TwoColumn.stories.d.ts.map