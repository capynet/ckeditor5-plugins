import {Plugin} from 'ckeditor5';
import InsertCommand from './InsertCommand';

export default class TooltipPluginEditing extends Plugin {
    init() {
        this._defineSchema();
        this._defineConverters();
        this.editor.commands.add('insertComponentCommand', new InsertCommand(this.editor));
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register('tooltipSchema', {
            inheritAllFrom: '$inlineObject',
            allowAttributes: ['data-title', 'data-tooltip']
        });
    }

    _defineConverters() {
        const editor = this.editor;
        const conversion = editor.conversion;

        conversion.for('upcast').elementToElement({
            model: (viewElement, {writer}) => {
                return writer.createElement('tooltipSchema', {
                    'data-title': viewElement.getAttribute('data-title'),
                    'data-tooltip': viewElement.getAttribute('data-tooltip')
                });
            },
            view: {
                name: 'x-tooltip',
                attributes: ['data-title', 'data-tooltip']
            }
        });

        conversion.for('downcast').elementToElement({
            model: 'tooltipSchema',
            view: (modelElement, {writer}) => {
                return writer.createContainerElement('x-tooltip', {
                    "data-title": modelElement.getAttribute('data-title'),
                    "data-tooltip": modelElement.getAttribute('data-tooltip')
                });
            }
        })


    }
}
