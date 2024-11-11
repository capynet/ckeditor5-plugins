import 'lazysizes';
import { TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Lazy extends Component {
    firstUpdated(): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-lazy': Lazy;
    }
}
//# sourceMappingURL=Lazy.d.ts.map