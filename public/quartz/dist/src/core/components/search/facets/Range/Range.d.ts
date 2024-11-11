import { CSSResult, TemplateResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Range extends Component {
    single: boolean;
    step: number;
    lower: number;
    activeLower: number;
    lowerLabel: string | undefined;
    higher: number;
    activeHigher: number;
    higherLabel: string | undefined;
    unit: string;
    private lowerRange;
    private higherRange;
    private lowerManualInput;
    private higherManualInput;
    static get styles(): CSSResult[];
    private numberOfSteps;
    private stepValues;
    private stepsBetweenValues;
    private fillTrack;
    private getClosestStep;
    private setValue;
    private preventInconsistentStates;
    private throwChangeEvent;
    private handleChange;
    private debouncedManualChange;
    private handleManualChange;
    private observeParent;
    private updateInputs;
    protected firstUpdated(): void;
    protected updated(_changedProperties: Map<string | number | symbol, unknown>): void;
    render(): TemplateResult;
}
//# sourceMappingURL=Range.d.ts.map