import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Message extends Component {
    accent?: boolean;
    cancelClose?: boolean;
    countdown?: boolean;
    icon?: boolean;
    lifespan?: number;
    lifespanReadingTime?: boolean;
    mode?: string;
    progress?: boolean;
    status?: string;
    private _progressElement;
    private _clock?;
    private _collapsed;
    private _invisible;
    private _interval?;
    private _lifespan;
    private _playState?;
    private _readingTime?;
    private _stopped;
    private _timeout?;
    static get styles(): CSSResult[];
    connectedCallback(): void;
    attributeChangedCallback(name: string, old: string | null, value: string | null): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private _calculateReadingTime;
    private _killClock;
    private _prettifyClock;
    private _removeMessage;
    private _resetMessage;
    private _runClock;
    private _startCountdown;
    private _stopCountdown;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-message': Message;
    }
}
//# sourceMappingURL=Message.d.ts.map