import { Story } from '@storybook/web-components';
import './Tabs';
declare type TabsProps = {
    vertical?: boolean;
    slotDefault?: string;
};
export declare const Template: Story<TabsProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, TabsProps>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    parameters: {
        selectedPanel: string;
        paddings: {
            disable: boolean;
        };
        design: {
            type: string;
            url: string;
        };
    };
    argTypes: {
        vertical: {
            control: {
                type: string;
            };
            description: string;
            name: string;
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
//# sourceMappingURL=Tabs.stories.d.ts.map