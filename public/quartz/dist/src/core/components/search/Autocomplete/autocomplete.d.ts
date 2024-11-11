import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
declare class Autocomplete extends Component {
    speechLang?: string;
    placeholder?: string;
    value?: string;
    autofocus: boolean;
    private _inputEl?;
    private _submitEl?;
    protected _hasSpeechSupport: boolean;
    protected _isRecognizingSpeech: boolean;
    protected _isFocused: boolean;
    protected _hasValue: boolean;
    protected _hasSuggestions: boolean;
    static get styles(): CSSResult[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null): void;
    focus(options?: FocusOptions | undefined): void;
    private _checkHasSuggestions;
    private _onSuggestionClick;
    private _handleClick;
    private _onChange;
    private _onSubmit;
    private _onKeyDown;
    private _setInputValue;
    private _onMicPress;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-autocomplete': Autocomplete;
    }
    interface Window {
        webkitSpeechRecognition: SpeechRecognition;
    }
}
export {};
//# sourceMappingURL=autocomplete.d.ts.map