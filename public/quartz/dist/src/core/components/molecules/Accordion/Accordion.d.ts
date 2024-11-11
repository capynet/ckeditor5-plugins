import { PropertyValues } from '@lit/reactive-element/reactive-element.d';
import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
declare type expandInvokerType = (element: HTMLElement) => void;
declare type collapseInvokerType = (element: HTMLElement) => void;
declare type expandContentType = (element: HTMLElement) => void;
declare type collapseContentType = (element: HTMLElement) => void;
declare const expandInvoker: expandInvokerType;
declare const collapseInvoker: collapseInvokerType;
declare const expandContent: expandContentType;
declare const collapseContent: collapseContentType;
declare class Accordion extends Component {
    private _expanded;
    set expanded(value: Array<number>);
    get expanded(): Array<number>;
    private _focusedIndex;
    set focusedIndex(value: number);
    get focusedIndex(): number;
    singleExpand?: boolean | undefined;
    private _store;
    _invokerSlot: Element;
    _invokers: Array<HTMLElement>;
    _contents: Array<HTMLElement>;
    static get styles(): CSSResult[];
    firstUpdated(changedProperties: PropertyValues): void;
    private _updateHeight;
    private _setupResizeListener;
    private _setupParts;
    private _setupStore;
    private _cleanStore;
    private _createInvokerClickHandler;
    private _handleInvokerKeydown;
    private _pairCount;
    private _updateFocused;
    private _updateExpanded;
    private _toggleExpanded;
    render(): TemplateResult;
}
export { collapseContent, collapseInvoker, expandContent, expandInvoker };
declare global {
    interface HTMLElementTagNameMap {
        'qz-accordion': Accordion;
    }
}
//# sourceMappingURL=Accordion.d.ts.map