import { PropertyValues } from '@lit/reactive-element/reactive-element.d';
import { TemplateResult, CSSResult } from 'lit';
import '@/core/components/molecules/Slide/Slide';
import { SwipeComponent, directionType } from '@/core/components/SwipeComponent';
declare type onSwipeType = (value: {
    isEnd: boolean;
    direction: directionType;
    distX: number;
}) => void;
export declare class Slider extends SwipeComponent {
    index: number;
    hideArrows?: boolean;
    hidePager?: boolean;
    variant?: string;
    private _translateBeforeSwipe?;
    static get styles(): CSSResult[];
    update(changedProperties: PropertyValues): Promise<void>;
    onSwipe: onSwipeType;
    private _changeTranslateOfAllChildren;
    private _getCurrentTranslateValue;
    private _getClientWidth;
    private _setDisabled;
    /** Advance to the next story card if possible **/
    private _next;
    /** Go back to the previous story card if possible **/
    private _previous;
    private _getButtonSize;
    private _arrowsTemplate;
    private _pagerTemplate;
    private _navigationTemplate;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-slider': Slider;
    }
}
export {};
//# sourceMappingURL=Slider.d.ts.map