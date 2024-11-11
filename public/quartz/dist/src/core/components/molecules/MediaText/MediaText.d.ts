import { TemplateResult, CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class MediaText extends Component {
    mediaAlign?: string;
    static get styles(): CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-media-text': MediaText;
    }
}
//# sourceMappingURL=MediaText.d.ts.map