import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class SearchResult extends Component {
    text?: string;
    snippet?: string;
    mode: string;
    categories?: string;
    imageUrl?: string;
    url?: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-search-result': SearchResult;
    }
}
//# sourceMappingURL=SearchResult.d.ts.map