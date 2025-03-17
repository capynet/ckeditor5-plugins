import {type Plugin, ContextualBalloon, clickOutsideHandler} from '@ckeditor-imports/index'
import FormView from "./form"
import pluginConf from "../PluginConf"

export default class QzContextualBalloon {
    private _balloon: ContextualBalloon
    private plugin: Plugin
    private formView: any
    private selectedContent: string | null = null

    constructor(plugin: Plugin) {
        this.plugin = plugin
        this.formView = new FormView(plugin)
        this._balloon = this.plugin.editor.plugins.get(ContextualBalloon)
    }

    showUIBalloon = () => {
        this.plugin.stopListening(this.formView, 'cancel')
        this.plugin.stopListening(this.formView, 'submit')

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
            const command = this.plugin.editor.commands.get(pluginConf.commandName)
            const currentValues = command.value || {}

            const value = {
                position: this.formView.currentPosition,
                tooltip: this.formView.tooltipTextInputView.fieldView.element.value,
                triggerHtml: this.selectedContent || currentValues.triggerHtml
            }

            this.plugin.editor.execute(pluginConf.commandName, value)
            this.hideUIBalloon()
        })

        const commandValues = this.plugin.editor.commands.get(pluginConf.commandName).value

        if (commandValues) {
            this.formView.currentPosition = commandValues.position
            this.formView.tooltipTextInputView.fieldView.value = commandValues.tooltip
            this.formView.positionInputView.buttonView.set({
                label: this.formView.positionValues[commandValues.position]
            })
        } else {
            const selection = this.plugin.editor.model.document.selection

            // Get the HTML content from the selected range
            const viewFragment = this.plugin.editor.data.toView(
                this.plugin.editor.model.getSelectedContent(selection)
            )
            const htmlContent = this.plugin.editor.data.processor.toData(viewFragment)
            this.selectedContent = htmlContent

            this.formView.tooltipTextInputView.fieldView.element.value = ''
            this.formView.currentPosition = pluginConf.defaultPosition
            this.formView.positionInputView.buttonView.set({
                label: this.formView.positionValues[pluginConf.defaultPosition]
            })
        }

        this.formView.focus()
    }

    private getBalloonPositionData = () => {
        const view = this.plugin.editor.editing.view
        const viewDocument = view.document
        let target = null

        // Set a target position by converting view selection range to DOM
        target = () => view.domConverter.viewRangeToDom(viewDocument.selection.getFirstRange())
        return { target }
    }

    private hideUIBalloon = () => {
        if (this._balloon.hasView(this.formView)) {
            this.formView.currentPosition = pluginConf.defaultPosition
            this.formView.tooltipTextInputView.fieldView.element.value = ''
            this.formView.element.reset()
            this.selectedContent = null

            this._balloon.remove(this.formView)
            this.plugin.editor.editing.view.focus()
        }
    }
}