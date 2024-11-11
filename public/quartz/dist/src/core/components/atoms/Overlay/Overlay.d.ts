import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Overlay extends Component {
    backdropColor?: string;
    height?: string;
    offsetTopValue?: number;
    open: boolean;
    _backdropEl?: HTMLElement;
    _openChildren: Array<Node>;
    _closerChildren: Array<Node>;
    static get styles(): CSSResult[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    private _initialize;
    private _openOverlay;
    private _closeOverlay;
    private _handleKeyup;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-overlay': Overlay;
    }
}
//# sourceMappingURL=Overlay.d.ts.map