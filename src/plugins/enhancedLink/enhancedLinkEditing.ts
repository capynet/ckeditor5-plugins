import {Plugin, type DowncastConversionApi, type ViewAttributeElement, addLinkProtocolIfApplicable} from '@ckeditor-imports/index'

// Constants for size values
const SIZES = ['normal', 'large', 'huge'] as const
type LinkSize = typeof SIZES[number]

export function createEnhancedLinkElement(href: string, size: LinkSize | null, isButton: boolean, { writer }: DowncastConversionApi): ViewAttributeElement {
    // Create base link element
    const linkElement = writer.createAttributeElement('a', { href }, { priority: 5 })

    // Add custom property to identify as link
    writer.setCustomProperty('link', true, linkElement)

    // Add size attribute if present
    if (size && SIZES.includes(size)) {
        writer.setAttribute('size', size, linkElement)
    }

    // Add button attribute if true
    if (isButton) {
        writer.setAttribute('button', 'true', linkElement)
    }

    return linkElement
}

export default class EnhancedLinkEditing extends Plugin {
    public static get pluginName() {
        return 'EnhancedLinkEditing' as const
    }

    public init(): void {
        const editor = this.editor
        const schema = editor.model.schema

        // Allow link attributes on text
        schema.extend('$text', {
            allowAttributes: ['linkHref', 'linkSize', 'linkButton']
        })

        // Setup converters
        this._setupConversion()
    }

    private _setupConversion(): void {
        const editor = this.editor

        // Downcast converter
        editor.conversion.for('downcast').attributeToElement({
            model: {
                key: 'linkHref',
                value: (value, { writer }) => ({
                    href: value,
                    size: editor.model.document.selection.getAttribute('linkSize'),
                    button: editor.model.document.selection.getAttribute('linkButton')
                })
            },
            view: (linkData, { writer }) => {
                if (!linkData) {
                    return
                }

                const { href, size, button } = linkData
                return createEnhancedLinkElement(href, size, button, { writer })
            }
        })

        // Upcast converter
        editor.conversion.for('upcast').elementToAttribute({
            view: {
                name: 'a',
                attributes: {
                    href: true
                }
            },
            model: {
                key: 'linkHref',
                value: viewElement => viewElement.getAttribute('href')
            }
        })

        // Upcast size attribute
        editor.conversion.for('upcast').elementToAttribute({
            view: {
                name: 'a',
                attributes: ['size']
            },
            model: {
                key: 'linkSize',
                value: viewElement => viewElement.getAttribute('size')
            }
        })

        // Upcast button attribute
        editor.conversion.for('upcast').elementToAttribute({
            view: {
                name: 'a',
                attributes: ['button']
            },
            model: {
                key: 'linkButton',
                value: viewElement => viewElement.getAttribute('button') === 'true'
            }
        })
    }


}