/**
 * Usage
 * ```
 * const selection = plugin.editor.model.document.selection;
 * const selectedText = getRangeText(selection.getFirstRange());
 * ```
 * @param range
 */
export default function getRangeText(range) {
    console.log(range);
    return Array.from(range.getItems()).reduce((rangeText, node) => {
        if (!(node.is('text') || node.is('textProxy'))) {
            return rangeText;
        }

        return rangeText + node.data;
    }, '');
}