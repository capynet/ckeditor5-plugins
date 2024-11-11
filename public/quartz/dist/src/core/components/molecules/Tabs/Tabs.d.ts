import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
declare class Tabs extends Component {
    private _selectedIndex;
    set selectedIndex(value: number);
    get selectedIndex(): number;
    vertical?: boolean;
    private _store;
    static get styles(): CSSResult[];
    private _handleSlotChange;
    private _setupStore;
    private _cleanStore;
    private _handleButtonKeyup;
    private _setSelectedIndexWithFocus;
    private _pairCount;
    private _updateSelected;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-tabs': Tabs;
    }
}
export {};
//# sourceMappingURL=Tabs.d.ts.map