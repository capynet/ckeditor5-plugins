import {Plugin, toWidget} from 'ckeditor5';
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
            allowAttributes: ['href', 'title', 'button', 'text']
        });
    }

    _defineConverters() {
        const editor = this.editor;
        const conversion = editor.conversion;

        conversion.for('upcast').elementToElement({

            model: (viewElement, {writer}) => {

                return writer.createElement('qzLinkSchema', {
                    'href': viewElement.getAttribute('href'),
                    'title': viewElement.getAttribute('title'),
                    'button': viewElement.getAttribute('button'),
                    'text': viewElement.getChild(0),
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

                const attributes = {
                    "href": modelElement.getAttribute('href'),
                    "title": modelElement.getAttribute('title'),
                };

                if (modelElement.getAttribute('button') !== undefined) {
                    attributes['button'] = modelElement.getAttribute('button')
                }

                const element = writer.createContainerElement('qz-link', attributes);

                const text = modelElement.getAttribute('text')
                const innerText = writer.createText(text.data);
                writer.insert(writer.createPositionAt(element, 0), innerText);

                return toWidget(element, writer);
            }
        })


    }
}
