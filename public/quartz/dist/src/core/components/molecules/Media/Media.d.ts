import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Media extends Component {
    full?: boolean;
    hasCaption?: boolean | undefined;
    variant?: string;
    expandable?: boolean;
    private _expandPanelEl;
    private _expandPanelImgEl;
    private _zoomOutEl;
    private _expandedImgEl;
    static get styles(): CSSResult[];
    private _expandImage;
    private _closeImage;
    private _zoomImage;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-media': Media;
    }
}
//# sourceMappingURL=Media.d.ts.map