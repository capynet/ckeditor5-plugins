import { CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class DatePicker extends Component {
    value: string;
    fromValue: string;
    toValue: string;
    operator: 'between' | 'equal' | 'in';
    static get styles(): CSSResult[];
    private onChangeFrom;
    private onChangeTo;
    private onChange;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-date-picker': DatePicker;
    }
}
//# sourceMappingURL=DatePicker.d.ts.map