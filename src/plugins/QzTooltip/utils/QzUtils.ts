import {Plugin, isWidget, ViewContainerElement} from '@ckeditor-imports/index'

/**
 * Usage example:
 * ```
 * this.listenTo<ViewDocumentClickEvent>(viewDocument, 'click', () => {
 *     const currentElement = selectedItemIsQz(this, 'link')
 *
 *     if (currentElement) {
 *         // Execute what you need here.
 *         console.log(currentElement)
 *     }
 * })
 * ```
 */
const selectedItemIsQz = (plugin: Plugin, qzType: String): ViewContainerElement | null => {
    const view = plugin.editor.editing.view
    const selection = view.document.selection
    const selectedElement = selection.getSelectedElement()

    if (selectedElement && isWidget(selectedElement)) {
        const qzTypeProp = selectedElement.getCustomProperty('qzType')
        if (qzTypeProp === qzType) {
            return selectedElement
        }
    }

    return null
}

export {selectedItemIsQz}