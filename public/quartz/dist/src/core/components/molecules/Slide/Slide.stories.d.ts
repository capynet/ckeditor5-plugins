import { Story } from '@storybook/web-components';
import './Slide';
declare type SlideProps = {
    variant?: string;
    slotDefault?: string;
    slotMedia?: string;
};
export declare const Template: Story<SlideProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, SlideProps>;
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
        variant: {
            name: string;
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Slide.stories.d.ts.map