import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class SearchRefresh extends Component {
    label: string;
    static get styles(): CSSResult[];
    refresh(): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-search-refresh': SearchRefresh;
    }
}
//# sourceMappingURL=Refresh.d.ts.map