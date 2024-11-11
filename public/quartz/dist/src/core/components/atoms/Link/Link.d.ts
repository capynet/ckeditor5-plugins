import { CSSResult, TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Link extends Component {
    block: boolean;
    button: boolean;
    href: string;
    outline: boolean;
    split: boolean;
    target: undefined;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-link': Link;
    }
}
//# sourceMappingURL=Link.d.ts.map