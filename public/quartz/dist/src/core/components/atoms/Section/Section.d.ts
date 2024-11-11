import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Section extends Component {
    contentPadding?: string;
    spacing?: string;
    theme?: string;
    width?: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-section': Section;
    }
}
//# sourceMappingURL=Section.d.ts.map