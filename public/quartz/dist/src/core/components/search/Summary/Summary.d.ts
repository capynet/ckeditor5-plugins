import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Summary extends Component {
    loading?: boolean;
    nOfResults?: number;
    resultText?: string;
    timeTaken: number;
    timeUnit?: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-summary': Summary;
    }
}
//# sourceMappingURL=Summary.d.ts.map