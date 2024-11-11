import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class TwoColumn extends Component {
    ratio?: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-two-column': TwoColumn;
    }
}
//# sourceMappingURL=TwoColumn.d.ts.map