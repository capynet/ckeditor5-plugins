import { CSSResult, TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Headline extends Component {
    align: string;
    level: string;
    appearance: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-headline': Headline;
    }
}
//# sourceMappingURL=Headline.d.ts.map