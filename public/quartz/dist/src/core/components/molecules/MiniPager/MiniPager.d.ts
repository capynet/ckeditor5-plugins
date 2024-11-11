import { CSSResult, TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class MiniPager extends Component {
    currentPage: number;
    pages: number;
    static get styles(): CSSResult[];
    private manualChangeActive;
    private input?;
    private clickHandler;
    private currentPageClickHandler;
    private blurHandler;
    private enterHandler;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-mini-pager': MiniPager;
    }
}
//# sourceMappingURL=MiniPager.d.ts.map