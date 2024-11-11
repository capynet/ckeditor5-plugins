import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class AccordionWrapper extends Component {
    loading?: boolean;
    label?: string;
    showLabel?: boolean;
    resettable?: boolean;
    resetText?: string;
    noResultsText?: string;
    loadingText?: string;
    static get styles(): CSSResult[];
    private onReset;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-accordion-wrapper': AccordionWrapper;
    }
}
//# sourceMappingURL=AccordionWrapper.d.ts.map