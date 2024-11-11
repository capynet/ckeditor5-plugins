import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Card extends Component {
    date?: string;
    hasAction?: boolean | undefined;
    orientation?: string;
    label?: string;
    variant?: string;
    href?: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-card': Card;
    }
}
//# sourceMappingURL=Card.d.ts.map