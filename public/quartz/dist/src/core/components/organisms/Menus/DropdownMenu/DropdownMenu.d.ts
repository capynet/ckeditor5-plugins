import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class DropdownMenu extends Component {
    expandA11yLabel: string;
    static get styles(): CSSResult[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    private _expandedArrowTemplate;
    private _appendTemplatesAttachListeners;
    private _handleMouseEnter;
    private _handleFocusIn;
    private _handleFocusOut;
    private _handleTouchStart;
    private _handleFocusChange;
    private _resetExpanded;
    private _toggleSubmenu;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-dropdown-menu': DropdownMenu;
    }
}
//# sourceMappingURL=DropdownMenu.d.ts.map