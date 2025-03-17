import {Command} from '@ckeditor-imports/index'

export default class InsertCommand extends Command {
    execute({height, color, name}) {
        const model = this.editor.model

        model.change(writer => {
            const element = writer.createElement('qzIconSchema', {
                height,
                color,
                name,
            })

            model.insertContent(element)
        })

    }

    refresh() {
        const model = this.editor.model
        const selection = model.document.selection
        const allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'qzIconSchema')
        this.isEnabled = allowedIn !== null

        const firstRange = selection.getFirstRange()

        if (!firstRange.isCollapsed) {

            const el = selection.getSelectedElement()
            if (el && el.name === 'qzIconSchema') {
                this.value = {
                    height: el.getAttribute('height'),
                    color: el.getAttribute('color'),
                    name: el.getAttribute('name'),
                }
            }
        } else {
            this.value = null
        }

    }
}
