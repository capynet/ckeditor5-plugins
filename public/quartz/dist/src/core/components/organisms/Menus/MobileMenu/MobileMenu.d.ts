import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class MobileMenu extends Component {
    backLabel?: string | undefined;
    expandA11yLabel?: string | undefined;
    static get styles(): CSSResult[];
    constructor();
    firstUpdated(): void;
    private _attachEventListenerToLastChildren;
    private _attachEventListenerToFirstChildren;
    private _expandTemplate;
    private _backTemplate;
    private _appendTemplatesAttachListeners;
    private _calculateAndSetMenuHeight;
    private _openSubmenu;
    private _closeSubmenu;
    private _resetTabIndexesForAllElements;
    private _setTabIndexForCurrentPanel;
    private _onKeydown;
    private _onKeydownLastChild;
    private _onKeydownFirstChild;
    private _clickItem;
    private _openSubMenuOrNavigateDown;
    private _navigateDown;
    private _navigateUp;
    private _navigateTopOrBottom;
    private _closeSubMenuOrNavigateUp;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-mobile-menu': MobileMenu;
    }
}
//# sourceMappingURL=MobileMenu.d.ts.map