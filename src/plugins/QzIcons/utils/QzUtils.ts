import {Plugin, isWidget, ViewContainerElement} from '@ckeditor-imports/index'

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
