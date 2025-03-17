import { Command } from '@ckeditor-imports/index'

export default class EnhancedLinkCommand extends Command {
    execute(href) {
        const model = this.editor.model
        const selection = model.document.selection

        model.change(writer => {
            const ranges = model.schema.getValidRanges(selection.getRanges(), 'linkHref')
            for (const range of ranges) {
                writer.setAttribute('linkHref', href, range)
            }
        })
    }

    refresh() {
        const model = this.editor.model
        const selection = model.document.selection

        this.isEnabled = model.schema.checkAttributeInSelection(selection, 'linkHref')
        this.value = selection.getAttribute('linkHref')
    }
}