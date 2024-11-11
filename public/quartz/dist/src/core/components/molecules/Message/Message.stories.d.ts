import { Story } from '@storybook/web-components';
import './Message';
declare type MessageProps = {
    accent?: boolean;
    cancelClose?: boolean;
    countdown?: boolean;
    icon?: boolean;
    lifespan?: number;
    lifespanReadingTime?: boolean;
    mode?: string;
    progress?: boolean;
    slotCountdown?: string;
    slotDefault?: string;
};
export declare const Template: Story<MessageProps>;
export declare const NotifyTemplate: Story<MessageProps>;
export declare const StackTemplate: Story<MessageProps>;
export declare const StripeTemplate: Story<MessageProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, MessageProps>;
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
        accent: {
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
        cancelClose: {
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
        'cancel-close': {
            table: {
                disable: boolean;
            };
        };
        collapsed: {
            table: {
                disable: boolean;
            };
        };
        countdown: {
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
        icon: {
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
        invisible: {
            table: {
                disable: boolean;
            };
        };
        lifespan: {
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
        lifespanReadingTime: {
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
        'lifespan-reading-time': {
            table: {
                disable: boolean;
            };
        };
        mode: {
            control: {
                type: string;
                options: {
                    Dark: string;
                    Light: string;
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
        progress: {
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
        slotCountdown: {
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
        slotDefault: {
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
        status: {
            table: {
                disable: boolean;
            };
        };
        timeout: {
            table: {
                disable: boolean;
            };
        };
        timer: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Message.stories.d.ts.map