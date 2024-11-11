import { CSSResult, TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class HeadingGroup extends Component {
    align: string;
    level: string;
    appearance: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-heading-group': HeadingGroup;
    }
}
//# sourceMappingURL=HeadingGroup.d.ts.map