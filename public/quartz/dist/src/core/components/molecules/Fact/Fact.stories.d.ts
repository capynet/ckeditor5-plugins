import { Story } from '@storybook/web-components';
import './Fact.ts';
declare type FactProps = {
    background: boolean;
    decimals: string;
    number: string;
    numberDesc: string;
    numberPrefix: string;
    numberSuffix: string;
    numberTitle: string;
    radixPoint: string;
    slotAction: string;
    slotImage: string[];
    small: boolean;
    text: string;
};
export declare const Template: Story<FactProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, FactProps>;
declare const _default: {
    title: string;
    component: string;
    excludeStories: RegExp;
    parameters: {
        controls: {
            hideNoControlsWarning: boolean;
            sort: string;
        };
        design: {
            type: string;
            url: string;
        };
    };
    argTypes: {
        background: {
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
        decimals: {
            control: {
                type: string;
                min: number;
                step: number;
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
        number: {
            control: {
                type: string;
                min: number;
                step: number;
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
        numberDesc: {
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
        'number-desc': {
            table: {
                disable: boolean;
            };
        };
        numberPrefix: {
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
        'number-prefix': {
            table: {
                disable: boolean;
            };
        };
        numberSuffix: {
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
        'number-suffix': {
            table: {
                disable: boolean;
            };
        };
        numberTitle: {
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
        'number-title': {
            table: {
                disable: boolean;
            };
        };
        radixPoint: {
            control: {
                type: string;
                options: {
                    Dot: string;
                    Comma: string;
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
        slotAction: {
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
        slotImage: {
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
        small: {
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
//# sourceMappingURL=Fact.stories.d.ts.map