import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
declare class AutocompleteSuggestion extends Component {
    text?: '';
    snippet?: '';
    static get styles(): CSSResult[];
    private clickHandler;
    focus(options?: FocusOptions | undefined): void;
    private keyDownHandler;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-autocomplete-suggestion': AutocompleteSuggestion;
    }
}
export {};
//# sourceMappingURL=suggestion.d.ts.map