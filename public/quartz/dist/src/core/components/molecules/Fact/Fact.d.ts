import { TemplateResult, CSSResult, PropertyValues } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Fact extends Component {
    decimals?: string;
    number?: string;
    numberDesc?: string;
    numberPrefix?: string;
    numberSuffix?: string;
    numberTitle?: string;
    radixPoint?: 'dot' | 'comma';
    private _countUp;
    private countUp;
    static get styles(): CSSResult[];
    private _onIntersection;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-fact': Fact;
    }
}
//# sourceMappingURL=Fact.d.ts.map