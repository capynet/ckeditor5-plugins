import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Panel extends Component {
    closer: boolean;
    grid?: boolean;
    static get styles(): CSSResult[];
    private _closePanel;
    private _closeTemplate;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-panel': Panel;
    }
}
//# sourceMappingURL=Panel.d.ts.map