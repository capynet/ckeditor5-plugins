import { CSSResult, TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Divider extends Component {
    color: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-divider': Divider;
    }
}
//# sourceMappingURL=Divider.d.ts.map