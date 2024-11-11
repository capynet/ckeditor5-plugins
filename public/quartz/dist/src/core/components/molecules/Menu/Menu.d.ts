import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Menu extends Component {
    variant?: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-menu': Menu;
    }
}
//# sourceMappingURL=Menu.d.ts.map