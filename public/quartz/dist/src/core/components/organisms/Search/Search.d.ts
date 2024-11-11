import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
declare class Search extends Component {
    highlightResult?: boolean;
    matchAllKeywords?: boolean;
    private _elements;
    static get styles(): CSSResult[];
    private _updateElements;
    private _onChange;
    private _filter;
    private _match;
    private _showAndExpand;
    private _hideAndCollapse;
    private _highlight;
    private _cleanHighlights;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-search': Search;
    }
}
export {};
//# sourceMappingURL=Search.d.ts.map