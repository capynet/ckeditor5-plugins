import { Story } from '@storybook/web-components';
import './Accordion';
declare type AccordionProps = {
    slotDefault: string;
    singleExpand: boolean;
};
export declare const Template: Story<AccordionProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, AccordionProps>;
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
        slotDefault: {
            name: string;
            description: string;
            table: {
                category: string;
            };
            control: string;
        };
        singleExpand: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        expanded: {
            table: {
                disable: boolean;
            };
        };
        'single-expand': {
            table: {
                disable: boolean;
            };
        };
        'expanded-changed': {
            table: {
                disable: boolean;
            };
        };
        'focused-changed': {
            table: {
                disable: boolean;
            };
        };
        'focused-index': {
            table: {
                disable: boolean;
            };
        };
        focusedIndex: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Accordion.stories.d.ts.map