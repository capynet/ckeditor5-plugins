import { CSSResult, TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class LoadMore extends Component {
    /**
     * current displayed amount of items
     */
    private displayed;
    /**
     * total amount of items
     */
    private total;
    private loadMoreText;
    private middleText;
    private unitText;
    static get styles(): CSSResult[];
    get percentage(): string;
    get isDisabled(): boolean;
    private clickHandler;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-load-more': LoadMore;
    }
}
//# sourceMappingURL=LoadMore.d.ts.map