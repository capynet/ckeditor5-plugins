import { Story } from '@storybook/web-components';
import './Panel';
declare type PanelArgs = {
    slotDefault: string;
};
export declare const Template: Story<PanelArgs>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, PanelArgs>;
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
        closer: {
            table: {
                disable: boolean;
            };
        };
        grid: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Panel.stories.d.ts.map