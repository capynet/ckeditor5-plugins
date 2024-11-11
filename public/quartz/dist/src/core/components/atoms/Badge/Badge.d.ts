import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Badge extends Component {
    baseColor: string;
    icon: boolean;
    value: string;
    valueColor: string;
    static get styles(): CSSResult[];
    firstUpdated(): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-badge': Badge;
    }
}
//# sourceMappingURL=Badge.d.ts.map