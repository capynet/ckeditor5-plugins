import {Plugin, ClickObserver, ViewDocumentClickEvent} from '@ckeditor-imports/index'
import {addToolbarTool} from "./utils/toolbarTool"
import QzContextualBalloon from "./utils/QzContextualBalloon";
import {selectedItemIsQz} from "./utils/QzUtils";

export default class PluginIconsUI extends Plugin {
    init() {
        const editor = this.editor
        const t = this.editor.t

        addToolbarTool(this)

        // Attach a listener to the editor.
        editor.editing.view.addObserver(ClickObserver)
        const viewDocument = editor.editing.view.document

        this.listenTo<ViewDocumentClickEvent>(viewDocument, 'click', () => {
            const currentElement = selectedItemIsQz(this, 'icon')

            if (currentElement) {
                const balloon = new QzContextualBalloon(this)
                balloon.showUIBalloon()
            }
        })


    }

}
