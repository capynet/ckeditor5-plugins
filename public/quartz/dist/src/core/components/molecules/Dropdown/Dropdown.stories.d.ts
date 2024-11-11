import { Story } from '@storybook/web-components';
import './Dropdown';
declare type DropdownProps = {
    slotDefault?: string;
    slotOpener?: string;
    slotCloser?: string;
    open?: boolean;
    full?: boolean;
    inPlace?: boolean;
    position?: 'bottom' | 'top';
};
export declare const Template: Story<DropdownProps>;
export declare const Playground: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/web-components").WebComponentsFramework, DropdownProps>;
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
        slotDefault: {
            name: string;
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: string;
        };
        slotOpener: {
            name: string;
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: string;
        };
        slotCloser: {
            name: string;
            description: string;
            table: {
                category: string;
            };
            type: {
                summary: string;
            };
            control: string;
        };
        expanded: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        position: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: {
                type: string;
                options: string[];
                defaultValue: string;
            };
        };
        full: {
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
        inPlace: {
            name: string;
            table: {
                category: string;
            };
            description: string;
            type: {
                summary: string;
            };
            control: string;
        };
    };
};
export default _default;
//# sourceMappingURL=Dropdown.stories.d.ts.map