/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import {ButtonView, createLabeledInputText, icons, LabeledFieldView, submitHandler, View, type Plugin} from 'ckeditor5';

export default class FormView extends View {
    public textInputView
    public tooltipInputView
    public saveButtonView
    public cancelButtonView
    public childViews

    constructor(plugin: Plugin) {
        super(plugin.editor.locale);

        this.textInputView = this._createInput('Text');
        this.tooltipInputView = this._createInput('Tooltip');

        this.saveButtonView = this._createButton('Save', icons.check, 'ck-button-save');
        this.saveButtonView.type = 'submit';

        this.cancelButtonView = this._createButton('Cancel', icons.cancel, 'ck-button-cancel');

        // Delegate ButtonView#execute to FormView#cancel
        this.cancelButtonView.delegate('execute').to(this, 'cancel');

        this.childViews = this.createCollection([
            this.textInputView,
            this.tooltipInputView,
            this.saveButtonView,
            this.cancelButtonView
        ]);

        this.setTemplate({
            tag: 'form',
            attributes: {
                class: ['ck', 'ck-abbr-form'],
                tabindex: '-1'
            },
            children: this.childViews
        });
    }

    render() {
        super.render();

        // Submit the form when the user clicked the save button or pressed enter in the input.
        submitHandler({
            view: this
        });
    }

    focus() {
        this.childViews.first.focus();
    }

    _createInput(label) {
        const labeledInput = new LabeledFieldView(this.locale, createLabeledInputText);

        labeledInput.label = label;

        return labeledInput;
    }

    _createButton(label, icon, className) {
        const button = new ButtonView();

        button.set({
            label,
            icon,
            tooltip: true,
            class: className
        });

        return button;
    }
}

