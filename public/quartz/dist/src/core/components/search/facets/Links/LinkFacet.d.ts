import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class LinkFacet extends Component {
    facetKey?: string;
    active?: boolean;
    count?: number;
    showCount?: boolean;
    label?: string;
    static get styles(): CSSResult[];
    private checkHandler;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-link-facet': LinkFacet;
    }
}
//# sourceMappingURL=LinkFacet.d.ts.map