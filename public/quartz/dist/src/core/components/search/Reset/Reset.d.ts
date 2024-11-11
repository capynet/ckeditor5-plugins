import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class SearchReset extends Component {
    label: string;
    static get styles(): CSSResult[];
    refresh(): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-search-reset': SearchReset;
    }
}
//# sourceMappingURL=Reset.d.ts.map