import { Story } from '@storybook/web-components';
import './Spinner';
declare type SpinnerProps = {
    size: string;
    fixed: boolean;
    variant: string;
};
export declare const Template: Story<SpinnerProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, SpinnerProps>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    parameters: {
        controls: {
            sort: string;
        };
        design: {
            type: string;
            url: string;
        };
    };
    argTypes: {
        size: {
            control: {
                type: string;
                options: {
                    Default: undefined;
                    Small: string;
                    Large: string;
                };
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
//# sourceMappingURL=Spinner.stories.d.ts.map