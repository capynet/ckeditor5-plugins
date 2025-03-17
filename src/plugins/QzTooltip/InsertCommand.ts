import {Command} from '@ckeditor-imports/index'

export default class InsertCommand extends Command {
    execute({position, tooltip, triggerHtml}) {
        const model = this.editor.model
        model.change(writer => {
            const element = writer.createElement('qzTooltipSchema', {
                position,
                tooltip,
                triggerHtml: triggerHtml || this.value?.triggerHtml || ''
            })
            model.insertContent(element)
        })
    }

    refresh() {
        const model = this.editor.model
        const selection = model.document.selection
        const allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'qzTooltipSchema')
        this.isEnabled = allowedIn !== null

        const firstRange = selection.getFirstRange()

        if (!firstRange.isCollapsed) {
            const el = selection.getSelectedElement()
            if (el && el.name === 'qzTooltipSchema') {
                this.value = {
                    triggerHtml: el.getAttribute('triggerHtml'),
                    position: el.getAttribute('position') ?? undefined,
                    tooltip: el.getAttribute('tooltip') ?? ''
                }
            }
        } else {
            this.value = null
        }
    }
}