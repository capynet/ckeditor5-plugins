import {Plugin, ClickObserver, ViewDocumentClickEvent} from '@ckeditor-imports/index'
import {addToolbarTool} from "./utils/toolbarTool"
import {selectedItemIsQz} from "./utils/QzUtils"
import QzContextualBalloon from "./utils/QzContextualBalloon"

export default class PluginUI extends Plugin {
    init() {
        const editor = this.editor
        const t = this.editor.t

        addToolbarTool(this)

        // Attach a listener to the editor.
        editor.editing.view.addObserver(ClickObserver)
        const viewDocument = editor.editing.view.document

        this.listenTo<ViewDocumentClickEvent>(viewDocument, 'click', (evt, data) => {
            const currentElement = selectedItemIsQz(this, 'link')

            if (currentElement) {
                data.preventDefault()
                evt.stop()
                const balloon = new QzContextualBalloon(this)
                balloon.showUIBalloon()
            }
        })

    }

}
