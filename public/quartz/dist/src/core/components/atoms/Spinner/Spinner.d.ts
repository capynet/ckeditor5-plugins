import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Spinner extends Component {
    size?: string;
    variant?: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-spinner': Spinner;
    }
}
//# sourceMappingURL=Spinner.d.ts.map