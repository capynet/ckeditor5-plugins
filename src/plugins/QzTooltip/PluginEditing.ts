import {Plugin, toWidget} from '@ckeditor-imports/index'
import InsertCommand from './InsertCommand'
import PluginConf from "./PluginConf"

export default class PluginEditing extends Plugin {
    init() {
        this._defineSchema()
        this._defineConverters()
        this.editor.commands.add(PluginConf.commandName, new InsertCommand(this.editor))
    }

    _defineSchema() {
        const schema = this.editor.model.schema

        schema.register('qzTooltipSchema', {
            inheritAllFrom: '$inlineObject',
            allowAttributes: ['position', 'tooltip', 'triggerHtml']
        })
    }

    createElementFromHtml (html, writer) {
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        return writer.createRawElement('span', {}, function(domElement) {
            domElement.innerHTML = doc.body.innerHTML
        })
    }

    _defineConverters() {
        const editor = this.editor
        const conversion = editor.conversion

        // This view-to-model converter.
        conversion.for('upcast').elementToElement({
            model: (viewElement, {writer}) => {
                const element = writer.createElement('qzTooltipSchema', {
                    position: viewElement.getAttribute('position') || 'top'
                })

                const tooltipContent = []
                let triggerContent = null

                // @ts-ignore
                for (const child of viewElement.getChildren()) {
                    if (child.getAttribute && child.getAttribute('slot') === 'trigger') {
                        triggerContent = editor.data.processor.toData(child)
                    } else {
                        tooltipContent.push(editor.data.processor.toData(child))
                    }
                }

                writer.setAttribute('tooltip', tooltipContent.join(''), element)
                if (triggerContent) {
                    writer.setAttribute('triggerHtml', triggerContent, element)
                }

                return element
            },
            view: {
                name: 'qz-tooltip'
            }
        })

        // Conversion to a CKEditor widget (what the user interacts inside the editor).
        conversion.for('editingDowncast').elementToElement({
            model: 'qzTooltipSchema',
            view: (modelElement, {writer}) => {
                const tooltipElement = writer.createContainerElement('qz-tooltip', {
                    position: modelElement.getAttribute('position')
                })

                writer.setCustomProperty('qz', true, tooltipElement)
                writer.setCustomProperty('qzType', 'tooltip', tooltipElement)

                const tooltipContent = this.createElementFromHtml(
                    modelElement.getAttribute('tooltip') || '',
                    writer
                )
                writer.insert(writer.createPositionAt(tooltipElement, 0), tooltipContent)

                if (modelElement.getAttribute('triggerHtml')) {
                    const trigger = writer.createContainerElement('span', { slot: 'trigger' })
                    const triggerContent = this.createElementFromHtml(
                        modelElement.getAttribute('triggerHtml'),
                        writer
                    )
                    writer.insert(writer.createPositionAt(trigger, 0), triggerContent)
                    writer.insert(writer.createPositionAt(tooltipElement, 'end'), trigger)
                }

                return toWidget(tooltipElement, writer)
            }
        })

        // Conversion to HTML output (the data stored on DB).
        conversion.for('dataDowncast').elementToElement({
            model: 'qzTooltipSchema',
            view: (modelElement, {writer}) => {
                const tooltipElement = writer.createContainerElement('qz-tooltip', {
                    position: modelElement.getAttribute('position')
                })

                const tooltipContent = this.createElementFromHtml(
                    modelElement.getAttribute('tooltip') || '',
                    writer
                )
                writer.insert(writer.createPositionAt(tooltipElement, 0), tooltipContent)

                if (modelElement.getAttribute('triggerHtml')) {
                    const trigger = writer.createContainerElement('span', { slot: 'trigger' })
                    const triggerContent = this.createElementFromHtml(
                        modelElement.getAttribute('triggerHtml'),
                        writer
                    )
                    writer.insert(writer.createPositionAt(trigger, 0), triggerContent)
                    writer.insert(writer.createPositionAt(tooltipElement, 'end'), trigger)
                }

                return tooltipElement
            }
        })
    }
}