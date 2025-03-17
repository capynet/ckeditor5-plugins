import {Plugin, toWidget} from '@ckeditor-imports/index'
import InsertCommand from './InsertCommand'
import PluginConf from "./PluginConf";

export default class PluginEditing extends Plugin {
    init() {
        this._defineSchema()
        this._defineConverters()

        // Register command.
        this.editor.commands.add(PluginConf.commandName, new InsertCommand(this.editor))
    }

    _defineSchema() {
        const schema = this.editor.model.schema

        schema.register('qzLinkSchema', {
            inheritAllFrom: '$inlineObject',
            allowAttributes: ['href', 'title', 'button', 'outline', 'text', 'size', 'target']
        })
    }

    _defineConverters() {
        const editor = this.editor
        const conversion = editor.conversion

        // This view-to-model converter.
        conversion.for('upcast').elementToElement({
            model: (viewElement, {writer}) => {
                return writer.createElement('qzLinkSchema', {
                    'href': viewElement.getAttribute('href'),
                    'title': viewElement.getAttribute('title'),
                    'button': viewElement.getAttribute('button'),
                    'outline': viewElement.getAttribute('outline'),
                    'text': viewElement.getChild(0).data,
                    'size': viewElement.getAttribute('size'),
                    'target': viewElement.getAttribute('target'),
                })
            },
            view: {
                name: 'qz-link',
                attributes: ['href', 'title']
            }
        })

        const createLinkView = (modelElement: any, writer: any, isEditing = false) => {
            const attributes = {
                "href": modelElement.getAttribute('href'),
                "title": modelElement.getAttribute('title'),
                "size": modelElement.getAttribute('size') || 'normal',
                "target": modelElement.getAttribute('target') || '_self',
            }

            if (modelElement.getAttribute('button') !== undefined) {
                attributes['button'] = modelElement.getAttribute('button')
            }

            if (modelElement.getAttribute('outline') !== undefined) {
                attributes['outline'] = modelElement.getAttribute('outline')
            }

            const element = writer.createContainerElement('qz-link', attributes)

            if (isEditing) {
                // Mark this new element as qz one in order to easily identify it on other parts of the plugin.
                writer.setCustomProperty('qz', true, element);
                writer.setCustomProperty('qzType', 'link', element);
            }

            const text = modelElement.getAttribute('text') as { data: string } | string
            const textContent = typeof text === 'object' ? text.data : text
            const innerText = writer.createText(textContent)
            writer.insert(writer.createPositionAt(element, 0), innerText)

            return isEditing ? toWidget(element, writer) : element
        }

        // Conversion to a CKEditor widget (what the user interacts inside the editor).
        conversion.for('editingDowncast').elementToElement({
            model: 'qzLinkSchema',
            view: (modelElement, {writer}) => createLinkView(modelElement, writer, true)
        })

        // Conversion to HTML output (the data stored on DB).
        conversion.for('dataDowncast').elementToElement({
            model: 'qzLinkSchema',
            view: (modelElement, {writer}) => createLinkView(modelElement, writer)
        })
    }
}