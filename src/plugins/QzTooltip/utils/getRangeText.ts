/**
 * Usage
 * ```
 * const selection = plugin.editor.model.document.selection
 * const selectedText = getRangeText(selection.getFirstRange())
 * ```
 * @param range
 */
export default function getRangeText(range, editor) {
    return Array.from(range.getItems()).reduce((rangeHtml, node: any) => {
        // If it's a text node, add its data
        if (node.is('text') || node.is('textProxy')) {
            return rangeHtml + node.data
        }

        // If it's a custom element like qz-icon, get its outer HTML
        if (node.is('element')) {
            const viewFragment = editor.data.processor.toView(node)
            const htmlContent = editor.data.processor.toData(viewFragment)
            return rangeHtml + htmlContent
        }

        return rangeHtml
    }, '')
}