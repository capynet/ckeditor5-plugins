import {Plugin, toWidget} from '@ckeditor-imports/index'
import InsertCommand from './InsertCommand'
import PluginConf from "./PluginConf";

export default class PluginIconsEditing extends Plugin {
    init() {
        this._defineSchema()
        this._defineConverters()

        // Register command.
        this.editor.commands.add(PluginConf.commandName, new InsertCommand(this.editor))
    }

    _defineSchema() {
        const schema = this.editor.model.schema

        schema.register('qzIconSchema', {
            inheritAllFrom: '$inlineObject',
            allowAttributes: ['name', 'height', 'color']
        })
    }

    _defineConverters() {
        const editor = this.editor
        const conversion = editor.conversion

        // This view-to-model converter.
        conversion.for('upcast').elementToElement({
            model: (viewElement, {writer}) => {
                return writer.createElement('qzIconSchema', {
                    'name': viewElement.getAttribute('name'),
                    'height': viewElement.getAttribute('height'),
                    'color': viewElement.getAttribute('color') || 'black',
                })
            },
            view: {
                name: 'qz-icon',
                attributes: ['name']
            }
        })

        const createIconView = (modelElement: any, writer: any, isEditing = false) => {
            const attributes = {
                "name": modelElement.getAttribute('name'),
            }

            if (modelElement.getAttribute('height') !== undefined) {
                attributes['height'] = modelElement.getAttribute('height')
            }

            if (modelElement.getAttribute('color') !== undefined) {
                attributes['color'] = modelElement.getAttribute('color')
            }

            const element = writer.createContainerElement('qz-icon', attributes)

            if (isEditing) {
                // Mark this new element as qz one in order to easily identify it on other parts of the plugin.
                writer.setCustomProperty('qz', true, element);
                writer.setCustomProperty('qzType', 'icon', element);
            }

            return isEditing ? toWidget(element, writer) : element
        }

        // Conversion to a CKEditor widget (what the user interacts inside the editor).
        conversion.for('editingDowncast').elementToElement({
            model: 'qzIconSchema',
            view: (modelElement, {writer}) => createIconView(modelElement, writer, true)
        })

        // Conversion to HTML output (the data stored on DB).
        conversion.for('dataDowncast').elementToElement({
            model: 'qzIconSchema',
            view: (modelElement, {writer}) => createIconView(modelElement, writer)
        })
    }
}