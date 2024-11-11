import { Component } from './Component';
export declare type directionType = 'LEFT' | 'RIGHT' | 'UP' | 'DOWN' | undefined;
declare type onSwipeType = (value: {
    isEnd: boolean;
    direction: directionType;
    distX: number;
    distY: number;
}) => void;
export declare class SwipeComponent extends Component {
    _startX: number;
    _startY: number;
    constructor();
    private _recordTouchStartValues;
    private _detectSwipeDirection;
    onSwipe: onSwipeType;
}
export {};
//# sourceMappingURL=SwipeComponent.d.ts.map