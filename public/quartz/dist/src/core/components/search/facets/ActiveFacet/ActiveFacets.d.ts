import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class ActiveFacet extends Component {
    facetKey: string;
    value: string | undefined;
    label: string | undefined;
    static get styles(): CSSResult[];
    private onClick;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-active-facet': ActiveFacet;
    }
}
//# sourceMappingURL=ActiveFacets.d.ts.map