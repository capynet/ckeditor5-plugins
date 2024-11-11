import { CSSResult, TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Drawer extends Component {
    open: boolean;
    position: string;
    $closer: HTMLInputElement;
    $opener: HTMLInputElement;
    $backdrop: HTMLInputElement;
    static get styles(): CSSResult[];
    firstUpdated(): Promise<void>;
    openDrawer(): void;
    closeDrawer(): void;
    render(): TemplateResult;
}
//# sourceMappingURL=Drawer.d.ts.map