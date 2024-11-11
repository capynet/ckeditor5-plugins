import { TemplateResult, CSSResult, PropertyValueMap } from 'lit';
import { Component } from '@/core/components/Component';
export declare class DropdownWrapper extends Component {
    loading?: boolean;
    columns?: number;
    orientation?: 'horizontal' | 'vertical';
    mode?: 'grid' | 'list';
    label?: string;
    showLabel?: boolean;
    switchable?: boolean;
    resettable?: boolean;
    resetText?: string;
    noResultsText?: string;
    loadingText?: string;
    static get styles(): CSSResult[];
    get columnsClass(): string;
    private onModeSwitch;
    private onReset;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-dropdown-wrapper': DropdownWrapper;
    }
}
//# sourceMappingURL=DropdownWrapper.d.ts.map