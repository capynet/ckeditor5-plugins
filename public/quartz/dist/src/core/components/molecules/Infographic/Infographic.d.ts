import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
declare type pointType = {
    y: number;
    x: number;
    title: string;
    description: string[];
};
declare type dataType = {
    image?: string;
    width?: number;
    points?: Array<pointType>;
};
export declare class Infographic extends Component {
    data: dataType;
    active?: boolean | undefined;
    private _currentIndex;
    private _ratio;
    private _titleEl;
    private _descriptionEl;
    private _infoEl;
    private _arrowLeftEl;
    private _arrowRightEl;
    static get styles(): CSSResult[];
    firstUpdated(): void;
    private _loadMessage;
    private _increase;
    private _decrease;
    private _calculatePosition;
    private _checkIsMobile;
    private _dotTemplate;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-infographic': Infographic;
    }
}
export {};
//# sourceMappingURL=Infographic.d.ts.map