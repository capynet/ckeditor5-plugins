import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Button extends Component {
    disabled: boolean;
    onClick: () => undefined;
    shadowTabindex?: number;
    size?: string;
    social?: string;
    constructor();
    static get styles(): CSSResult[];
    handleClick(event: Event): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-button': Button;
    }
}
//# sourceMappingURL=Button.d.ts.map