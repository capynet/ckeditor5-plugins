import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Wrapper extends Component {
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
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-wrapper': Wrapper;
    }
}
//# sourceMappingURL=Wrapper.d.ts.map