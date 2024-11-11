import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Slide extends Component {
    variant?: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-slide': Slide;
    }
}
//# sourceMappingURL=Slide.d.ts.map