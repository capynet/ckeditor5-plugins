import {type Plugin, ContextualBalloon, clickOutsideHandler} from '@ckeditor-imports/index'
import getRangeText from "./getRangeText"
import PluginConf from "../PluginConf";
import FormView from "./form";

export default class  QzContextualBalloon {
    private _balloon: ContextualBalloon;
    private plugin: Plugin;
    private formView: any;

    constructor(plugin: Plugin) {
        this.plugin = plugin
        this.formView = new FormView(plugin)
        this._balloon = plugin.editor.plugins.get(ContextualBalloon)
    }

    showUIBalloon = () => {
        this.plugin.stopListening(this.formView, 'cancel')
        this.plugin.stopListening(this.formView, 'submit')
        this.plugin.stopListening(this.formView, 'size')
        this.plugin.stopListening(this.formView, 'target')

        this._balloon.add({
            view: this.formView,
            position: this.getBalloonPositionData()
        })

        // Hide the form view when clicking outside the balloon.
        clickOutsideHandler({
            emitter: this.formView,
            activator: () => this._balloon.visibleView === this.formView && this._balloon.hasView(this.formView),
            contextElements: [this._balloon.view.element],
            callback: () => this.hideUIBalloon()
        })

        // Hide the form view after clicking the "Cancel" button.
        this.plugin.listenTo(this.formView, 'cancel', () => {
            this.hideUIBalloon()
        })

        this.plugin.listenTo(this.formView, 'submit', () => {
            const value = {
                href: this.formView.hrefInputView.fieldView.element.value,
                text: this.formView.textInputView.fieldView.element.value,
                title: this.formView.titleInputView.fieldView.element.value,
                button: this.formView.isButtonSwitch.isOn,
                outline: this.formView.isOutlineSwitch.isOn,
                size: this.formView.currentSize,
                target: this.formView.currentTarget,
            }

            this.plugin.editor.execute(PluginConf.commandName, value as any)
            this.hideUIBalloon()
        })

        const commandValues = this.plugin.editor.commands.get(PluginConf.commandName).value as {
            text: string;
            href: string;
            title: string;
            button?: string;
            outline?: string;
            size: string;
            target: string;
        }

        if (commandValues) {
            this.formView.textInputView.fieldView.value = commandValues.text
            this.formView.hrefInputView.fieldView.value = commandValues.href
            this.formView.titleInputView.fieldView.value = commandValues.title
            this.formView.isButtonSwitch.isOn = commandValues.button !== undefined
            this.formView.isOutlineSwitch.isOn = commandValues.outline !== undefined

            this.formView.currentSize = commandValues.size
            this.formView.sizeDropdown.buttonView.set({
                label: this.formView.sizeValues[commandValues.size]
            })

            this.formView.currentTarget = commandValues.target || '_self'
            this.formView.targetDropdown.buttonView.set({
                label: this.formView.targetValues[commandValues.target || '_self']
            })

        } else {
            const selection = this.plugin.editor.model.document.selection
            this.formView.textInputView.fieldView.value = getRangeText(selection.getFirstRange())
            this.formView.textInputView.isEnabled = selection.getFirstRange().isCollapsed
            this.formView.currentSize = PluginConf.defaultSize
            this.formView.currentSize = '_self'
        }

        this.formView.focus()
    }

    private getBalloonPositionData = () => {
        const view = this.plugin.editor.editing.view
        const viewDocument = view.document
        let target = null

        // Set a target position by converting view selection range to DOM
        target = () => view.domConverter.viewRangeToDom(viewDocument.selection.getFirstRange())

        return {
            target
        }
    }

    private hideUIBalloon = () => {
        if (this._balloon.hasView(this.formView)) {
            this.formView.textInputView.fieldView.value = ''
            this.formView.hrefInputView.fieldView.value = ''
            this.formView.currentSize = PluginConf.defaultSize
            this.formView.currentTarget = '_self'

            this.formView.element.reset()
            this._balloon.remove(this.formView)
            this.plugin.editor.editing.view.focus()
        }
    }
}
