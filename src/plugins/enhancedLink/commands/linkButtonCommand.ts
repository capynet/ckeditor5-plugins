import {
    Command
} from '@ckeditor-imports/index'

export default class LinkButtonCommand extends Command {
    execute(isButton) {
        const model = this.editor.model
        const selection = model.document.selection

        model.change(writer => {
            if (selection.isCollapsed) {
                const position = selection.getFirstPosition()
                if (position.parent.hasAttribute('linkButton')) {
                    writer.setAttribute('linkButton', isButton, position.parent)
                }
            } else {
                const ranges = model.schema.getValidRanges(selection.getRanges(), 'linkButton')
                for (const range of ranges) {
                    writer.setAttribute('linkButton', isButton, range)
                }
            }
        })
    }

    refresh() {
        const model = this.editor.model
        const selection = model.document.selection

        this.isEnabled = model.schema.checkAttributeInSelection(selection, 'linkButton')
        this.value = selection.getAttribute('linkButton')
    }
}