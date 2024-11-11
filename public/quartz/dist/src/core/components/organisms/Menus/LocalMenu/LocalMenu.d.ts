import { CSSResult, TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
declare type _linkType = {
    id: string;
    title: string;
    url: string;
}[];
export declare class LocalMenu extends Component {
    links: _linkType;
    private _offset;
    private _scrollPosition;
    private _classes;
    private _localMenu;
    private _observer;
    private _targets;
    static get styles(): CSSResult[];
    connectedCallback(): void;
    firstUpdated(): void;
    private getItemSiblings;
    private _queryLocalMenuItem;
    private _handleScrollToAnchor;
    private _observe;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-local-menu': LocalMenu;
    }
}
export {};
//# sourceMappingURL=LocalMenu.d.ts.map