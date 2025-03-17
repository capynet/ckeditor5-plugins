import {
    Command
} from '@ckeditor-imports/index'

export default class LinkSizeCommand extends Command {
    execute(size) {
        const model = this.editor.model
        const selection = model.document.selection

        model.change(writer => {
            if (selection.isCollapsed) {
                const position = selection.getFirstPosition()
                if (position.parent.hasAttribute('linkSize')) {
                    writer.setAttribute('linkSize', size, position.parent)
                }
            } else {
                const ranges = model.schema.getValidRanges(selection.getRanges(), 'linkSize')
                for (const range of ranges) {
                    writer.setAttribute('linkSize', size, range)
                }
            }
        })
    }

    refresh() {
        const model = this.editor.model
        const selection = model.document.selection

        this.isEnabled = model.schema.checkAttributeInSelection(selection, 'linkSize')
        this.value = selection.getAttribute('linkSize')
    }
}