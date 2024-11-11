import {Plugin} from 'ckeditor5';
import InsertCommand from './InsertCommand';

export default class PluginEditing extends Plugin {
    init() {
        this._defineSchema();
        this._defineConverters();
        this.editor.commands.add('insertComponentCommand', new InsertCommand(this.editor));
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register('qzLinkSchema', {
            inheritAllFrom: '$inlineObject',
            allowAttributes: ['href', 'title']
        });
    }

    _defineConverters() {
        const editor = this.editor;
        const conversion = editor.conversion;

        conversion.for('upcast').elementToElement({
            model: (viewElement, {writer}) => {
                return writer.createElement('qzLinkSchema', {
                    'href': viewElement.getAttribute('href'),
                    'title': viewElement.getAttribute('title')
                });
            },
            view: {
                name: 'qz-link',
                attributes: ['href', 'title']
            }
        });

        conversion.for('downcast').elementToElement({
            model: 'qzLinkSchema',
            view: (modelElement, {writer}) => {
                return writer.createContainerElement('qz-link', {
                    "href": modelElement.getAttribute('href'),
                    "title": modelElement.getAttribute('title')
                });
            }
        })


    }
}
