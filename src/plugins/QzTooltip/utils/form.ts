import {
    icons,
    type Plugin,
    Collection,
    View,
    submitHandler,
    LabeledFieldView,
    createLabeledTextarea,
    ButtonView,
    createDropdown,
    ViewModel,
    addListToDropdown,
    ListDropdownItemDefinition
} from '@ckeditor-imports/index'
import pluginConf from "../PluginConf"
import styles from '../style.module.css'

export default class FormView extends View {
    public tooltipTextInputView
    public positionInputView
    public saveButtonView
    public cancelButtonView
    public currentPosition = pluginConf.defaultPosition
    public positionValues = {
        'top': 'Top',
        'bottom': 'Bottom',
    }

    constructor(plugin: Plugin) {
        super(plugin.editor.locale)

        const tooltipTextareaWidget = new LabeledFieldView(this.locale, createLabeledTextarea)
        tooltipTextareaWidget.label = 'Tooltip content'
        this.tooltipTextInputView = tooltipTextareaWidget

        const dropdownView = createDropdown(plugin.editor.locale)

        dropdownView.buttonView.set({
            withText: true,
            label: this.positionValues[this.currentPosition],
            tooltip: true,
        })

        const items = new Collection()

        items.add({
            type: 'button',
            model: new ViewModel({
                withText: true,
                label: 'Top',
                value: 'top',
            })
        })

        items.add({
            type: 'button',
            model: new ViewModel({
                withText: true,
                label: 'Bottom',
                value: 'bottom',
            })
        })

        dropdownView.on('execute', evt => {
            const selectedItem = evt.source as { value: string }
            this.currentPosition = selectedItem.value

            dropdownView.buttonView.set({
                label: this.positionValues[selectedItem.value]
            })
        })

        addListToDropdown(dropdownView, items as Collection<ListDropdownItemDefinition>)
        this.positionInputView = dropdownView


        this.saveButtonView = this._createButton('Save', icons.check, 'ck-button-save')
        this.saveButtonView.type = 'submit'

        this.cancelButtonView = this._createButton('Cancel', icons.cancel, 'ck-button-cancel')

        // Delegate ButtonView#execute to FormView#cancel
        this.cancelButtonView.delegate('execute').to(this, 'cancel')

        this.setTemplate({
            tag: 'form',
            attributes: {
                class: ['ck'],
                tabindex: '-1'
            },
            children: [
                this.addRow([this.tooltipTextInputView]),
                this.addRow([this.positionInputView]),
                this.addRow([this.saveButtonView, this.cancelButtonView], [styles.formActionContainer]),
            ]
        })
    }

    render() {
        super.render()

        // Submit the form when the user clicked the save button or pressed enter in the input.
        submitHandler({
            view: this
        })
    }

    focus() {
        this.tooltipTextInputView.focus()
    }

    _createButton(label, icon, className) {
        const button = new ButtonView()

        button.set({
            label,
            icon,
            tooltip: true,
            class: className
        })

        return button
    }

    private addRow(children: any[], extraClass: string[] = []) {
        return {
            tag: 'div',
            attributes: {
                class: [styles.formRow, ...extraClass]
            },
            children
        }
    }
}

