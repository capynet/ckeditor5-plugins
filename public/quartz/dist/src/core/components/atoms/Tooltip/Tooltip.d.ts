import { CSSResult, TemplateResult, PropertyValueMap } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Tooltip extends Component {
    open: boolean;
    position: string;
    behavior: string;
    bgColor: string;
    static get styles(): CSSResult[];
    private handleScreenOverflows;
    private handleOpen;
    private handleClose;
    private setupTrigger;
    firstUpdated(): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult;
}
//# sourceMappingURL=Tooltip.d.ts.map