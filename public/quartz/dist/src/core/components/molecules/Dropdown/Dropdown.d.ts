import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Dropdown extends Component {
    open: boolean;
    position: string;
    behavior: string;
    bgColor: string;
    full: boolean;
    inPlace: boolean;
    static get styles(): CSSResult[];
    private handleScreenOverflows;
    private handleOpen;
    private handleClose;
    private toggleOpen;
    private setupTrigger;
    firstUpdated(): void;
    protected updated(_changedProperties: Map<string | number | symbol, unknown>): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-dropdown': Dropdown;
    }
}
//# sourceMappingURL=Dropdown.d.ts.map