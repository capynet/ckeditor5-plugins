import { CSSResult, TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Backdrop extends Component {
    color: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-backdrop': Backdrop;
    }
}
//# sourceMappingURL=Backdrop.d.ts.map