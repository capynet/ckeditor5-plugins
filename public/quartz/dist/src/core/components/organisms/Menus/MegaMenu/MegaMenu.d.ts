import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class MegaMenu extends Component {
    expandA11yLabel?: string | undefined;
    static get styles(): CSSResult[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    private _expandTemplateButton;
    private _templateLink;
    private _appendTemplatesAttachListeners;
    private _handleFocusChange;
    private _resetExpanded;
    private _toggleSubmenu;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-mega-menu': MegaMenu;
    }
}
//# sourceMappingURL=MegaMenu.d.ts.map