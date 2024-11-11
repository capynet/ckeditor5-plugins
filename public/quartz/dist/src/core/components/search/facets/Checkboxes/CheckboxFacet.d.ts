import { TemplateResult, CSSResult, PropertyValueMap } from 'lit';
import { Component } from '@/core/components/Component';
export declare class CheckboxFacet extends Component {
    facetKey?: string;
    active?: boolean;
    count?: number;
    showCount?: boolean;
    label?: string;
    static get styles(): CSSResult[];
    private checkHandler;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-checkbox-facet': CheckboxFacet;
    }
}
//# sourceMappingURL=CheckboxFacet.d.ts.map