import {Command} from '@ckeditor-imports/index'
import PluginConf from "./PluginConf"

export default class InsertCommand extends Command {
    execute({href, text, button, outline, title, size, target}) {
        const model = this.editor.model

        model.change(writer => {
            button = button === false ? undefined : ''
            outline = outline === false ? undefined : ''

            const element = writer.createElement('qzLinkSchema', {
                href,
                title,
                text,
                button,
                outline,
                size,
                target,
            })

            model.insertContent(element)
        })
    }

    refresh() {
        const model = this.editor.model
        const selection = model.document.selection
        const allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'qzLinkSchema')
        this.isEnabled = allowedIn !== null

        const firstRange = selection.getFirstRange()
        if (!firstRange.isCollapsed) {
            const el = selection.getSelectedElement()
            if (el && el.name === 'qzLinkSchema') {
                this.value = {
                    text: el.getAttribute('text')?.toString() || '',
                    href: el.getAttribute('href'),
                    title: el.getAttribute('title'),
                    button: el.getAttribute('button') ?? undefined,
                    outline: el.getAttribute('outline') ?? undefined,
                    size: el.getAttribute('size') ?? PluginConf.defaultSize,
                    target: el.getAttribute('target') ?? '_self',
                }
            }
        } else {
            this.value = null
        }
    }
}