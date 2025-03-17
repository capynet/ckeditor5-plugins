import {
    icons,
    type Plugin,
    View,
    SwitchButtonView,
    submitHandler,
    LabeledFieldView,
    createLabeledInputText,
    ButtonView,
    addListToDropdown,
    createDropdown,
    Collection,
    ViewModel,
    type ListDropdownItemDefinition
} from '@ckeditor-imports/index'
import pluginConf from "../PluginConf"
import styles from "../style.module.css"

export default class FormView extends View {
    public textInputView
    public hrefInputView
    public titleInputView
    public isButtonSwitch
    public isOutlineSwitch
    public saveButtonView
    public cancelButtonView
    public sizeDropdown
    public currentSize = pluginConf.defaultSize
    public sizeValues = pluginConf.sizeValues
    public targetDropdown
    public currentTarget = '_self'
    public targetValues = {
        '_self': 'Open on same tab',
        '_blank': 'Open on new tab'
    }

    constructor(plugin: Plugin) {
        super(plugin.editor.locale)
        this.textInputView = this.createInput('Text')
        this.hrefInputView = this.createInput('href')
        this.titleInputView = this.createInput('Title')

        this.isButtonSwitch = new SwitchButtonView(plugin.editor.locale)

        this.isButtonSwitch.set({
            label: 'Is button',
            withText: true,
            isOn: true
        })

        this.isButtonSwitch.on('execute', () => {
            this.isButtonSwitch.isOn = !this.isButtonSwitch.isOn
        })

        this.isOutlineSwitch = new SwitchButtonView(plugin.editor.locale)

        this.isOutlineSwitch.set({
            label: 'Is outline',
            withText: true,
            isOn: false
        })

        this.isOutlineSwitch.on('execute', () => {
            this.isOutlineSwitch.isOn = !this.isOutlineSwitch.isOn
        })

        this.saveButtonView = this.createButton('Save', icons.check, 'ck-button-save')
        this.saveButtonView.type = 'submit'

        this.cancelButtonView = this.createButton('Cancel', icons.cancel, 'ck-button-cancel')

        // Delegate ButtonView#execute to FormView#cancel
        this.cancelButtonView.delegate('execute').to(this, 'cancel')

        // Size dropdown.
        const dropdownView = createDropdown(plugin.editor.locale)

        dropdownView.buttonView.set({
            withText: true,
            label: this.sizeValues[this.currentSize],
            tooltip: true,
        })

        const items = new Collection()

        Object.entries(pluginConf.sizeValues).forEach(([value, label]) => {
            items.add({
                type: 'button',
                model: new ViewModel({
                    withText: true,
                    label,
                    value,
                })
            })
        })

        dropdownView.on('execute', evt => {
            const selectedItem = evt.source as { value: string }
            this.currentSize = selectedItem.value

            dropdownView.buttonView.set({
                label: this.sizeValues[selectedItem.value]
            })
        })

        addListToDropdown(dropdownView, items as Collection<ListDropdownItemDefinition>)
        this.sizeDropdown = dropdownView

        const targetDropdownView = createDropdown(plugin.editor.locale)
        targetDropdownView.buttonView.set({
            withText: true,
            label: this.targetValues[this.currentTarget],
            tooltip: true,
        })

        const targetItems = new Collection()
        Object.entries(this.targetValues).forEach(([value, label]) => {
            targetItems.add({
                type: 'button',
                model: new ViewModel({
                    withText: true,
                    label,
                    value,
                })
            })
        })

        targetDropdownView.on('execute', evt => {
            const selectedItem = evt.source as { value: string }
            this.currentTarget = selectedItem.value

            targetDropdownView.buttonView.set({
                label: this.targetValues[selectedItem.value]
            })
        })

        addListToDropdown(targetDropdownView, targetItems as Collection<ListDropdownItemDefinition>)
        this.targetDropdown = targetDropdownView


        this.setTemplate({
            tag: 'form',
            attributes: {
                class: ['ck'],
                tabindex: '-1'
            },
            children: [
                this.addRow([this.textInputView, this.hrefInputView]),
                this.addRow([this.titleInputView, this.targetDropdown]),
                this.addRow([this.sizeDropdown, this.isButtonSwitch, this.isOutlineSwitch]),
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
        if (this.textInputView.isEnabled) {
            this.textInputView.focus()
        }
        // Focus the "href" title field if "title" is disabled.
        else {
            this.hrefInputView.focus()
        }
    }

    private createInput(label) {
        const labeledInput = new LabeledFieldView(this.locale, createLabeledInputText)
        labeledInput.label = label
        return labeledInput
    }

    private createButton(label, icon, className) {
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

