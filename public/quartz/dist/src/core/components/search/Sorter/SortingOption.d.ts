import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class SortingOption extends Component {
    active: boolean;
    sortBy: string;
    orderBy: string;
    label: string;
    static get styles(): CSSResult[];
    onClick: () => void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-sorting-option': SortingOption;
    }
}
//# sourceMappingURL=SortingOption.d.ts.map