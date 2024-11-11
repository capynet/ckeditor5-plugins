import { CSSResult, TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Pager extends Component {
    currentPage: number;
    pages: number;
    static get styles(): CSSResult[];
    private clickHandler;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-pager': Pager;
    }
}
//# sourceMappingURL=Pager.d.ts.map