import { PropertyValues } from '@lit/reactive-element/reactive-element.d';
import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Icon extends Component {
    name?: string;
    color: string;
    width?: number;
    height?: number;
    hover: boolean;
    circle?: boolean;
    circleDiameter?: number;
    circleFillColor?: string;
    circleBorderWidth?: number;
    circleBorderColor?: string;
    private _svgData;
    static get styles(): CSSResult[];
    firstUpdated(_changedProperties: PropertyValues): void;
    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null): void;
    private readonly _importIcon;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-icon': Icon;
    }
}
//# sourceMappingURL=Icon.d.ts.map