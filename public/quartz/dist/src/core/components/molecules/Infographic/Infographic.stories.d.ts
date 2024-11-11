import { Story } from '@storybook/web-components';
import './Infographic';
declare type dataObjectProps = {
    image: string;
    width: number;
    points: {
        y: number;
        x: number;
        title: string;
        description: string[];
    }[];
};
declare type InfographicProps = {
    slotMedia?: string;
    data?: dataObjectProps;
    active?: boolean;
};
export declare const Template: Story<InfographicProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, InfographicProps>;
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
        slotMedia: {
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: string;
        };
        data: {
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
        };
        image: {
            description: string;
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
//# sourceMappingURL=Infographic.stories.d.ts.map