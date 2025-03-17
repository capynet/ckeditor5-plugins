import {type Plugin, ContextualBalloon, clickOutsideHandler} from '@ckeditor-imports/index'
import PluginConf from "../PluginConf";
import FormView from "./form";

export default class QzContextualBalloon {
    private _balloon: ContextualBalloon;
    private plugin: Plugin;
    private formView: any;

    constructor(plugin: Plugin) {
        this.plugin = plugin
        this.formView = new FormView(plugin)
        this._balloon = this.plugin.editor.plugins.get(ContextualBalloon)
    }

    showUIBalloon = () => {
        this.plugin.stopListening(this.formView, 'cancel')
        this.plugin.stopListening(this.formView, 'submit')
        this.plugin.stopListening(this.formView, 'height')
        this.plugin.stopListening(this.formView, 'color')
        this.plugin.stopListening(this.formView, 'name')

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
                height: this.formView.currentHeight,
                color: this.formView.currentColor,
                name: this.formView.iconHidden.value,
            }

            this.plugin.editor.execute(PluginConf.commandName, value as any)
            this.hideUIBalloon()
        })

        const commandValues = this.plugin.editor.commands.get(PluginConf.commandName).value as {
            height: string;
            color: string;
            name: string;
        }

        if (commandValues) {
            this.formView.currentHeight = commandValues.height
            this.formView.currentColor = commandValues.color
            this.formView.iconHidden.value = commandValues.name
            this.formView.heightDropdown.buttonView.set({
                label: this.formView.heightValues[commandValues.height]
            })
            this.formView.colorDropdown.buttonView.set({
                label: this.formView.colorValues[commandValues.color]
            })
        } else {
            this.formView.currentHeight = PluginConf.defaultHeight
            this.formView.currentColor = PluginConf.defaultColor
            this.formView.iconHidden.value = PluginConf.defaultIcon
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
            this.formView.currentHeight = PluginConf.defaultHeight
            this.formView.currentColor = PluginConf.defaultColor
            this.formView.iconHidden.value = PluginConf.defaultIcon

            this.formView.element.reset()
            this._balloon.remove(this.formView)
            this.plugin.editor.editing.view.focus()
        }
    }
}
