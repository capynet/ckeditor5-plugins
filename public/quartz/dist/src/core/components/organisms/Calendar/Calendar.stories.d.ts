import { Story } from '@storybook/web-components';
import './Calendar';
declare type CalendarProps = {
    direction?: 'ltr' | 'rtl';
    entries: string[];
    locale?: string;
    mode?: 'dark' | 'light';
    weekStartDay?: 'monday' | 'sunday';
};
export declare const Template: Story<CalendarProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, CalendarProps>;
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
        activeDates: {
            table: {
                disable: boolean;
            };
        };
        'active-dates': {
            table: {
                disable: boolean;
            };
        };
        direction: {
            control: {
                type: string;
                options: {
                    'Left-to-right': string;
                    'Right-to-left': string;
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
        entries: {
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
        locale: {
            control: {
                type: string;
                options: {
                    English: string;
                    German: string;
                    Icelandic: string;
                    Spanish: string;
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
        weekStartDay: {
            control: {
                type: string;
                options: {
                    Monday: string;
                    Sunday: string;
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
        'week-start-day': {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=Calendar.stories.d.ts.map